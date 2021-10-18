// Docs reference
// Interaction: https://discord.js.org/#/docs/main/stable/class/Interaction
// Guild: https://discord.js.org/#/docs/main/stable/class/Guild
// GuildMembers: https://discord.js.org/#/docs/main/stable/class/GuildMemberManager
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// EMBED CONSTRUCTOR
const embed = (guild, count) => new MessageEmbed()
	.setTitle(guild.name)
	.setThumbnail(guild.iconURL())
	.setFields(
		{ name: '📅Created', value: `**<t:${Math.floor(guild.createdTimestamp / 1000)}:R>**`, inline: true },
		{ name: `👥Members(${guild.memberCount})`, value: `**${count}** Users | **${guild.memberCount - count}** Bots`, inline: true },
		{ name: '👑Owner:', value: `<@${guild.ownerId}>`, inline: true });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with Server info!'),
	async execute(interaction) {
		// Guild
		const guild = interaction.guild;
		// GuildMembers
		const userCount = guild.members.cache.filter(cnt => cnt.user.bot).size;

		await interaction.reply({ embeds: [embed(guild, userCount)] });
	},
};