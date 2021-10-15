// Know more about how ping is calculated ~ https://discordjs.guide/popular-topics/faq.html#how-do-i-check-the-bot-s-ping

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const format = require('pretty-ms');
// pretty-ms is an npm package which converts time in milliseconds to human readable format
// For Eg. `format(1337000000)` will output `15d 11h 23m 20s`

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('🏓Pong! Let\'s do some math!!'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: '🏓Ping!\nDoing Math🔄', fetchReply: true });
		sent;
		await interaction.editReply({
			content: 'Pong🏓!\nDone with Math✅',
			embeds: [embed(interaction, sent)],
		});
	},
};

// EMBED CONSTRUCTOR
const embed = (interaction, sent) => {
	return new MessageEmbed()
		.setColor('#15e854')
		.setDescription(`
🤖 **Bot Latency** ≈ ${sent.createdTimestamp - interaction.createdTimestamp} ms
or Roundtrip Latency

⚙ **Discord API Latency** ≈ ${interaction.client.ws.ping} ms
or Websocket Heartbeat

🔼 **Uptime** ≈ ${format(interaction.client.uptime, { verbose: true, secondsDecimalDigits: 0, unitCount: 2 })}

[This is how latencies are measured](https://discordjs.guide/popular-topics/faq.html#how-do-i-check-the-bot-s-ping)
`);
};