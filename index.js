// Following the best practices are necessary for proper maintainance of code
// For info refer:
// 1.https://discordjs.guide/creating-your-bot/command-handling.html
// 2.https://discordjs.guide/creating-your-bot/event-handling.html

require('dotenv').config();
const fs = require('fs');
const { Client } = require('discord.js');
const startServer = require('./server');
const { setSlashCmds } = require('./events/slashCommands');
const { DiscordTogether } = require('discord-together');

// Intents are like permissions for the bot. Here's a list of intents available
// https://discord.com/developers/docs/topics/gateway#gateway-intents
const gateway_intents = ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'];

// Creates a new client instance
const client = new Client({ intents: gateway_intents });

// discord-together init
client.discordTogether = new DiscordTogether(client);

// Loops through events folder and an array of events .js files are stored in eventFiles
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
// Sets Slash Commands
setSlashCmds(client);

// Aynchronously listens to events
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