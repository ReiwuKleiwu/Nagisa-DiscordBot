const Discord = require('discord.js');

exports.default = class newUser {
    constructor(bot) {
        this.on = true;
        this.bot = bot;
    }




    async addNewUser(msg, args, client) {

        const argsParts = args.toString().split(/\s+/);

        const member = await msg.guild.members.fetch(msg.author.id);

        const username = argsParts[0];
        const color = argsParts[1];

        const channel = client.channels.fetch('718235606613753886');


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
            msg.reply("der Name deiner Rolle darf nicht länger als 30 Zeichen sein!");

            setTimeout(async () => {
                const channel = await client.channels.fetch('717405130349084810');
                let messages = await channel.messages.fetch();


                messages.forEach(message => {
                    if (messages.last() != message) {
                        message.delete();
                    }
                });
            }, 5000);

            return;
        } else if (username.toString().length < 2) {
            msg.reply("der Name deiner Rolle darf nicht kürzer als 2 Zeichen sein!");

            setTimeout(async () => {
                const channel = await client.channels.fetch('717405130349084810');
                let messages = await channel.messages.fetch();


                messages.forEach(message => {
                    if (messages.last() != message) {
                        message.delete();
                    }
                });
            }, 5000);

            return;
        } else if (!checkColor) {
            msg.reply("der von dir gewählte Hex-Farbcode entspricht nicht dem allgemeinen Format!");

            setTimeout(async () => {
                const channel = await client.channels.fetch('717405130349084810');
                let messages = await channel.messages.fetch();


                messages.forEach(message => {
                    if (messages.last() != message) {
                        message.delete();
                    }
                });
            }, 5000);

            return;
        } else if (member.roles.cache.has('717402412444287056')) {

            msg.reply("du bestitzt bereits eine Rolle!");

            setTimeout(async () => {
                const channel = await client.channels.fetch('717405130349084810');
                let messages = await channel.messages.fetch();


                messages.forEach(message => {
                    if (messages.last() != message) {
                        message.delete();
                    }
                });
            }, 5000);

            return;
        } else if (roleAlreadyTaken) {
            msg.reply("der von dir gewählte Name wird bereits genutzt!");

            setTimeout(async () => {
                const channel = await client.channels.fetch('717405130349084810');
                let messages = await channel.messages.fetch();


                messages.forEach(message => {
                    if (messages.last() != message) {
                        message.delete();
                    }
                });
            }, 5000);

            return;
        }

       

        await msg.guild.roles.create({
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
            let role = await msg.guild.roles.cache.find(role => role.name === username.toString());
            let userRole = await msg.guild.roles.cache.find(role => role.name === 'User');
            await member.roles.add(role);
            await member.roles.add(userRole);
            msg.reply(`die Rolle ${username} wurde dir erfolgreich hinzugefügt!`);
        } catch (err) {
            console.log(err);
        }


        setTimeout(async () => {
            const channel = await client.channels.fetch('717405130349084810');
            let messages = await channel.messages.fetch();


            messages.forEach(message => {
                if (messages.last() != message) {
                    message.delete();
                }
            });
        }, 10000);




    }


    async normalizeRoles(msg, client) {
        const member = await msg.guild.members.fetch(msg.author.id);
        const roles = member.guild.roles.cache;

        roles.forEach(role => {

            let roleName = role.name;


            if (roleName != "Admin" && roleName != 'Moderator' && roleName != 'Yggdrasil' && roleName != 'Rythm' && roleName != 'Bot' && roleName != 'himebot' && roleName != 'Mantaro' && roleName != 'everyone' && roleName != 'Reimu' && roleName != 'SexiiExii') {

                console.log(`Trying to change ${roleName}: `);

                role.setPermissions([
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
                ]);

                msg.reply(`die Rolle ${roleName} wurde erfolgreich normalisiert!`);
            }
        });


        //msg.reply("alle Rollen wurden erfolgreich normalisiert.");

    }


    async test(msg, args, client) {

        const channel = await client.channels.fetch('717405130349084810');

        channel.send("**Wilkommen auf dem German Dollars Discord Server!** \nIm Folgenden bekommst du eine Rolle mit einer von dir gewählten Farbe, welche nach deinem Benutzernamen benannt wird.\n1. Gebe dafür bitte den folgenden Befehl ein, ändere jedoch \"nutzername\" zu deinem Namen/Nutzernamen/Pseudonym.\n2. Außerdem musst du deine gewünschte Farbe in HEX angeben. Nutze zum finden deiner gewünschten Farbe in HEX einen beliebigen HEX Color Picker von Google.\nÄndere danach das \"#FFFFFF\" im untenstehenden Befehl zu deiner Farbe in HEX um.```!add nutzername #FFFFFF```\n**Viel Spaß auf dem German Dollars Discord Server und halte dich bitte an unsere Regeln!**");


    }

};