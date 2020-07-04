const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['latency'],
			description: 'Displays current ping of the bot.',
			category: 'Utilities'
		});
	}

	async run(message) {
		const msg = await message.channel.send('Pingig...');

		const latency = msg.createdTimestamp - message.createdTimestamp;


		msg.edit(`Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(this.client.ws.ping)}ms\``);
	}

};
