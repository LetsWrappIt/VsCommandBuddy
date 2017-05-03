[Table of contents](_toc.md) --- [VsCommandBuddy in VisualStudio Gallery](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) 
# History

- 2017-05-4
	* Bumbed version to VsCommandBuddy to v1.23
	* Fixed bug that prevented reading of VsCb project files 

- 2017-03-25
	* Bumbed version to VsCommandBuddy to v1.22
	* Added support for FolderSolutions in VisualStudio 2017 (solutions which are opened in VS2017 by 
	  opening a folder, without usage of a sln or proj files.)
	  For folder solution, a VsCbFolderSolution.sln.vscb.json is placed in the root directory of the solution.

	* BREAKING CHANGE: The Dir macros no longer end with a slash. This will require you to update the vscb 
	files.
	Example: 
		- Previously:	$(SolutionDir)  = c:\projects\mysolution\
		- Since v1.22:	$(SolutionDir)  = c:\projects\mysolution

	The motivation for this change is that this makes the $(SolutionDir) macro easier to use as arguments for script files.
	In (batch) script files it is easier to add a slash than to remove a slash. This way you have both.

	Workaround:
	If you require the trailing slash in your projects, add the slash to where the $(SolutionDir) macro is used:
	Example: 
	- Previously:	$(SolutionDir)  = c:\projects\mysolution\
	- Since v1.22:	$(SolutionDir)\  = c:\projects\mysolution\

	This also applies to: StartupProjectDir, ProjectDir

	* Changed docs where the dir usage is mentioned.
	* Improvement to macro documentation
	* Generation of solution vscb file, now includes a macro section in the solution vscb file, to demonstrate user defined macros.
	* Generation of solution vscb file, now includes the us of the $(SolutionVscbFileName) macro.


- 2017-03-07
	* Bumbed version to VsCommandBuddy to v1.21
	* Added support for VisualStudio 2017.
	* Changed the Async launcher to use StartProcess to overcome accessdenied issue with previous solution using IVsLaunchpad.

- 2015-09-19
	* Bumbed version to VsCommandBuddy to v1.20
	* Added support for VisualStudio Ultimate.

- 2015-08-17
	* Bumbed version to VsCommandBuddy to v1.19
	* Added support for VisualStudio 2015 (Community, Pro and Enterprise). Visual Studio 2013 Pro is still supported.

- 2014-08-8
	* Bumbed version to VsCommandBuddy to v1.18
	* Set focus on toolwindow OutputWindow on each command. See [issue#4](https://github.com/PaulHuizer/VsCommandBuddy/issues/4), second part.


- 2014-08-5
	* Bumbed version to VsCommandBuddy to v1.17
	* Improved output to output window. See [issue#4](https://github.com/PaulHuizer/VsCommandBuddy/issues/4)


- 2014-07-17
	* Bumbed version to VsCommandBuddy to v1.16
	* Added macro support in command title


- 2014-07-15
	* Bumbed version to VsCommandBuddy to v1.15
	* Added project name as prefix to the command captions when the command is defined in project vscb file, now also applied to the tools menu items, not only the toolbar.
	* Added documentation on how to customize the VsCommandBuddy toolbar.
	* Added 6 more buttons on the toolsmenu and the toolbar command


- 2014-07-14
	* Bumbed version to VsCommandBuddy to v1.14
	* Fixed typo VsCommandBudy -> VsCommandBuddy.
	* Added project name as prefix to the command captions when the command is defined in project vscb file.


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

