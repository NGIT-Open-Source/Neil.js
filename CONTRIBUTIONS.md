> Discuss regarding contributions in this [Issue#12](https://github.com/NGIT-Open-Source/discord-bot/issues/12)
## Making Non-Code Contributions

Non-code contributions include opening [Issues](https://github.com/NGIT-Open-Source/discord-bot/issues) regarding bugs/suggestions etc, Updating Docs through a [PR](https://github.com/NGIT-Open-Source/discord-bot/pulls) and more. It also includes making docs clear and to the point.

## Making Code Contributions

Before making any contributions, We recommend you to learn the basics of JavasScript first and refer to the official [guide](https://discordjs.guide/#before-you-begin) and [docs](https://discord.js.org/#/docs/main/stable/general/welcome) before making any changes to maintain code quality.


NOTE: We recommend opening an Issue first and link it to your PullRequest before opening a PR. It's considered a good practice and makes maintaining the codebase a lot easier.

## Setting up the project locally [For Testing/Development]

 1. Clone this repo to your local directory
 2. Make sure you've Node.js `v16.6.0` or higher installed. [Follow this to install/upgrade Node.js](https://discordjs.guide/preparations/#installing-node-js)
 3. Head to your project folder and run `npm install` in the terminal. *(This command installs all the required packages/modules for the project mentioned in `package.json` in the `node_modules` directory)*
 4. Finally, Follow the below steps if you want to **run your own instance of bot** for testing/development <details><summary>Run Bot</summary>
    1. Edit the values in `config.json.example` (Default values in it will guide you in editing) and finally rename it to `config.json`
       - MAKE SURE NOT TO REVEAL YOUR TOKENS/SECRETS FROM `config.json` ANYWHERE ELSE
       - Get the tokens/ids from discord dev portal. We recommend following Discord.js official docs
    2. Run `node index.js` in the terminal to start your instance of bot
    </details>
 5. If you've followed the above steps successfully, You should see your Bot live in discord. 

## Getting Help

Ask for help in our official NGIT discord server. We can help you in many ways 

**Help in learning JS** : Either you already know the basics of JS or are a complete beginner, [this FREE course on **Sololearn** can help you learn essential JavaScript](https://www.sololearn.com/learning/1024) in the least possible time - You can skip `DOM & Events` section in the course, we won't be using it here.<details><summary>SOLOLEARN WARNING</summary>The **Sololearn** course isn't practice-oriented, so make sure you also practice in your local setup while learning on Sololearn.</details>
