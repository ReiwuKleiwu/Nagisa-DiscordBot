const fetch = require('node-fetch');
const request = require('request-promise');

module.exports = class DrrrUtil {

	constructor() {
		this.url = 'https://drrr.com/';
		this.api = '?ajax=1&api=json';
		this.icon = 'bakyura';
		this.login = 'ENTER';
		this.language = 'de-DE';
		this.name = 'ReimuBot';
		// eslint-disable-next-line no-unused-expressions
		this.cookie;
	}


	async newLogin() {
		// Create a new session and login
		const drrrJSON = await this.constructor.fetchJson(this.url, this.api);
		const { token, Authorization } = drrrJSON;
		this.cookie = Authorization;

		console.log(`Login into Drrr.com with cookie: ${Authorization} and token: ${token}`);

		const formData = {
			name: this.name,
			icon: this.icon,
			token: token,
			login: this.login,
			language: this.language
		};

		await request({
			method: 'POST',
			uri: this.url + this.api,
			formData: formData,
			headers: {
				Cookie: `drrr-session-1=${this.cookie};`
			}
		// eslint-disable-next-line no-unused-vars
		}, (error, response, body) => {
			if (error) console.log(error);
			if (!response.body.error) {
				console.log(`Logged successfully into Drrr.com!`);
			} else {
				console.log(`There was an error logging into Drrr.com: ${request.body.error}`);
			}
		});
	}

	async checkStatus() {
		// Check whether or not you're still logged in on drrr.com
		const drrrJSON = await this.constructor.fetchJson(this.url, this.api, this.cookie);

		// Returns 'true' if logged in or 'false' if not logged in

		return drrrJSON.message;
	}

	async parseLounge() {
		// Parse Lounge and check for German rooms
		// console.log(`Parsing lounge...`);
		const drrrJSON = await this.constructor.fetchJson(`${this.url}/lounge/`, this.api, this.cookie);
		const germanRooms = [];

		// eslint-disable-next-line no-shadow

		for (const room of drrrJSON.rooms) {
			if (room.language === 'de-DE') germanRooms.push(room);
		}


		return germanRooms;
	}

	static async fetchJson(url, api, cookie) {
		const drrrFetch = await fetch(url + api, { headers: { cookie: cookie ? `drrr-session-1=${cookie};` : '' } });
		const drrrJSON = await drrrFetch.json();


		return drrrJSON;
	}

};

