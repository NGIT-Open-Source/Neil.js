# Getting Started with Contributions

This is a specialized  Guide only made for this project to follow along.

If you need a complete git tutorial, watch this [video](https://www.youtube.com/watch?v=apGV9Kg7ics&t=1152s) by Kunal. 

Well, before starting this tutorial I would like to say that these are some tested methods by us and are intended to be followed by all of our contributors.

## Step 1 : Fork the project
Go to the [official repository](https://github.com/NGIT-Open-Source/discord-bot) and fork the project to your own account .
Once you have forked it you must be able to see the fork of your own repo like 
**username/discord-bot**
We'll talk more about those branches later.
## Step 2 : Clone the Forked Repository
Click on the green *Code*  button and copy the SSH URL.**(FROM THE FORK)**
Open your desired location on your local computer and right click to open Git Bash
Paste the SSH URL in it.

     git clone git@github.com:<user-name>/discord-bot.git && cd discord-bot
## Step 3: Adding upstream as a remote to your repository

Add the upstream URL to your repo using this command

     git remote add upstream git@github.com:NGIT-Open-Source/discord-bot.git
  You can check the existing remotes using `git remote -v` to verify if it has been added and origin + upstream exist independently and point to correct URL's

## Step 4: Add the tracking branch `develop` to your repository
Well, git doesn't seem to properly clone the repo  with all branches so we need to create `develop` branch and add tracking so run this command

     git checkout --track origin/develop
  
## Step 5: Setting up your Local environment 
1. Checkout to development branch ``git checkout develop``

2. Make sure you've Node.js `v16.6.0` or higher installed. [Follow this to install/upgrade Node.js](https://discordjs.guide/preparations/#installing-node-js)

3. Head to your project folder and run `npm install` in the terminal. *(This command installs all the required packages/modules for the project mentioned in `package.json` in the `node_modules` directory)*

4. Finally, Follow the below steps if you want to **run your own instance of bot** for testing/development
     -  **We would also highly suggest you to create your own server to test your bot out if you are new as we don't want to spam the main server.**

5. Create a file `config.json` and copy the template from `config.json.example`. Make necessary changes in `config.json`.
     - For security, `config.json` will not be commited since it is added to `.gitignore`
     - MAKE SURE NOT TO REVEAL YOUR TOKENS/SECRETS FROM `config.json` ANYWHERE ELSE
     - Get the tokens/ids from [Discord Dev portal](https://discord.com/developers/applications). We recommend following [Discord.js official docs](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

6. Run `node index.js` in the terminal to start your instance of bot

     -  If you've followed the above steps successfully, You should see your Bot live in discord, else you can always get help!
 
7. Make a commit on the current branch (develop) to mark creating of environment variable `git add . && git commit -m "Environment created"`

## Step 6: Getting work done finally 

 - To start working now that you are in the develop branch you need to create your own branch from develop , run : 

     `git checkout -b *branch -name*`

- Once you are done implementing features or fixing bugs come down to [Pushing Changes](PUSHING.MD) to show us your contributions✌


## Making Non-Code Contributions

Non-code contributions include opening [Issues](https://github.com/NGIT-Open-Source/discord-bot/issues) regarding bugs/suggestions etc, Updating Docs through a [PR](https://github.com/NGIT-Open-Source/discord-bot/pulls) and more.

## Making Code Contributions

Before making any contributions, We recommend you to learn the basics of JavasScript first and refer to the official [guide](https://discordjs.guide/#before-you-begin) and [docs](https://discord.js.org/#/docs/main/stable/general/welcome) before making any changes to maintain code quality.


NOTE: We recommend opening an Issue first and link it to your PullRequest while opening a PR. It's considered a good practice and makes maintaining the codebase a lot easier.

## Getting Help

Ask for help in our official NGIT discord server. We can help you in many ways 

**Help in learning JS** : Either you already know the basics of JS or are a complete beginner, [this FREE course on **Sololearn** can help you learn essential JavaScript](https://www.sololearn.com/learning/1024) in the least possible time - In `DOM & Events` section in the course, we won't be using DOM concepts in this project, Events are important though.<details><summary>SOLOLEARN WARNING</summary>The **Sololearn** course isn't practice-oriented, so make sure you also practice in your local setup while learning on Sololearn.</details>