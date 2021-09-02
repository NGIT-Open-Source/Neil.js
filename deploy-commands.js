// Run `node deploy-commands.js` whenever you add a new command
// Failing to do so, New commands can't be registered and accessed on Discord
// Please refer https://discordjs.guide/creating-your-bot/creating-commands.html

const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

// The below script is setup in such a way that developers don't need to add New commands here manually,
// Commands will be grabbed from commands/your-command.js directly if you follow the correct methods to create a new command
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	}
	catch (error) {
		console.error(error);
	}
})();