const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config');


class DiscordBot {
    constructor(client) {
        this.client = client;
        this.MOD = ['ping', 'ship'];
        this.CONFIG_PATH = './config.js';
        this.PREFIX = config.botProperties.prefix; 
        this.mod = {}
        this.init_bot();
        this.init_mod();
        this.cmd_handler();
    }


    load_mod(name) {
        const mod = require(`./discordModules/${name}.js`);
        this.mod[name] = new mod.default(this);
    }

    init_mod() {
        try {
            this.MOD.forEach(name => this.load_mod(name));

        } catch (err) {
            console.log(err);
        }
    }


    init_bot() {
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.login(config.botProperties.botToken);
    }


    cmd_handler() {
        this.client.on('message', msg => {

            if (msg.content[0] === this.PREFIX) {

                const parts = msg.content.split(/\s+/);
                const cmd = parts[0];
                const args = parts.slice(1).join(' ');

                switch (cmd) {
                    case this.PREFIX + 'ping':
                        this.mod.ping.pingReply(msg);
                        break;
                    case this.PREFIX + 'ship':
                        this.mod.ship.ship(msg, args, client);
                }
            }
        });
    }



}

const DisBot = new DiscordBot(client);