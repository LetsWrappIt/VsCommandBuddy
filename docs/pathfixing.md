[Table of content](_toc.md) --- [VsCommandBuddy in VisualStudio Gallery](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) 
# Path Fixing
When combining paths there are some particular circumstances that might lead to problems. The following example explains the case.

### Example
We have our solution stored in: c:\\projects\webprojects\\myhelloworldsolution\\

Hence, $(SolutionDir) resolves to: "c:\\projects\webprojects\\myhelloworldsolution\\"

Furthermore, we have the following two macros defined in the solution vscb file:

```json
{
"OutputDir" : "$(BaseDir)..\\output\\",
"BaseDir" : "$(SolutionDir)"
}
```

The above definition of 2 macros is valid, but WITHOUT the PathFix solution, their values would resolve to:

```json
{
"OutputDir" : "c:\\projects\webprojects\\myhelloworldsolution\\..\\output\\",
"BaseDir" : "c:\\projects\webprojects\\myhelloworldsolution\\"
}
```

WITH the PathFix solution, it resolves to:

```json
{
"OutputDir" : "c:\\projects\webprojects\\output\\",
"BaseDir" : "c:\\projects\webprojects\\myhelloworldsolution\\"
}
```


### Where is PathFixing applied?
The pathfix solution can only be applied in situations where we it is safe to assume the value is actually a name of a Directory.

#### The `cwd` field
The `cwd` field on the command definition is an example where this is the case. PathFixing is applied here.

`"cwd" : "$(BaseDir)..\\output\\"`

Resolves to:
```json
"cwd" : "c:\\projects\webprojects\\output\\"
```

#### User defined macros with names ending with Dir
Another place where we can apply the PathFix is in the [user defined macros](macros.md) with names ending in Dir (casesensitive!).
Expanding on the first example:

```json
"OutputDir" : "$(BaseDir)..\\output\\",
"OutputDir2" : "$(BaseDir)..\\output\\",
"BaseDir" : "$(SolutionDir)"
```

Resolves to:

```json
"OutputDir" : "c:\\projects\webprojects\\output\\",
"OutputDir2" : "c:\\projects\webprojects\\myhelloworldsolution\\..\\output\\",
"BaseDir" : "c:\\projects\webprojects\\myhelloworldsolution\\"
```

The macro OutputDir2 does not end in Dir, so PathFixing is not applied.

### What about the other places?
Sometimes PathFixing is required in other places as well, such as the `arguments` field in a command definition.
This can be solved using a user defined macro.

If the `arguments` string looks like:
`grunt --verbose --no-color --base=$(SolutionDir)..\\Dist\\`

it resolves to:
`grunt --verbose --no-color --base=c:\\projects\webprojects\\myhelloworldsolution\\..\\Dist\\`

One solution is to use a user defined macro:

```json
"BaseDir" : "$(SolutionDir)..\\Dist"
```

And the the following `arguments` value:
`grunt --verbose --no-color --base=$(BaseDir)`

This resolves to:
`grunt --verbose --no-color --base=c:\\projects\webprojects\\Dist\\`


