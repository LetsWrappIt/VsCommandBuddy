[Table of contents](_toc.md) --- [VsCommandBuddy in VisualStudio Gallery](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) 
# Macros

VsCommandBuddy offers macro functionality in a more-or-less similar fashion as the well known macros from the External Tools section in Visual Studio.
Using macros, it is possible to customize the invokation of commands, depending on the solution/project settings.

#### Solution macros
- $(Configuration)
	- Example value:  'Debug' or 'Release'
- $(FullConfiguration)
	- Example value:  'Debug | Any CPU' 
- $(SolutionDir)
	- Example value:  'c:\\projects\\mysolution' 
- $(SolutionFullFileName)
	- Example value:  'c:\\projects\\mysolution\\mysolution.sln' 
- $(SolutionFileName)
	- Example value:  'mysolution.sln' 
- $(SolutionName)
	- Example value:  'mysolution' 
- $(SolutionVscbFileName)
	- Example value:  'c:\\projects\\mysolution\\mysolution.sln.vscb.json' 


- $(StartupProjectDir)
	- Example value:  'c:\\projects\'myproject\\helloworld' 
- $(StartupProjectFullFileName)
	- Example value:  'c:\\projects\'myproject\\helloworld\\helloworld.csproj' 
- $(StartupProjectFileName)
	- Example value:  'helloworld.csproj' 
- $(StartupProjectName)
	- Example value:  'helloworld' 
- $(StartupProjectVscbFileName)
	- Example value:  'helloworld.csproj.vscb.json' 

#### Project macros (use with commands in vscb project)
- $(ProjectDir)
	- Example value:  'c:\\projects\'myproject\\helloworld' 
- $(ProjectFullFileName)
	- Example value:  'c:\\projects\'myproject\\helloworld\\helloworld.csproj' 
- $(ProjectFileName)
	- Example value:  'helloworld.csproj' 
- $(ProjectName)
	- Example value:  'helloworld' 
- $(ProjectVscbFileName)
	- Example value:  'helloworld.csproj.vscb.json' 


#### User defined macros
In the solution vscb file it is possible to define your own macros. Each macro has a macro name and a macro value. Make sure you choose unique macronames.
Applying a user defined macro is done exactly like other macros using the $('MacroName') syntax.

Example:
```json
{
  "vscb_version": "1.0",
  "macros": {
	"SomeMacro" : "$(NextMacro)\\output",
	"NextMacro" : "$(SolutionDir)"
	}
}
```

##### Name convention of user defined macros
You're free to use the name of your macros, as long as you use proper json tokens.

However, user defined macro NAMES that end with Dir, are considered references to a directory.
In those cases, VsCommandBuddy applies [PathFixing](pathfixing.md).

### Where are macros applicable?
Macros can be used:
- in the following fields in each command section:
  - filename
  - arguments
  - cwd
  - confirmMessage

- in the values of user defined macros (`macros` section of the [solution vscb file](vscbfiles.md)).

### Find out more
The usage of macros is demonstrated in the MacroDemo solution.
Ssince v1.22, newly generated solutions vscb files contain the macro section.

