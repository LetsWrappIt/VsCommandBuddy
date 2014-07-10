[Table of contents](_toc.md) --- [VsCommandBuddy in VisualStudio Gallery](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) 
# Built-in commands
VsCommandBuddy comes with a couple of built-in commands to further enhance user convenience. You'll find these in the Tools menu.

#### Help
The help command will give you some background info and point towards the generate command and this 
VsCommandBuddy repository on github.  The final part of the help info will contain a summary of the current Status.
The status contains information as:
- VsCommandBuddy version info
- Vscb files found
- Number of commands loaded

The help function will output the info into the output window you have in Visual Studio.

#### Generate vscb
If you choose the command 'Tools - Generate vscb', VsCommandBuddy will generate an example solution [vscb file](vscbfiles.md) and one 
project [vscb file](vscbfiles.md) for each project in the solution.

Existing vscb files will NOT be overwritten.

Before it starts generating the template vscb files, an options dialog appears, allowing you to select which vscb files you want to be generated.


#### Refresh
VsCommandBuddy will refresh the configuration it uses internally to manage commands and the ui elements (menu and toolbar).
The info VsCommandBuddy uses is read from disk. Here are some steps VsCommandBuddy takes:
* Read the Visual Studio solution file (*.sln)
* Scan the solution file for projects
* Read the solution vscb file
* Read the project vscb file(s)

It parse the info and sets up the visual studio IDE accordingly.


If you change anything that VsCommandBuddy should know about, make sure to inform VsCommandBuddy by invoking the
Refresh command. Relevant changes include:
- adding, renaming or removing projects from your solution
- changing the contents of one of the vscb files


Important!! Take into account that Visual Studio is quite lazy with regards to saving changes to the
solution file. For example, if you add a new project to your solution, that info
will not be present in the Visual Studio Solution file until you close and Save the solution.
 
