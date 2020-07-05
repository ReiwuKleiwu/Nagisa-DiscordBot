const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const DrrrUtil = require('../../Utilities/DrrrUtil');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['stalk'],
			description: 'Checks for German rooms on drrr.com and displays them.',
			category: 'Utilities'
		});

		this.drrrUtils = new DrrrUtil();
	}

	// eslint-disable-next-line no-unused-vars
	async run(message) {
		const msg = await message.channel.send('Searching...');

		setInterval(async () => {
			const status = await this.drrrUtils.checkStatus();
			let rooms;
			if (status) {
				rooms = await this.drrrUtils.parseLounge();
			} else {
				await this.drrrUtils.newLogin();
				rooms = await this.drrrUtils.parseLounge();
			}

			const embed = new MessageEmbed()
				.setColor('#c3525f')
				.setAuthor(`${message.guild.name} Rooms`, message.guild.iconURL({ dynamic: true }))
				.setThumbnail(message.guild.iconURL({ dynamic: true }))
				.setTimestamp();

			if (rooms.length) {
				for (const room of rooms) {
					embed.addFields(
						{ name: `**Room Title**`, value: `${room.name}` || '-' },
						{ name: `**Description**`, value: room.description ? room.description : '-' },
						{ name: `**Host**`, value: room.host.name ? room.host.name : '-' },
						{ name: `**Room Size**`, value: `${room.total} / ${room.limit}` },
						{ name: `**Users**`, value: room.users.map(user => `\`${user.name}\``).join(', ') },
						{ name: `\u200b`, value: `ーーー` }
					);
				}
			} else {
				embed.addField('Kein deutscher Raum vorhanden.', 'So ein Mist aber auch...');
			}


			return msg.edit(embed);
		}, 60000);
	}


};
