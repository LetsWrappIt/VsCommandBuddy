# VsCommandBuddy built-in commands
VsCommandBuddy comes with a couple of built-in commands to further enahnce user convencience. You'll find these in the Tools menu.

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
If VsCommandBuddy finds an existing vscb configuration file, it will not overwrite that one.

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
 
