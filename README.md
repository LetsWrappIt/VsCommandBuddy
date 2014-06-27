# VsCommandBuddy

This repository will be a place where support for VsCommandBuddy will be provided in the form of examples and announcements.

Note: VsCommandBuddy is green. The product works. The focus will be on improving documentation and examples. Feel free to suggest feature requests.
And if you run into any problem, please open up an issue, so we can see if the problem can be fixed. 


## Intro to VsCommandBuddy
VsCommandBuddy allows you to dynamically add new commands to Visual Studio IDE using configuration files which will be part 
of your solution and/or projects. This means that the commands will stay with your work. Customization of your solutions/projects
will stay where you need it. 

In a situation where you work with multiple projects and or solutions, we're confident that VsCommandBuddy will
be a valuable asset in your toolbox, linking all kinds of goodies into a compact and versatile dev environment. 

This is a typical scratch-your-own-itch project. As it turned out rather usefull, the decision was
guickly made to put it online for other VS devs to use it as well.
Let's hope, it will prove to be a valuable buddy for many of us vs devs!!
 
Enjoy!


###Some example use-cases:
- For backend solutions configure your ORM tasks or unit testing.
- For websites you configure your build tasks using grunt, your bower dependencies, deployment task and so on.
- If you're are happen to work on a chrome extension you add your package to crx task and 'publish to chromestore' task
to the toolbar
Obviously, each developer will think of his/her own usecases easily.

### Requirements and configuration
In order to function, VsCommandBuddy requires:
- Installed VsCommandBuddy extension
- A loaded solution (from an existing solution file)
- One VsCommandBuddy configuration file for that solution.
- (Optional) A VsCommandBuddy configuration file for each project in the solution.

For brevety, the VsCommandBuddy configuration files are referred to as vscb files, or more precise if needed a solution 
vscb file or a project vscb file.

### Vscb file filenames and locations
Solution vscb file, one per Visual Studio solution.
- Location: same folder as the VS Solution file.
- FileName: <solutionfilename>.vscb.json
Example: MyHelloWorldSolution.sln.vscb.json

Project vscb file, one per project
- Location: same folder as the VS Project file such as vbproj or csproj
- Filename: <ProjectFileName>.vscb.json
Example: MyHelloWorld.csproj.vscb.json

In case a project does not have a project file, which is the case with the projecttype
'Website', then the project vscb file will be located in the root of the project folder, and
the filename is: <ProjectFolderName>.vscb.json

This naming scheme allows for one config file per solution, and optionally one per project. Also in case you have more than one project
or solution file in one folder.

### Vscb files format
The vscb configuration files are plain json. The structure is quite self-explanatory when you
see one. So make sure you have a copy somewhere or look at some examples on the github repo.
The fastest way however is to simply generate sample vscb files into your solution. This is an easy task once you have installed 
VsCommandBuddy and loaded an existing Visual Studio Solution into Visual Studio.  Choose the build-in Generate vscb function which
you'll find in the Tools menu.


### VsCommandBuddy built in commands
VsCommandBuddy comes with three built in commands which you'll find in the Tools menu.

#### Built-in command: Help
The help command will give you some background info and point towards the generate command and furthermore to this 
VsCommandBuddy repository on github.  The final part of the help info will contain a summary of the current Status.
The status contains information as:
- VsCommandBuddy version info
- Number of commands loaded
- Solution loaded

The help function will output the documentation into the output window you have in Visual Studio.

#### Built-in command: Generate vscb
If you choose the command 'Tools - Generate vscb', VsCommandBuddy will generate an example solution vscb file and one 
project vscb file for each project in the solution.
If VsCommandBuddy finds an existing vscb configuration file, it will not overwrite that one,
instead it will create the example vscb file using the filename <name>.vscb.example.json

Solution vscb files differ slightly from project vscb file, so use the right example.
Further info can be found at the github repository VsCommandBuddy

##### Built-in command: Refresh
VsCommandBuddy reads the Visual Studio Solution file and the vscb config files. If you change
anything that VsCommandBuddy should know about, make sure to inform VsCommandBuddy by invoking the
Refresh command. 
Relevant changes include:
- adding, renaming or removing projects from your solution
- changing the contents of one of the vscb files

Important!! Take into account that Visual Studio is quite lazy with regards to saving changes to the
solution file. For example, if you add a new project to your solution, that info
will not be present in the Visual Studio Solution file until you close and Save the solution.
 
 

## Getting started
It's time to get you started. It involves installing the package and maybe inspect one or 2 example projects which are available in this repository.

Follow the following steps to get it working on your dev pc.

* Step 1: Install VsCommndBuddy
In the VisualStudioGallery you can find [VsCommandBuddy](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) here.
Click download and install. If you're done with it, you can simply uninstall VsCommandBuddy from your pc using Visual Studio. 
(Tools -> Extensions -> Select VsCommandBuddy and choose uninstall). 

* Step 2: Fork this VsCommandBuddy repository. 
Forking this repository will fetch all the example projects to your local disk.

* Step 3: Install NodeJs and Grunt (optional)
Some examples work with NodeJs and Grunt. Make sure you install these packages globally.

Each example solution will have a solution file (*.sln) and a readme.md in the root. Open the sln file using Visual Studio and scan the readme 
for an understanding of the purpose of the example and potentially additional requirements for executing the commands in the project.

That's it, you're done. Startup Visual Studio and open up the example solution you whish to explore. 


## Next?
Did you give VsCommandBuddy a go? Please share your experience. If VsCommandBuddy helps you in your daily work, share it everywhere ;-)  
If your experience is less positive, open an issue and make it known!! Thats the only way it will be able to respond and get issues resolved.
We're eager to receive your bugreports, documentation errors, feature requests or any other thoughts you might have on VsCommandBuddy!


Happy Coding!! 

Paul