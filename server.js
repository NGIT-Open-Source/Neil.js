// Temporarily, express web server is used for stable hosting on the Cloud
// FUTURE PLANS:
// => A miniature interface on web for admin to control few bot specific actions

const express = require('express');
const app = express();


app.get('/', (req, res) => {
	res.send('BOT is LIVE!');
});

function startServer() {
	app.listen(3000, () => {
		console.log('Server is LIVE');
	});
}

module.exports = startServer;