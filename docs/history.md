[Table of contents](_toc.md) --- [VsCommandBuddy in VisualStudio Gallery](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) 
# History
- 2014-07-10
	* Bumbed version to VsCommandBuddy to v1.13
	* Added support for appref-ms click-once commands.
	* Added an initial setup for a [command library](commandlibrary.md).

- 2014-07-08
	* Bumbed version to VsCommandBuddy to v1.12
	* Added new macros: SolutionVscbFileName, StartupProjectVscbFileName, ProjectVscbFileName

- 2014-07-08
	* Bumbed version to VsCommandBuddy to v1.11
	* Fix: could not find project vscb file when projecttype is website.
	* Fix: generates compacter default vscb files (less educational, but more practical in use)

- 2014-07-08
	* Bumbed version to VsCommandBuddy to v1.10
	* Added some nicer designed buttons with letters in it which makes for easier navigation.
	* Added example website with a grunt command.

- 2014-07-04
	* Bumbed version to VsCommandBuddy to v1.9
	* Fixed a problem with the async command launching method 

- 2014-07-03
	* Bumbed version to VsCommandBuddy to v1.8
	* Fixed the problem that command output was not send to the outputwindow while the command was executing, but only afterwards. Now, the output is send to the outputwindow as it happens.

- 2014-07-02
	* Bumbed version to VsCommandBuddy to v1.7
	* Fixed a bug where adding up pathsegments would lead to undesired paths. See [pathfixing](pathfixing.md)

- 2014-07-02
	* Fixed a bug where VsCommandBuddy would not work without a solution vscb file.
	* Updated status info to be more specific (StatusInfo can be obtained using the Help command).

- 2014-07-02
	* Bumbed version to VsCommandBuddy to v1.6
    * Added an options dialog for the generating example vscb files command. Select for which solution/project you want to generate an example vscb file.

- 2014-07-01
	* Bumbed version to VsCommandBuddy to v1.5
    * Added support for confirmation dialogs before invoking a command.
    * Added macros: SolutionFileName, StartupProjectFileName, ProojectFileName.
    * Update [vscb files](vscbfiles.md) doc
    * Update [macros](macros.md) doc
    * Update macro demo sample solution doc with new macros and confirmation dialog.
    * Update simple website sample solution doc with new macros and confirmation dialog.

- 2014-07-01
	* Bumbed version to VsCommandBuddy to v1.4
    * Added support for custom-defined macros
    * Update [macros](macros.md) doc

- 2014-07-01
    * Improved documentation: usecases
    * Improved documentation: vscbfiles
    * Improved documentation: gettingstarted
    * Improved documentation: macros
    * Improved documentation: builtincommands
    * Added [TableOfContents](_toc.md)
    * Improved README.md
    * Improved macro demo solution
    * In the VisualStudio Gallery intro text: Added links to this docs.
	
- 2014-06-31
	* Bumbed version to VsCommandBuddy to v1.3
	* Added more robust errorhandling and better logging at some keypoints to improve analisys in case refresh command or command invocation fails.

- 2014-06-30 
	* Bumbed version to VsCommandBuddy to v1.2
	* Fixed bug when generating sample project vscb configuration files.
	* Fixed documentation accordingly

- 2014-06-30 
	* Bumbed version to VsCommandBuddy to v1.1
	* Added docs for macros and shortkeys
	* Added StartupProject macros
	* Added a MacroDemo solution

- 2014-06-27 Opened [Github repository VsCommandBuddy](../README.md) for more info, examples and discussion.
- 2014-06-27 Added generation of example configuration file.
- 2014-06-24 Version 1.0 Initial release


Links:
- Get latest VsCommandBuddy: [Visual Studio Gallery VsCommandBuddy](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668)
- [More documentation](../README.md)

