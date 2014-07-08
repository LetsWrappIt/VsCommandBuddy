VsCommandBuddy on: [VisualStudioGallery](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668) --- [Github](https://github.com/PaulHuizer/VsCommandBuddy)

# GruntWebsiteExample
This is a very basic slution, demonstrating how to hook up grunt with your website project using VsCommandBuddy.

The example shows how to make a sprite image using [grunt-spritesmith](https://www.npmjs.org/package/grunt-spritesmith) plugin.

The results are shown in the index.html

### Install
Before installing, make sure you have installed the following:
- [NodeJs](http://nodejs.org/)
- [Grunt and grunt-cli](http://gruntjs.com/getting-started)
- [VsCommandBuddy](http://visualstudiogallery.msdn.microsoft.com/f5da988e-2ec1-4061-a569-46d09733c668)


Here we go:
- Step 1: Clone the example solution to your local disk
- Step 2: Open the solution using Visual Studio
- Step 3: Install grunt and grunt-spritesmith

Open a command prompt in the solution dir and type (there's a button on you VsCommandBuddy toolbar):
On the command line, type:
`npm install'

Now, the required nodemodules as specified in the package.json will be installed in your solution.

Installation is ready!!

### Check the results
- You can now check the command buttons which are available in the VsCommandBuddy Toolbar. 
- You can run the website and see the results in the index.html.




### VsCommandBuddy commands in this solution
In this solution we have one solution vscb file, in which commands are configured. You can open it using visual studio and inspect its contents.

#### Command: Open command prompt in your solution folder
Just for convenience. In your normal day to day work, you probably need to go there regularly right?

#### Command: Edit solution vscb file
Just for you to help you find the vscb file and have a look in it. Recommended however is to open this file normally in visual studio as that has a decent json editor available.

#### Command: MakeSprite
The command that calls the grunt task makeSprite which is defined in the gruntfile. The grunt file can be found, as you can see from the command, in the grunt folder of the solution.

