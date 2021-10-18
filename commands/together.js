// Experimental feature. Stay away!
const { SlashCommandBuilder } = require('@discordjs/builders');

// supported task/game list
const tasks = ['youtube', 'poker', 'chess', 'betrayal', 'fishing', 'lettertile', 'wordsnack', 'doodlecrew'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('together')
		.setDescription('Together have fun🎉[EXPERIMENTAL/UNSTABLE]')
		.addStringOption(option => {
			option
				.setName('apps')
				.setDescription('Choose a app/game to start!')
				.setRequired(true);
			for (const task of tasks) {
				option.addChoice(task, task);
			}
			return option;
		}),
	async execute(interaction) {
		const channel = interaction.member.voice.channel;
		const task = interaction.options.getString('apps');
		if (channel) {
			interaction.client.discordTogether.createTogetherCode(channel.id, `${task}`).then(async invite => {
				await interaction.reply(`Click here ${invite.code} to start the activity!`);
			});
		}
		else {await interaction.reply({ content: 'You must be in a voice channel!', ephemeral: true });}
	},
};