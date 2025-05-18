// === Script Launcher with Scroll & Minimize ===
var scriptFolder = Folder("D:/Script");

if (!scriptFolder.exists) {
    alert("❌ Folder not found: " + scriptFolder.fsName);
    exit();
}

var scriptFiles = scriptFolder.getFiles("*.jsx");

if (scriptFiles.length === 0) {
    alert("⚠️ No .jsx scripts found in: " + scriptFolder.fsName);
    exit();
}

// 🪟 Create the dialog window
var w = new Window("dialog", "🔥 Script Launcher Panel made with ❤ by Bilal Hussain");
w.orientation = "column";
w.alignChildren = "fill";
w.spacing = 10;
w.margins = 15;

// === Scrollable Listbox ===
var outerGroup = w.add("group");
outerGroup.orientation = "column";
outerGroup.alignChildren = ["fill", "top"];
outerGroup.maximumSize.height = 400;

var listBox = outerGroup.add("listbox", undefined, [], {multiselect: false});
listBox.preferredSize = [300, 400]; // Set width and height for listbox

// Add all script names to listbox
for (var i = 0; i < scriptFiles.length; i++) {
    var file = scriptFiles[i];
    var item = listBox.add("item", file.name.replace(".jsx", ""));
    item.file = file; // Store file reference in item
}

// Run script on double-click or button click
listBox.onDoubleClick = function() {
    if (listBox.selection) {
        var selectedFile = listBox.selection.file;
        try {
            $.evalFile(selectedFile);
            alert("✅ Script ran: " + selectedFile.name);
        } catch (e) {
            alert("❌ Error in " + selectedFile.name + ":\n" + e);
        }
    }
};

// === Buttons ===
var btnGroup = w.add("group");
btnGroup.orientation = "row";
btnGroup.alignment = "right";

var runBtn = btnGroup.add("button", undefined, "Run Selected");
runBtn.onClick = function() {
    if (listBox.selection) {
        var selectedFile = listBox.selection.file;
        try {
            $.evalFile(selectedFile);
            alert("✅ Script ran: " + selectedFile.name);
        } catch (e) {
            alert("❌ Error in " + selectedFile.name + ":\n" + e);
        }
    } else {
        alert("⚠️ Please select a script.");
    }
};

var minimizeBtn = btnGroup.add("button", undefined, "Minimize");
minimizeBtn.onClick = function() {
    w.hide();
    alert("👋 Script panel minimized. Run again from File > Scripts to reopen.");
};

var closeBtn = btnGroup.add("button", undefined, "Close");
closeBtn.onClick = function() {
    w.close();
};

w.center();
w.show();
// === End of Script ===