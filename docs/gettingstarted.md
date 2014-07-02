[Table of content](_toc.md) --- [VsCommandBuddy in VisualStudio Gallery](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) 
# Getting started
Getting started involves installing the package and configure some external commands.

#### Step 1: Download and install VsCommandBuddy
You'll find VsCommandBudy in the 'Tools -> Extension and updates' section in Visual Studio. Search for VsCommandBuddy and install.

Or...

You can go the VisualStudioGallery using your browser [here](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668).
Click download and and then doubleclick on the vsix file to install.

(In case you decide afterwards not to continue using VsCommandBuddy, you can simply uninstall VsCommandBuddy from your pc using Visual Studio 'Extensions and updates'.)

After installing, a restart of Visual Studio is required.

Tip:
* You should now see some VsCommandBuddy items in the Tools menu. 
* Enable the VsCommandBuddy toolbar by right-clicking on the toolbar area, and select the VsCommandBuddy toolbar.
* VsCommandBuddy communicates primarily with the user through the output window of Visual Studio. If you click something, make sure you look at the outputwindow to see the result!


#### Step 2: Open an existing Visual Studio solution
Since VsCommandBuddy is about customizing commands per solution/project, a loaded solution is required. Make sure to open an existing Visual Studio solution file from disk.

#### Step 3: Configure commands
Now configure some external commands which you use with your projects.
External commands are configured in so called [vscb files](vscbfiles.md), which are just plain json. VsCommandBuddy looks for one vscb file per solution file and optionally one per project in your solution.

How to get your vscb files? You have the following options:
1. Click 'Generate vscb' from the tools menu in Visual Studio and click 'continue'. Then look for vscb files alongside the solution file and the 
projectfiles you selected. The generated vscb files contain the proper file format and some pre-configured example commands.
2. Look at some of the Example solutions.
3. Simply get your editor and make some. Check ['vscb files'](vscbfiles.md) for more info.


## Requirements and configuration
In order to function, VsCommandBuddy requires:
- DotNet Framework 4.5
- Visual Studio 2013 Pro and more.
- Installed VsCommandBuddy extension
- An existing Visual Studio Solution file (.sln), since VsCommandBuddy reads this sln file for configuration purposes.
- (Optional) One VsCommandBuddy configuration file for that solution.
- (Optional) A VsCommandBuddy configuration file for each project in the solution.

