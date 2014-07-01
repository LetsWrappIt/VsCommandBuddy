[Table of content](_toc.md)
# Macros

VsCommandBuddy offers macro functionality in a more-or-less similar fashion as the well known macros from the External Tools section in Visual Studio.
Using macros, it is possible to customize the invokation of commands, depending on the solution/project settings.

#### Solution macros
- $(Configuration)
	- Example value:  'Debug' or 'Release'
- $(FullConfiguration)
	- Example value:  'Debug | Any CPU' 
- $(SolutionDir)
	- Example value:  'c:\\projects\'myproject\\' 
- $(SolutionFullFileName)
	- Example value:  'c:\\projects\'myproject\\mysolution.sln' 
- $(SolutionName)
	- Example value:  'mysolution' 
- $(StartupProjectDir)
	- Example value:  'c:\\projects\'myproject\\helloworld\\' 
- $(StartupProjectFullFileName)
	- Example value:  'c:\\projects\'myproject\\helloworld\\helloworld.csproj' 
- $(StartupProjectName)
	- Example value:  'helloworld' 

#### Project macros (use with commands in vscb project)
- $(ProjectDir)
	- Example value:  'c:\\projects\'myproject\\helloworld\\' 
- $(ProjectFullFileName)
	- Example value:  'c:\\projects\'myproject\\helloworld\\helloworld.csproj' 
- $(ProjectName)
	- Example value:  'helloworld' 

#### User defined macros
In the solution vscb file it is possible to define your own macros. Each macro has a macro name and a macro value. Make sure you choose unique macronames.
Applying a user defined macro is done exactly like other macros using the $('MacroName') syntax.

Example:
```json
{
	"SomeMacro" : "$(NextMacro)output\\",
	"NextMacro" : "$(SolutionDir)"
}

```


### Where are macros applicable?
Macros can be used:
- in the following fields in each command section:
  - filename
  - arguments
  - cwd

- in the macros section of the [solution vscb file](vscbfiles.md) (as values).

The macros are demonstrated in the MacroDemo solution.
