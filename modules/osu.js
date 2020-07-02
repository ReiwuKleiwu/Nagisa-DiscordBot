const Discord = require('discord.js');
const fetch = require('node-fetch');


exports.default = class osu {
    constructor(bot) {
        this.on = true;
        this.bot = bot;
    }


    async recentplays(msg, args, client) {
        const argsParts = args.toString().split(/\s+/);
        const username = argsParts[0];
        const apiURL = 'https://osu.ppy.sh/p/api/get_user_recent'; 

        console.log(username);


        //Fetching Profile Data
        fetch('')
            .then(res => res.json())
            .then(json => console.log(json));

    }

}