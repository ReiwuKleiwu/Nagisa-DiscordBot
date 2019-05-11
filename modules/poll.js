const Discord = require('discord.js');

exports.default = class polll {
    constructor(bot) {
        this.on = true;
        this.bot = bot;
    }

    poll(args, msg, client) {

        const filter = (reaction) => reaction.emoji.name === '✅' || reaction.emoji.name === '❌'
       

        const embed = new Discord.RichEmbed()
            .setColor('#ffe121')
            .setTitle(args)

        client.channels.get(msg.channel.id).send({
                embed
            })
            .then(msg => { 

                msg.awaitReactions(filter, { // Check for Reactions
                        time: 15000,
                        errors: ['time']
                    })
                    .then(collected => {
                        const reaction = collected.first(); 
                        //console.log(reaction);
                    })
                    .catch(collected => {
                        //console.log(`After a minute, only ${collected.size} reacted.`);
                        console.log(collected.get('✅').count);
                        console.log(collected.get('❌').count);
                    });
            })
            .catch(err => {
                console.log(err);
            });


    }


    reaction_handler(msg, client) {

    }
}
