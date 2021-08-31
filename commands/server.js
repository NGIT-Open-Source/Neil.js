const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with Server info!'),
	async execute(interaction) {
		// MultiLine strings using `Template Literals`, it outputs as we see in our code, So beware, don't add spaces/tabs below
		await interaction.reply(`
Server name: ${interaction.guild.name}
Total members: ${interaction.guild.memberCount}
Created on: ${interaction.guild.createdAt}
VerificationLvl: ${interaction.guild.verificationLevel}
        `);
	},
};