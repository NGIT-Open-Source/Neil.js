# Getting Started with Contributions

This is a specialized  Guide only made for this project to follow along.

If you need a complete git tutorial, watch this [video](https://www.youtube.com/watch?v=apGV9Kg7ics&t=1152s) by Kunal. 

Well, before starting this tutorial I would like to say that these are some tested methods by us and are intended to be followed by all of our contributors.

## Step 0 : Set up Git with GitHub
Follow this official guide from GitHub to properly [Setup Git](https://docs.github.com/en/get-started/quickstart/set-up-git) with GitHub. **GitHub forces users to install their own GitHub CLI or GitHub Desktop Client, it is recommended to skip these steps and proceed with further steps in the guide.**
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
1. Checkout to development branch `git checkout develop`

2. Make sure you've Node.js `v16.6.0` or higher installed. [Follow this to install/upgrade Node.js](https://discordjs.guide/preparations/#installing-node-js)

3. Head to your project folder and run `npm ci` in the terminal. *(This command installs all the required modules for the project mentioned in `package-lock.json` in the `node_modules` directory.*
     - Don't use `npm install` or `npm update` to install/update modules. Doing so might land you in a situation called **[Dependendency Hell](https://en.wikipedia.org/wiki/Dependency_hell)** whereas using **`npm ci`** ensures you're working with exact versions of dependencies as other developers are. Know more about **npm ci** via [this article](https://lucasfcosta.com/2020/10/17/lockfile-guide.html) or [npm docs](https://docs.npmjs.com/cli/v7/commands/npm-ci)
     - `npm install <module-name>` can be used if you want to install an external npm module for a feature you're working on. Remember, As stated in [npm-install docs](https://docs.npmjs.com/cli/v7/commands/npm-install) `npm install` works entirely different as compared to `npm install <module-name>`
     - If you've used `npm install/update` unknowingly, Kindly refer [this to fix conflicts](https://github.com/NGIT-Open-Source/discord-bot/issues/16)

4. Finally, Follow the below steps if you want to **run your own instance of bot** for testing/development
     -  **We would also highly suggest you to create your own server to test your bot out if you are new as we don't want to spam the main server.**

5. Create a file `config.json` and copy the template from `config.json.example`. Make necessary changes in `config.json`.
     - For security, `config.json` will not be commited since it is added to `.gitignore`
     - MAKE SURE NOT TO REVEAL YOUR TOKENS/SECRETS FROM `config.json` ANYWHERE ELSE
     - Get the tokens/ids from [Discord Dev portal](https://discord.com/developers/applications). We recommend following official Discord.js docs to [Setup Bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html) and [adding it to your Server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html)

6. Run `node deploy-commands.js` to register commands and then run `node index.js` OR simply `node .` to start the bot. Refer Discord.js official guide if you run into errors.
     - `node deploy-commands.js` should be run whenever a new command is added to the commands folder
     - If you've followed the above steps successfully, You should see your Bot live in discord, else you can always get help!
 
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

**Help in learning JS** : Either you already know the basics of JS or are a complete beginner, [this FREE course on **Sololearn** can help you learn essential JavaScript](https://www.sololearn.com/learning/1024) in the least possible time - In `DOM & Events` section in the course, we won't be using DOM concepts in this project, Events are important though. THIS BASIC COURSE DOESN'T TEACH ASYNCHRONOUS PROGRAMMING AND SOME OTHER IMPORTANT CONCEPTS, TO LEARN ADVANCED JS, REFER THIS [TUTORIAL](https://javascript.info/).<details><summary>SOLOLEARN WARNING</summary>The **Sololearn** course isn't practice-oriented, so make sure you also practice in your local setup while learning on Sololearn.</details>
