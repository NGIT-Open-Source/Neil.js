// Docs reference
// Interaction: https://discord.js.org/#/docs/main/stable/class/Interaction
// GuildMember: https://discord.js.org/#/docs/main/stable/class/GuildMember
// GuildMembers: https://discord.js.org/#/docs/main/stable/class/GuildMemberManager
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// EMBED CONSTRUCTOR
const embed = member => new MessageEmbed()
	.setThumbnail(member.displayAvatarURL())
	.setDescription(`**<@${member.user.id}>**`)
	.setFields(
		{ name: 'Joined Discord:', value: `**<t:${format(member.user.createdTimestamp)}:R>**`, inline: true },
		{ name: 'Joined Server:', value: `**<t:${format(member.joinedTimestamp)}:R>**`, inline: true })
	.setFooter(member.user.tag);

// Format timestamp from 13 digits to 10, Discord uses 10 digit timestamps
const format = timeStamp => Math.ceil(timeStamp / 1000);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with User info!')
		.addUserOption(option =>
			option.setName('target_user')
				.setDescription('Get targeted user info')),

	async execute(interaction) {
		// GuildMember
		let member = interaction.member;
		// Target member, if provided
		const target = interaction.options.getUser('target_user');
		// GuildMember Object for Targeted member
		if (target) {
			// GuildMembers
			const members = interaction.guild.members;
			member = await members.fetch(target);
		}

		await interaction.reply({ embeds: [embed(member)], ephemeral: true });
	},
};