#!/usr/bin/env python3
"""
Convert content.json to content.js
This script reads a JSON file and wraps it in a loadContent() call for use in the HTML page.
"""

import json
import sys

def convert_json_to_js(json_file_path, output_path):
    """Convert JSON file to JS file that calls loadContent()"""
    try:
        # Read the JSON file
        with open(json_file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Write the JS file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('// Painting Animation Documentation Content\n')
            f.write('// Auto-generated from JSON - Do not edit directly\n')
            f.write('// Generated: ' + json.dumps(data.get('metadata', {}).get('lastUpdated', '')) + '\n\n')
            f.write('loadContent(')
            
            # Write the JSON data with proper formatting
            json.dump(data, f, indent=2, ensure_ascii=False)
            
            f.write(');\n')
        
        print(f"✅ Successfully converted {json_file_path} to {output_path}")
        print(f"📄 You can now open index.html in your browser!")
        return True
        
    except FileNotFoundError:
        print(f"❌ Error: Could not find file '{json_file_path}'")
        print(f"   Make sure the file exists and the path is correct.")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Error: Invalid JSON in '{json_file_path}'")
        print(f"   {str(e)}")
        return False
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return False

if __name__ == '__main__':
    # Default paths
    input_file = 'scripts/content.json'
    output_file = 'scripts/content.js'
    
    # Allow command line arguments
    if len(sys.argv) > 1:
        input_file = sys.argv[1]
    if len(sys.argv) > 2:
        output_file = sys.argv[2]
    
    print(f"🔄 Converting {input_file} to {output_file}...")
    print()
    
    success = convert_json_to_js(input_file, output_file)
    
    if success:
        print()
        print("=" * 60)
        print("Next steps:")
        print("1. Open index.html in your web browser")
        print("2. The page should load your content automatically")
        print()
        print("If you make changes to the JSON:")
        print(f"   Run: python3 convert_json_to_js.py")
        print("=" * 60)
    
    sys.exit(0 if success else 1)
