[Table of contents](_toc.md) --- [VsCommandBuddy in VisualStudio Gallery](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) 
# CommandLibrary

When working with multiple projects using VsCommandBuddy, you'll run into the following issues with regards to commands:
- Often the same commands are defined in multiple projects
- Some commands are rather tricky to find out, so sharing them might help others get up to speed faster.

VsCommandBuddy will work towards a situation where command definition reuse will be possible by setting up some sort of command library.
Perhaps this functionality could be extended to having a library for complete vscb files as well. 

Note: Current status of this idea is GREEN. Just a thought. Any feedback is highly appreciated.

### Anatomy of the command library
The first step towards implementing a simple command library, is to collect some standard commands which might be used frequently.

Here's the setup:
- A folder called commandlib can be found in the root of this repository.
- The commandlib folder will contain various command folders, each reusable command will be stored in its own command folder.
- Each command folder can contain:
	* README.md to explain specifics about the command.
	* (optional) one command definition file for a solution vscb file command.
	* (optional) one command definition file for a project vscb file command.

File and folder names:
- The command folder will have the name of the command, ie. <cmdname>.
- The command file for the solution vscb file, will be called '<cmdname>.sln.vscmd.json'
- The command file for the project vscb file, will be called '<cmdname>.proj.vscmd.json'










