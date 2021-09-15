// Temporarily, express web server is used for stable hosting on the Cloud
// FUTURE PLANS:
// => A miniature interface on web for admin to control few bot specific actions

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('BOT is LIVE!');
});

function startServer() {
	app.listen(port, () => {
		console.log('Server is LIVE');
	});
}

module.exports = startServer;