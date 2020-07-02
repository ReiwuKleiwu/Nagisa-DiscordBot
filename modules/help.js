const Discord = require('discord.js');

exports.default = class help {
    constructor(bot) {
      this.on  = true;
      this.bot = bot;
    }

    help(msg)
    {
        const embed = new Discord.MessageEmbed()
        .setTitle("Commands")
        .addFields({
            name: '**Commands:**',
            value: "`!dateprofile @user` - gibt das Dateprofil dieses Benutzers (falls vorhanden) aus. \n`!updatedateprofile` - lässt dich dein eigenes Dateprofil erstellen.\n`!deletedateprofile` - löscht dein eigenes Dateprofil."
        })


        msg.channel.send(embed);
    }


   
}