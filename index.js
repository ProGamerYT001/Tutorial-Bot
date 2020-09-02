const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('NzUwNjI4OTM3MjA1NDE1OTY2.X09TrA.qPIpx9yD2omaj77PAlEuLYLbRko');