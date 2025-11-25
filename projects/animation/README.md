# Painting Animation Documentation Website

A beautiful, responsive HTML page that displays your painting animation documentation.

## 📁 File Structure

```
your-project/
├── index.html              # Main HTML page
├── scripts/
│   ├── content.json        # Your JSON data (you create this)
│   └── content.js          # Generated JS file (auto-created)
└── convert_json_to_js.py   # Conversion script
```

## 🚀 Quick Start

### Option 1: Using the Conversion Script (Recommended)

1. **Create your JSON file**: Save your full JSON content as `scripts/content.json`

2. **Run the conversion script**:
   ```bash
   python3 convert_json_to_js.py
   ```

3. **Open the page**: Open `index.html` in any web browser

### Option 2: Manual Conversion

1. Open `scripts/content.js` in a text editor

2. Replace the sample data with your full JSON:
   - Copy everything from your JSON file (the entire object)
   - Paste it between `loadContent(` and `);`
   - Keep the structure: `loadContent({ ...your JSON here... });`

3. Save and open `index.html` in your browser

## 🔧 Why This Approach?

You're seeing a CORS error because browsers block `fetch()` requests to local `file://` URLs. The solution is to load the data as a JavaScript file instead of JSON:

- ❌ `fetch('scripts/content.json')` - blocked by CORS
- ✅ `<script src="scripts/content.js">` - works locally!

## 📝 Updating Content

Whenever you update your JSON:

```bash
python3 convert_json_to_js.py
```

This regenerates `content.js` and you can refresh your browser to see changes.

## 🌐 For Production (Live Website)

If you want to deploy this to a real website:

### Option A: Keep using JS file (easier)
Just upload everything as-is. The JS file works everywhere.

### Option B: Use JSON (more proper)
If hosting on a web server, you can use the original HTML that fetches JSON:
- Change line in `index.html` from `<script src="scripts/content.js">` to fetch JSON
- Upload to any web server (doesn't work locally, only on http://https://)

## 🎨 Customization

The page styling is embedded in `index.html`. To customize colors/fonts:

1. Open `index.html`
2. Find the `<style>` section
3. Modify the CSS variables in `:root`:
   ```css
   :root {
       --primary-color: #2c3e50;
       --secondary-color: #e74c3c;
       --accent-color: #3498db;
       /* ... more variables ... */
   }
   ```

## ✨ Features

- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Beautiful typography and spacing
- 🚀 Smooth scrolling navigation
- ⬆️ Back-to-top button
- 📑 Auto-generated table of contents
- 🎯 Support for multiple content types:
  - Paragraphs, headings, lists, tables
  - Quotes, callouts, interviews
  - Projects, resources, artists
  - And more!

## 🐛 Troubleshooting

### Page shows "Loading..." forever
- Check that `scripts/content.js` exists
- Check the browser console for errors (F12 → Console tab)
- Make sure the file starts with `loadContent({` and ends with `});`

### Content doesn't show up
- Verify your JSON structure matches the expected format
- Check for JavaScript errors in console (F12)
- Ensure all required fields are present (metadata, navigation, sections)

### Styling looks broken
- Clear your browser cache (Ctrl/Cmd + Shift + R)
- Check that you're opening `index.html`, not another file

## 📧 Questions?

This documentation page was created to showcase painting animation research. 
For questions about the content or technical issues, refer to the source files or documentation.

---

**Built for**: Painting Animation Documentation Project  
**Author**: Sura Karnawi  
**Year**: 2024-2025
