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

// Version of selected language
// This object is honestly a bad addition, but djs has left no other way to access OptionChoice `name` directly
const versions = {};
Object.keys(langs).forEach(key => {
	versions[langs[key]] = key;
});

// Parses code from code block
const format = code => {
	const start = code.indexOf('\n') + 1;
	const end = code.lastIndexOf('\n');
	return code.slice(start, end);
};

// POST code to wandbox API
const run = async (code, version) => {
	const form = {
		'code':code,
		'compiler': version,
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
const embed = (output, lang) => {
	let out = output.program_message;
	if (out == undefined) out = output.compiler_message;
	return new MessageEmbed()
		.setColor('#15e854')
		.setTitle('output')
		.setDescription(`\`\`\`\n${out}\`\`\``)
		.addFields(
			{ name: 'language', value: `${lang}` })
		.setFooter(`Exit Status Code: ${output.status}`);
};

// BUTTON CONSTRUCTORS
const link = url => new MessageActionRow()
	.addComponents(
		new MessageButton()
			.setLabel('View/Edit 👩🏻‍💻 code in browser')
			.setURL(url)
			.setStyle('LINK'),
	);

// Active Collectors array, stores userIds with active collectors, follow further code to understand
const active = new Map();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('run')
		.setDescription('👩‍💻Runs your <code/>;')
		.addStringOption(option => {
			option
				.setName('language')
				.setDescription('Select programming language')
				.setRequired(true);
			for (const [lang, version] of Object.entries(langs)) {
				option.addChoice(`${lang}`, `${version}`);
			}
			return option;
		}),
	async execute(interaction) {

		// options.getString('language') will actually return option choice `value`, and not choice `name`
		// https://discordjs.guide/interactions/replying-to-slash-commands.html#parsing-options
		const version = interaction.options.getString('language');
		const lang = versions[version];
		const user = interaction.user.id;

		// prompt user to send code
		const helpLink = 'https://github.com/NGIT-Open-Source/Neil.js/wiki/Run-your-code-with-Neil.js';
		await interaction.reply({ content: `Send your **${lang}** code enclosed in a code block. [Help](<${helpLink}>)?`, ephemeral: true });

		// Check if any received message by user is a codeblock, if not wait for reply until timer ends
		// `filter` returns a boolean, code will be processed only when it returns True
		function filter(message) {
			return (message.author.id == user) &&
				message.content.startsWith('```') && message.content.endsWith('```');
		}

		// Collector is created when /run command is triggered

		// Check if user has already created a collector
		// if yes, destroy previous collector
		const activeCollector = active.get(user);
		if (activeCollector) activeCollector.stop();

		// Create new collector to collect multi-line input via codeblock
		// Waits for codeblock reply. Ends collector after 15 minutes if no response is received
		const collector = interaction.channel.createMessageCollector({ max: 1, filter, time: 900000 });
		active.set(user, collector);

		collector.on('collect', async message => {
			const code = format(message.content);
			const output = await run(code, version);
			await message.reply({
				embeds : [embed(output, lang)],
				components: [link(output.url)] });
		});

		collector.on('end', async (collected) => {
			active.delete(user);
			const tag = interaction.user.tag;
			if (collected.size == 0) console.log(`${tag}'s /run request expired!`);
			else console.log(`${tag}'s /run request processed!`);
		});
	},
};