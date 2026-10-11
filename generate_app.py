import base64
import json
import os

# Read logos
with open("/Users/momon/.gemini/antigravity/scratch/test_skrg.png", "rb") as f:
    skrg_b64 = base64.b64encode(f.read()).decode()

with open("/Users/momon/.gemini/antigravity/scratch/test_kpm.png", "rb") as f:
    kpm_b64 = base64.b64encode(f.read()).decode()

print("Logos ready. Building HTML template...")
