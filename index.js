// Following the best practices are necessary for proper maintainance of code
// For info refer:
// 1.https://discordjs.guide/creating-your-bot/command-handling.html
// 2.https://discordjs.guide/creating-your-bot/event-handling.html

const fs = require('fs');
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
// EXPRESS.js
const express = require('express');
const app = express();
const port = 3000;

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
// Login to Discord with your client's token
client.login(token);

// Simple Express web server
app.get('/', (req, res) => {
	res.send('Bot is LIVE!');
});

app.listen(port, () => {
	console.log('Bot listening at default route!');
});