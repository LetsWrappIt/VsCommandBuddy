Add custom commands to any Visual Studio (2022) solution and/or project.

VsCommandBuddy allows you to add custom commands to the Visual Studio IDE using json configuration files. 
These json configuration files are part of the solution or projects, so they will stay with your work. The 
commands can be invoked by clicking on the toolbar or by using configurable keyboard shortcuts.

Goodies:
- Configuration of commands per solution and/or per project as needed.
- Configure keyboard shortcuts per command.
- Each command has the rigth set of options, the most important are:
  - Name
  - Command
  - Working directory
  - Shortcut
  - Save all  true/false
  - Confirm dialog

- Macros can be applied on filename, arguments, current working directory, confirm dialog message and user defined macros.
- Use user defined macros macros for more flexible configuration.
- Macros with predefined system values:
  - SolutionDir, SolutionName, SolutionFileName, SolutionFullFileName, SolutionVscbFileName
  - StartupProjectDir, StartupProjectName, StartupProjectFileName, StartupProjectFullFileName, StartupProjectVscbFileName
  - ProjectDir, ProjectName, ProjectFileName, ProjectFullFileName, ProjectVscbFileName

- 'Async' commands run in the foreground in parrallel with other apps (non-blocking).
- not async (default) commands run in background, output to outputwindow.
- Commands appear in the Tools menu and in the VsCommandBuddy Toolbar.

- Commands can be launched through the Visual Studio Quick Launch (Ctrl+Q).
- Support for multiple solutions per folder.
- Works with all project types, including project type Website. The projecttype Website is known for not having a project file and therefore plays really nice with modern tooling such as github etc.
- Works with batch files, grunt, gulp, bower, yeoman, phantomjs, MSDeploy, MSBuild, ORM mappers LLBLGen and nHibernate and so forth.
- Integrated help function ... will point you in the right direction in case of problems/questions.
- Generate example solution and/or project configuration files.

VsCommandBuddy brings a world of tools into your favorite IDE, right where you need them!

Looking forward to any feedback.
Happy coding!!


ps. Earlier versions of the VSIX for earlier versions of visual studio are available for download via github.

Links:

- [What's new?](https://github.com/PaulHuizer/VsCommandBuddy/blob/master/docs/history.md).
- [Getting started](https://github.com/PaulHuizer/VsCommandBuddy/blob/master/docs/gettingstarted.md).
- [Documentation](https://github.com/PaulHuizer/VsCommandBuddy/blob/master/docs/_toc.md).
- [Homepage](https://github.com/PaulHuizer/VsCommandBuddy/blob/master/README.md).

