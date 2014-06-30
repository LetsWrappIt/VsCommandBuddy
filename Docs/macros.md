# Macros

VsCommandBuddy offers macro functionality in a more-or-less similar fashion as the well known macros from the External Tools section in Visual Studio.
Using macros, it is possible to customize the invokation of commands, depending on the solution/project settings.

## Where are macros applicable?
Macros are applicable on the following fields in each command section:
- filename
- arguments
- cwd

## Supported macros
Per solution
- $(Configuration)
- $(FullConfiguration)
- $(SolutionDir)
- $(SolutionFullFileName)
- $(SolutionName)
- $(StartupProjectDir)
- $(StartupProjectFullFileName)
- $(StartupProjectName)

Additional for commands defined in projects:
- $(ProjectDir)
- $(ProjectFullFileName)
- $(ProjectName)

The macros are demonstrated in the MacroDemo solution.
