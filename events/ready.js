// When the client is ready, this code runs (only once)

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Bot is LIVE => Logged in as ${client.user.tag}`);
	},
};