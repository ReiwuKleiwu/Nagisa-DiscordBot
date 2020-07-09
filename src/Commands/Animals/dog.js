const Command = require('../../Structures/Command');
const config = require('../../../config.json');
const request = require('request-promise');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Sends you a cute picture of a dog! ▼・ᴥ・▼',
			category: 'Animals'
		});
	}

	async run(message) {
		if (this.constructor.validate()) {
			await request({
				method: 'GET',
				uri: `https://api.thedogapi.com/v1/images/search`,
				headers: {
					'X-API-KEY': config.dogApiKey
				}
				// eslint-disable-next-line no-unused-vars
			}, (error, response, body) => {
				if (error) console.log(error);

				body = JSON.parse(body);

				message.channel.send(body[0].url);
			});
		}
	}

	static validate() {
		if (!config.dogApiKey) {
			throw new Error(`You must pass an API Key if you want to use the ${this.name} module.`);
		} else {
			return true;
		}
	}

};
