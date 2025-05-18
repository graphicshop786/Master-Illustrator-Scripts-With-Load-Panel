Master Illustrator Scripts With Load Panel
Master Illustrator Scripts With Load Panel is an Adobe Illustrator scripting tool that provides a non-modal, user-friendly panel for launching and managing custom .jsx scripts. With a scrollable script list, double-click execution, and robust error handling, this tool simplifies script management for designers and automation enthusiasts.
Features

Non-Modal Interface: Run scripts without closing the panel, allowing seamless execution of multiple scripts.
Scrollable Script List: Browse and select .jsx scripts from a specified folder, sorted alphabetically.
Double-Click Execution: Run scripts by double-clicking or using the "Run Selected" button.
Minimize & Restore: Minimize the panel to declutter your workspace, with instructions to reopen via Illustrator’s Scripts menu.
Error Handling: Displays script errors without crashing the panel.
Resizable UI: Adjust the panel size to fit your workspace.
Portable Path Option: Easily change the script folder path for flexibility across systems.

Requirements

Adobe Illustrator: Any version supporting ExtendScript (e.g., CS6 or later, including CC).
A folder containing .jsx scripts (default: D:/Script).
Basic knowledge of Adobe Illustrator’s scripting environment.

Installation

Download the Repository:

Clone this repository or download the ZIP file and extract it.
The main script is ScriptLauncher.jsx.


Set Up Your Script Folder:

Create a folder to store your .jsx scripts (e.g., D:/Script).
Place your custom .jsx scripts in this folder.
If you prefer a different folder, see Changing the Script Folder Path.


Run the Script Launcher:

Open Adobe Illustrator.
Go to File > Scripts > Browse and select ScriptLauncher.jsx.
The Script Launcher panel will appear, listing all .jsx scripts in the specified folder.



Usage

Launch the Panel:

Run ScriptLauncher.jsx via File > Scripts > Browse in Illustrator.
The panel displays a scrollable list of .jsx scripts in the specified folder.


Run a Script:

Select a script from the list and double-click, or click the Run Selected button.
The script will execute, and a confirmation alert will appear if successful.
If an error occurs, an alert will display the error details.


Minimize the Panel:

Click the Minimize button to hide the panel.
To reopen, rerun ScriptLauncher.jsx via File > Scripts > Browse.


Close the Panel:

Click the Close button to dismiss the panel.



Changing the Script Folder Path
By default, the Script Launcher looks for .jsx scripts in D:/Script. To use a different folder:

Open the Script:

Open ScriptLauncher.jsx in a text editor (e.g., VS Code, Notepad, or ExtendScript Toolkit).


Modify the Path:

Locate the line:var scriptFolder = Folder("D:/Script");


Change the path to your desired folder. Examples:
Windows: var scriptFolder = Folder("C:/Users/YourName/Scripts");
Mac: var scriptFolder = Folder("~/Scripts"); (user’s home directory)
Relative path: var scriptFolder = Folder(Folder.appPackage.parent + "/Scripts"); (relative to Illustrator’s installation folder)




Save and Test:

Save the modified ScriptLauncher.jsx.
Ensure the new folder exists and contains .jsx scripts.
Run the script in Illustrator to verify the new path.



Tip: Use forward slashes (/) in the path, as ExtendScript handles them cross-platform.
Troubleshooting

"Folder not found" error:
Ensure the script folder (e.g., D:/Script) exists and is accessible.
Check the path in ScriptLauncher.jsx and update it if needed.


"No .jsx scripts found" error:
Verify that the folder contains .jsx files.
Ensure the files are valid ExtendScript files (not other .jsx formats, like React JSX).


Script doesn’t close after running:
Check the script’s code for modal dialogs (Window("dialog")) or infinite loops.
Replace dialog with palette or ensure the script calls window.close() or exit().
Example fix:var w = new Window("palette", "My Script");
var btn = w.add("button", undefined, "OK");
btn.onClick = function() { w.close(); };
w.show();




Panel feels unresponsive:
Ensure you’re using the provided ScriptLauncher.jsx, which uses a palette window.
If a script hangs, add $.writeln("Running script: " + file.name); before $.evalFile() to debug (view logs in ExtendScript Toolkit).



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a Pull Request with a description of your changes.

Ideas for Contributions:

Add a search bar to filter scripts.
Support script categories via subfolders.
Save recent scripts or panel preferences.
Add keyboard shortcuts (e.g., Enter to run).

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions, issues, or feature requests, open an issue on this repository or contact the maintainer.

Happy scripting! 🚀
