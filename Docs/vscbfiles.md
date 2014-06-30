# VsCommandBuddy Configuration files

## VsCommandBuddy configuration files (vscb files)
For brevity, the VsCommandBuddy configuration files are referred to as vscb files, vscb config files or more precise a solution 
vscb file or a project vscb file. The vscb files live alongside the sln and various types of Visual Studio project files.

### Solution vscb file filename and location
Solution vscb file, one per Visual Studio solution.
- Location: same folder as the VS Solution file.
- FileName: <solutionfilename>.vscb.json
Example: MyHelloWorldSolution.sln.vscb.json

### Project vscb file filename and location
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



