[Table of content](_toc.md)
# Use-cases

To give an idea on who could benefit from VsCommandBuddy, here some usecases:

### A single front-end developer
A typical front-end developer needs to perform tasks such as:
- compile SASS files to css
- generating custom font files from svg icons
- generating sprites from png files
- compiling coffeescript, typescript
- running testcases
- bundling javascript files
- creating crx files for chrome extensions
- deploying porjects using msdeploy
- the list goes on and on ....

You might do everything using built in technologies. You might also solve these tasks using a task runner such as grunt.

For a typical project you have setup numerous commands in order to optimize your workflow.

Then .. a front-end developer tends to be blessed with more than one project. This means switching betwen projects is common.
Opening up a project you finished a couple of months ago is also common.

#### The problem
How do you manage all your commands? Memorizing the commandline commands? For every project? Everything in Tools -> External commands???
This fenomenon is referred to as the 'command-hell'.

#### The solution
The VsCommandBuddy solution is as follows:
- Specify your commands in a VsCommandBuddy configuration file (plain json).
- Store this configuration file as part of your solution/project.
- A soon as you open a solution/project, Visual Studio IDE will show you (through menu items and a toolbar) which commands are available for that solution!!

Nice ... 

- You can easily setup and customize you development environment per solution and/or project. 
- You can switch between projects.
- Open a solution and see the commands available in the context of that solution.


### A backend-developer
Backend developers have their own types of 'tasks'. Image you're working on a API project. Typical tasks that need to be done:
- Generate ORM DAL dlls
- Run testunits
- Deploy api project to various environments (test or production environments)
- Deploy background tasks as win-nt services (stop service, update service and start service)
- Bump versioning
- Etc...

Like frontenders, backenders are equally blessed to work on multiple projects. 

#### The problem
How to deal with all these commands? The configuration keys, the proper urls and so on?

#### The solution
The VsCommandBuddy solution is as follows:
- Specify your commands in a VsCommandBuddy configuration file (plain json).
- Store this configuration file as part of your solution/project.
- A soon as you open a solution/project, Visual Studio IDE will show you (through menu items and a toolbar) which commands are available for that solution!!

Nice ... 
- You can easily setup and customize you development environment per solution and/or project. 
- You can switch between projects.
- Open a solution and see the commands available in the context of that solution.



### Working in teams
As soon as you start working in teams, the above problems only grow. All team members need to share the knowledge of which command to use for what purpose.
They also need to share same settings and so on.

The problem becomes even worse, if .NET developers need to work together with designers who are playing their tunes on mac books. Ay ... 

#### The problem
How to deal with all these commands? 

#### The solution
The VsCommandBuddy solution is as follows:
- Specify your commands in a VsCommandBuddy configuration file (plain json).
- Store this configuration file as part of your solution/project.
- A soon as you open a solution/project, Visual Studio IDE will show you (through menu items and a toolbar) which commands are available for that solution!!

Nice ... 
- You can easily setup and customize you development environment per solution and/or project. 
- You can switch between projects.
- Open a solution and see the commands available in the context of that solution.

For mac users, VsCommandBuddy provides the option to export the commands to apropriate shell commands. Enabling UI/UX'ers to collaborate on the same projects.



