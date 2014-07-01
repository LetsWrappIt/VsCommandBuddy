# Vscb files

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

### Format
The vscb configuration files are plain json. 

The majority of the settings are equal for solutions and project vscb files. The documentation will make a note if this is not the case.

Json vscb file:

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

#### Main section fields
`vscb_version`
- Required: Yes
- Default: `empty`
- Current version of the vscb configuration scheme. Value: `1.0`

`description`
- Required: No
- Default: `empty`
- A description of the current configuration.

`homepage_url`
- Required: No
- Default: `empty`
- If you like you can specify an url pointing to additional info.

`author`
- Required: No
- Default: `empty`
- Collect some kudos!

`verbose`
- Required: No
- Default: `true`
- Scope: Solution vscb file only
- It will make the logging in the output window more informative. Don't switch it off, until you feel at home with vscommandbuddy.

`commands`
- Required: No, but really needed to get some benefit from VsCommandBuddy.
- Default: `empty`
- Contains an array of command definitions.

#### Command definition fields

`cmdname`
- Required: Yes
- Default: `empty`
- Each command requires a unique name. Project cmdname's are automatically prefixed with a unique project reference. If a non unique cmdname is encountered, it gets ignored.

`title`
- Required: Yes
- Default: `empty`
- The title value is used as the menu caption or as the tooltip in the toolbar for example.

`description`
- Required: No
- Default: `empty`
- The description value is used to document what is done using this command.

`filename`
- Required: Yes
- Default: `empty`
- The filename is the actual file that will be invoked. 
- This field value may contain macros.
- Example: `notepad.exe` or `grunt`

`arguments`
- Required: No
- Default: `empty`
- The arguments value will be passed as arguments to the invoked command. 
- This field value may contain macros.
- Example: `$(SolutionFullFileName).vscb.json $(Configuration)` 

`cwd`
- Required: No
- Default: `empty`
- The cwd value will be used to preset the current working directory. 
- This field value may contain macros.
- Example: `$(SolutionFullFileName)` 

`async`
- Required: No
- Default: `false`
- Using async switch you can specify whether the command should run in the background ('false') or in the foreground (`true`).
  - The output of background commands is redirected to the outputwindow.
  - Foreground processes will run next to visual studio and other applications running.

`key1`, `key2`, `mod1` and `mod2`
- Required: No 
- The key/mod fields are used to define shortcuts for the command. More info [here](shortcutkeys.md).

