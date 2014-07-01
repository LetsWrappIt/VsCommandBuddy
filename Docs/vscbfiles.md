# VsCommandBuddy Configuration files

For brevity, the VsCommandBuddy configuration files are referred to as vscb files, vscb config files or more precise a solution 
vscb file or a project vscb file. The vscb files live alongside the sln and various types of Visual Studio project files.

#### Solution vscb file filename and location
Solution vscb file, one per Visual Studio solution.
- Location: same folder as the VS Solution file.
- FileName: 'SolutionFileName'.vscb.json
  - Example: MyHelloWorldSolution.sln.vscb.json

#### Project vscb file filename and location
Project vscb file, one per project
- Location: same folder as the VS Project file such as vbproj or csproj
- Filename: 'ProjectFileName'.vscb.json
  - Example: MyHelloWorld.csproj.vscb.json

In case a project does not have a project file, which is the case with the projecttype
'Website', then the project vscb file will be located in the root of the project folder, and
the filename is: 'ProjectFolderName'.vscb.json

### Vscb files format
The vscb configuration files are plain json. The structure is quite self-explanatory when you
see one. So make sure you have a copy somewhere or look at some examples on the github repo.
The fastest way however is to simply generate sample vscb files into your solution. This is an easy task once you have installed 
VsCommandBuddy and loaded an existing Visual Studio Solution into Visual Studio.  Choose the build-in Generate vscb function which
you'll find in the Tools menu.

## Vscb format
A vscb json file looks as follows:

```json
{
  "vscb_version": "1.0",
  "description": "This is an example vscb solution config file.",
  "homepage_url": "https://github.com/PaulHuizer/VsCommandBuddy/",
  "author": "Paul Huizer",
  "verbose": true,
  "commands": [
    {
      "cmdname": "cmdcall",
      "title": "Cmdprompt using Call",
      "description": "Open cmd prompt using os command 'call'.",
      "cwd": "$(SolutionDir)",
      "filename": "call",
      "async": true
    },
    {
      "cmdname": "editvscbfile",
      "title": "NotePad (async) Edit solution vscb file",
      "description": "Open notepad to start editing the batch file.",
      "filename": "notepad.exe",
      "arguments": "$(SolutionFullFileName).vscb.json",
      "cwd": "",
      "async": true,
      "key1": "5",
      "mod1": "CTRL SHIFT"
      "key2": "",
      "mod2": ""
    }
  ]
}
```

### Main section fields
`vscb_version`

Current version of the vscb configuration scheme. Value: `1.0`

`description`

A description of the current configuration


