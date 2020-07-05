/* eslint-disable no-shadow */
const Command = require('../../Structures/Command');

module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			description: 'Adds a new role to a user.',
			category: 'Utilities',
			usage: '<username> <hexcolor>'
		});
	}

	async run(message, args) {
		const member = await message.guild.members.fetch(message.author.id);
		console.log(args);

		const username = args[0];
		const color = args[1];

		// VALIDATION

		const HEXCOLORREGEX = /^#[0-9a-f]{3,6}$/i;
		const checkColor = HEXCOLORREGEX.test(color);


		let roleAlreadyTaken = false;

		member.guild.roles.cache.forEach(role => {
			if (role.name === username.toString()) {
				roleAlreadyTaken = true;
			}
		});


		if (username.toString().length > 30) {
			message.reply('der Name deiner Rolle darf nicht länger als 30 Zeichen sein!');

			setTimeout(async () => {
				const channel = await this.client.channels.fetch('717405130349084810');
				const messages = await channel.messages.fetch();


				messages.forEach(message => {
					if (messages.last() !== message) {
						message.delete();
					}
				});
			}, 5000);

			return;
		} else if (username.toString().length < 2) {
			message.reply('der Name deiner Rolle darf nicht kürzer als 2 Zeichen sein!');

			setTimeout(async () => {
				const channel = await this.client.channels.fetch('717405130349084810');
				const messages = await channel.messages.fetch();


				messages.forEach(message => {
					if (messages.last() !== message) {
						message.delete();
					}
				});
			}, 5000);

			return;
		} else if (!checkColor) {
			message.reply('der von dir gewählte Hex-Farbcode entspricht nicht dem allgemeinen Format!');

			setTimeout(async () => {
				const channel = await this.client.channels.fetch('717405130349084810');
				const messages = await channel.messages.fetch();


				messages.forEach(message => {
					if (messages.last() !== message) {
						message.delete();
					}
				});
			}, 5000);

			return;
		} else if (member.roles.cache.has('717402412444287056')) {
			message.reply('du bestitzt bereits eine Rolle!');

			setTimeout(async () => {
				const channel = await this.client.channels.fetch('717405130349084810');
				const messages = await channel.messages.fetch();


				messages.forEach(message => {
					if (messages.last() !== message) {
						message.delete();
					}
				});
			}, 5000);

			return;
		} else if (roleAlreadyTaken) {
			message.reply('der von dir gewählte Name wird bereits genutzt!');

			setTimeout(async () => {
				const channel = await this.client.channels.fetch('717405130349084810');
				const messages = await channel.messages.fetch();


				messages.forEach(message => {
					if (messages.last() !== message) {
						message.delete();
					}
				});
			}, 5000);

			return;
		}


		await message.guild.roles.create({
			data: {
				name: username.toString(),
				color: color.toString(),
				hoist: true,
				position: 15,
				permissions: [
					'CREATE_INSTANT_INVITE',
					'CHANGE_NICKNAME',
					'READ_MESSAGE_HISTORY',
					'SEND_MESSAGES',
					'EMBED_LINKS',
					'ATTACH_FILES',
					'USE_EXTERNAL_EMOJIS',
					'ADD_REACTIONS',
					'CONNECT',
					'SPEAK',
					'STREAM',
					'USE_VAD'
				]
			}
		});

		try {
			const role = await message.guild.roles.cache.find(role => role.name === username.toString());
			const userRole = await message.guild.roles.cache.find(role => role.name === 'User');
			await member.roles.add(role);
			await member.roles.add(userRole);
			message.reply(`die Rolle ${username} wurde dir erfolgreich hinzugefügt!`);
		} catch (err) {
			console.log(err);
		}


		setTimeout(async () => {
			const channel = await this.client.channels.fetch('717405130349084810');
			const messages = await channel.messages.fetch();


			messages.forEach(message => {
				if (messages.last() !== message) {
					message.delete();
				}
			});
		}, 10000);
	}


};
