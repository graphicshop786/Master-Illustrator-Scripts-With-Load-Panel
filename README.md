# Master Illustrator Scripts With Load Panel 🚀

![Adobe Illustrator](https://img.shields.io/badge/Adobe%20Illustrator-CS6%2B-orange)
![ExtendScript](https://img.shields.io/badge/ExtendScript-ES3-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

A powerful Adobe Illustrator scripting tool that provides a non-modal, user-friendly panel for launching and managing custom `.jsx` scripts.

## 🌟 Features
- **Non-Modal Interface**: Run scripts without closing the panel
- **Scrollable Script List**: Browse scripts alphabetically
- **Double-Click Execution**: Quick script launching
- **Resizable UI**: Adjust panel to fit your workspace
- **Robust Error Handling**: Prevents panel crashes
- **Portable Paths**: Easy folder configuration

## 🛠 Requirements
- Adobe Illustrator CS6 or later
- Folder containing `.jsx` scripts
- Basic ExtendScript knowledge

## 📥 Installation

### Method 1: Quick Setup
1. Download [ScriptLauncher.jsx](https://github.com/graphicshop786/Master-Illustrator-Scripts-With-Load-Panel/raw/main/ScriptLauncher.jsx)
2. Place in Illustrator's scripts folder:
   - **Windows**: `C:\Program Files\Adobe\Adobe Illustrator [version]\Presets\en_US\Scripts\`
   - **macOS**: `/Applications/Adobe Illustrator [version]/Presets/en_US/Scripts/`

### Method 2: Manual Configuration
```javascript
// Edit these paths in ScriptLauncher.jsx:
var scriptFolder = Folder("D:/Script"); // Default path
var minWidth = 300; // Panel minimum width

🖥 Usage
Launch: File > Scripts > ScriptLauncher.jsx

Run Scripts:

Double-click any script

OR select and click "Run Selected"

Panel Controls:

![Minimize] Hide panel when not in use

![Resize] Drag to adjust panel width

⚙ Configuration
Changing Script Folder
javascript
// Windows
var scriptFolder = Folder("C:/Users/YourName/Scripts");

// macOS
var scriptFolder = Folder("/Users/YourName/Scripts");

// Relative path
var scriptFolder = Folder(Folder.appPackage.parent + "/Scripts");
🐛 Troubleshooting
Issue	Solution
Folder not found	Verify path exists
No scripts found	Check folder contains .jsx files
Script hangs	Add error handling: try/catch
UI unresponsive	Use palette instead of dialog
💻 Developer Guide
Adding Scripts
Place .jsx files in your script folder

Ensure proper structure:

javascript
// Sample script template
#target illustrator
try {
  // Your code here
} catch(e) {
  alert("Error: " + e);
}
Debugging Tips
javascript
// Add to ScriptLauncher.jsx:
$.writeln("Loading: " + file.name); // View in ESTK
🤝 Contributing
We welcome:

Bug reports

Feature requests

Code improvements

Suggested Improvements:

Add search functionality

Support script categories

Remember recent scripts

📜 License
MIT License - Free for commercial and personal use.

📬 Contact
Email: graphicshop786@gmail.com

GitHub Issues

⭐ Enjoy the tool? Please star the repository!



