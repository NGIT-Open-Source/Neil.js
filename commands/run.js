// This command works on Wandbox API
// https://github.com/melpon/wandbox/blob/master/kennel2/API.rst

// It's more of an event than a single slash command
// But, we'll put it in commands folder,
// because following messageCollector Event can only be triggered by `run` slash command
const { SlashCommandBuilder } = require('@discordjs/builders');
const http = require('axios');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

// SUPPORTED LANGUAGES
// To know the exact version used, Goto wandbox.org/nojs/VALUE
// where VALUE is the `value` of corresponding lang `key` in langs object
const langs = {
	'C' : 'gcc-11.1.0-c',
	'C++':'gcc-11.1.0',
	'Java': 'openjdk-head',
	'JavaScript': 'nodejs-head',
	'Python':'cpython-head',
	'SQL':'sqlite-head',
	'TypeScript':'typescript-3.9.5',
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('run')
		.setDescription('👩‍💻Runs your <code/>;')
		.addStringOption(option => {
			option
				.setName('language')
				.setDescription('Select programming language')
				.setRequired(true);
			for (const [lang, val] of Object.entries(langs)) {
				option.addChoice(`${lang}`, `${val}`);
			}
			return option;
		}),
	async execute(interaction) {
		const lang = interaction.options.getString('language');
		await interaction.reply({ content: 'Send your code in this channel enclosed in a code block. Request expires in 15 minutes!', ephemeral: true });
		// Check if the message is a codeblock or not
		const filter = msg => msg.content.startsWith('```') && msg.content.endsWith('```');
		// Create collector to collect multi-line input via codeblock
		// Waits for codeblock reply. Ends collector after 15 minutes if no response is received
		const collector = interaction.channel.createMessageCollector({ max: 1, filter, time: 900000 });

		collector.on('collect', async message => {
			const code = format(message.content);
			const output = await run(code, lang);
			await interaction.followUp({
				content: `[Source code](${message.url}) by ${interaction.user}`,
				embeds : [embed(output)],
				components: [link(output.url)] });
		});

		collector.on('end', async (collected) => {
			console.log(`Collected ${collected.size} items`);
			if (collected.size == 0) await interaction.followUp({ content: 'Token expired', ephemreal: true });
		});
	},
};

// Parses code from code block
const format = code => {
	const start = code.indexOf('\n') + 1;
	const end = code.lastIndexOf('\n');
	return code.slice(start, end);
};
// POST code to wandbox API
const run = async (code, lang) => {
	const form = {
		'code':code,
		'compiler': lang,
		'save':true,
	};
	const headers = {
		'content-type':'application/json',
	};
	const response = await http.post('https://wandbox.org/api/compile.json', form, { headers })
		.then(res => res.data)
		.catch(err => console.log(err));
	// console.log(response);
	return response;
};

// EMBED CONSTRUCTORS
const embed = output => new MessageEmbed()
	.setColor('#15e854')
	.setTitle('OUTPUT')
	.setDescription(`\`\`\`\n${output.program_message}\`\`\``)
	.setFooter(`Exit Status Code: ${output.status}`);

// BUTTON CONSTRUCTORS
const link = url => new MessageActionRow()
	.addComponents(
		new MessageButton()
			.setLabel('View/Edit 👩🏻‍💻 code in browser')
			.setURL(url)
			.setStyle('LINK'),
	);