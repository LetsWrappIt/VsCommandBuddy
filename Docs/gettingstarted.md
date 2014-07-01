# Getting started
Getting started involves installing the package and configure some external commands.

#### Step 1: Download and install VsCommandBuddy
In the VisualStudioGallery you'll find VsCommandBuddy [here](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668).
Click download and install. 
(In case you decide afterwards not to continue using VsCommandBuddy, you can simply uninstall VsCommandBuddy from your pc using Visual Studio 'Extensions and updates'.)

Restart Visual Studio.

Tip:
1 You should now see some VsCommandBuddy items in the Tools menu. 
2 Enable the VsCommandToolbar by right clicking on the toolbar area, and select the VsCommandBuddy toolbar.
3 VsCommandBuddy communicates with the user mainly through the output window of Visual Studio. If you click something, make sure you look at the outputwindow to see the result!


#### Step 2: Open an existing Visual Studio solution
Since VsCommandBuddy is about customizing commands per solution/project, a loaded solution is required. Make sure to open an existing Visual Studio solution from disk.

#### Step 3: Configure commands
Now configure some external commands which you use with your projects.
External commands are configured in so called [vscb files](vscbfiles.md), which are just plain json. VsCommandBuddy looks for one vscb file per solution file and optionally one per project in your solution.

How to get your vscb files?
- Click 'Generate vscb' from the tools menu in Visual Studio, then look for vscb files alongside the solution file and the 
projectfiles. They will contain the proper file format and some pre-configured example commands.
- Look at some of the Example solutions.
- Simply get your editor and make some. Check ['vscb files'](vscbfiles.md) for more info.


## Requirements and configuration
In order to function, VsCommandBuddy requires:
- DotNet Framework 4.5
- Visual Studio 2013 Pro and more.
- Installed VsCommandBuddy extension
- An existing Visual Studio Solution file (.sln), since VsCommandBuddy reads this sln file for configuration purposes.
- (Optional) One VsCommandBuddy configuration file for that solution.
- (Optional) A VsCommandBuddy configuration file for each project in the solution.

