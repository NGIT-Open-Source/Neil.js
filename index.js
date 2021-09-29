// Following the best practices are necessary for proper maintainance of code
// For info refer:
// 1.https://discordjs.guide/creating-your-bot/command-handling.html
// 2.https://discordjs.guide/creating-your-bot/event-handling.html

require('dotenv').config();
const fs = require('fs');
const { Client, Intents } = require('discord.js');
const startServer = require('./server');

// Creates a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Loops through events folder and an array of events .js files are stored in eventFiles
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// START EXPRESS SERVER
startServer();
// Login to Discord with your bot token
client.login(process.env.token);