# Getting started
It's time to get you started. Gettings started involves installing the package and maybe inspect one or 2 example projects which are available in 
this repository.

#### Step 1: Download and install VsCommandBuddy
In the VisualStudioGallery you can find [VsCommandBuddy](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) here.
Click download and install. 
(In case you decide afterwards not to continue using VsCommandBuddy, you can simply uninstall VsCommandBuddy from your pc using Visual Studio 'Extensions and updates'.)

Restart Visual Studio. 

You're done installing. 


#### Step 2: Configure commands
To put VsCommandBuddy to work, your next step is to configure some external commands you use with your projects.
External commands are configured in so called [vscb files](vscbfiles.md), which are just plain json. VsCommandBuddy looks for one vscb file per solution file and optionally one per project in your solution.

How to get your vscb files?
- Look at some of the Example solutions.
- Click 'Generate vscb' from the tools menu in Visual Studio, en then look for vscb files alongside the solution file and the 
projectfiles. They will contain the proper file format and some pre-configured example commands.
- Simply get your editor and make some. Check ['vscb files'](vscbfiles.md) for more info.


## Requirements and configuration
In order to function, VsCommandBuddy requires:
- DotNet Framework 4.5
- Visual Studio 2013 Pro and more.
- Installed VsCommandBuddy extension
- An existing Visual Studio Solution file (.sln), since VsCommandBuddy reads this sln file for configuration purposes.
- (Optional) One VsCommandBuddy configuration file for that solution.
- (Optional) A VsCommandBuddy configuration file for each project in the solution.

TIP: VsCommandBuddy communicates with the user mainly through the output window of Visual Studio. If you click something, make sure you look at the outputwindow to see the result!
