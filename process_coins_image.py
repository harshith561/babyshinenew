import os
import numpy as np
from PIL import Image
from collections import deque

src_path = r"C:\Users\ramya\.gemini\antigravity-ide\brain\a0f8a998-4e9a-4d7f-a0af-d33dfa5ad23a\3d_baby_coins_1782205503244.png"
dest_path = r"c:\Users\ramya\OneDrive\Desktop\sai-krishana\public\3d_baby_coins.png"

def remove_background(image_path, output_path, tolerance=55):
    print(f"Processing {image_path} with tolerance={tolerance}...")
    img = Image.open(image_path).convert("RGBA")
    data = np.array(img)
    
    # Get image dimensions
    height, width, channels = data.shape
    
    # Corners reference
    corners = [
        data[0, 0, :3],
        data[0, width-1, :3],
        data[height-1, 0, :3],
        data[height-1, width-1, :3]
    ]
    ref_color = np.mean(corners, axis=0)
    print(f"  Reference background color: {ref_color}")
    
    # Create a mask for pixels close to the background color
    diff = data[:, :, :3] - ref_color
    dist = np.sqrt(np.sum(diff ** 2, axis=-1))
    color_mask = dist < tolerance
    
    # Flood fill starting from all border pixels
    bg_mask = np.zeros((height, width), dtype=bool)
    queue = deque()
    
    # Add all border pixels that match the color mask to the queue
    for x in range(width):
        if color_mask[0, x]:
            queue.append((0, x))
            bg_mask[0, x] = True
        if color_mask[height-1, x]:
            queue.append((height-1, x))
            bg_mask[height-1, x] = True
            
    for y in range(height):
        if color_mask[y, 0]:
            queue.append((y, 0))
            bg_mask[y, 0] = True
        if color_mask[y, width-1]:
            queue.append((y, width-1))
            bg_mask[y, width-1] = True
            
    # BFS to find all connected background pixels
    while queue:
        y, x = queue.popleft()
        for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            ny, nx = y + dy, x + dx
            if 0 <= ny < height and 0 <= nx < width:
                if not bg_mask[ny, nx] and color_mask[ny, nx]:
                    bg_mask[ny, nx] = True
                    queue.append((ny, nx))
                    
    # Make background pixels transparent
    data[bg_mask, 3] = 0
    
    # Create PIL image from data
    result_img = Image.fromarray(data, "RGBA")
    
    # Crop the image to the bounding box of non-transparent pixels
    alpha = result_img.split()[-1]
    bbox = alpha.getbbox()
    if bbox:
        result_img = result_img.crop(bbox)
        print(f"  Cropped from {img.size} to {result_img.size}")
    else:
        print("  Warning: Image is fully transparent after background removal!")
        
    result_img.save(output_path, "PNG")
    print(f"  Saved to {output_path}")

if os.path.exists(src_path):
    remove_background(src_path, dest_path, tolerance=55)
else:
    print("Source image not found!")
