const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config');


class DiscordBot {
    constructor(client) {
        this.client = client;
        this.MOD = ['ping', 'ship'];
        this.REQ_RIGHTS = { // 1: user 0: admin
            ping: 1,
            ship: 1,
            unload: 0
        }
        this.CONFIG_PATH = './config.js';
        this.PREFIX = config.botProperties.prefix;
        this.mod = {}
        this.init_bot();
        this.init_mod();
        this.cmd_handler();
    }


    load_mod(name) {
        const mod = require(`./modules/${name}.js`);
        this.mod[name] = new mod.default(this);
    }

    unload_mod(name) {
        try {
            delete require.cache[require.resolve(`./modules/${name}.js`)];
            delete this.mod[name];

        } catch (err) {
            console.log(err);
        }

    }


    reload_mod(name) {
        try {
            delete require.cache[require.resolve(`./modules/${name}.js`)];
            this.load_mod(name);
            console.log(this.mod[name]);
        } catch (err) {
            console.log(err);
        }

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

    check_userIsAdmin(msg) {
        return msg.member.permissions.has('ADMINISTRATOR');
    }


    cmd_handler() {
        this.client.on('message', msg => {

            if (msg.content[0] === this.PREFIX) {

                const parts = msg.content.split(/\s+/);
                const cmd = parts[0];
                const args = parts.slice(1).join(' ');

                switch (cmd) {
                    case this.PREFIX + 'ping':
                        try {
                            this.mod.ping.pingReply(msg);
                        } catch (err) {
                            console.log(err);
                        }
                        break;
                    case this.PREFIX + 'ship':
                        try {
                            this.mod.ship.ship(msg, args, client);
                        } catch (err) {
                            console.log(err);
                        }
                        break;
                    case this.PREFIX + 'unload':
                        try {
                            if (this.check_userIsAdmin(msg))
                                this.unload_mod(args);
                        } catch (err) {
                            console.log(err);
                        }
                        break;
                    case this.PREFIX + 'load':
                        try {
                            if (this.check_userIsAdmin(msg))
                                this.load_mod(args);
                        } catch (err) {
                            console.log(err);
                        }
                }
            }
        });
    }



}

const DisBot = new DiscordBot(client);