// This event is triggered when users interact via slash(/) commands
const client = require('../index.js');
const fs = require('fs');
const { Collection } = require('discord.js');

// Loops through .js files in commands/ present in commands folder and
// commands are added to `commanFiles` collection as strings
client.commands = new Collection();
const commandFiles = fs.readdirSync('commands/').filter(file => file.endsWith('.js'));

// Commands are set
for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.data.name, command);
}

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		// Uncomment below line if you want to track each and every interaction [It will spam your console]
		// console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered a slash command.`);
		if (!interaction.isCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		}
		catch (error) {
			console.error(error);
			return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};