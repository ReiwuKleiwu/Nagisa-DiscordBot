const Discord = require('discord.js');


exports.default = class ship {
    constructor(bot) {
        this.on = true;
        this.bot = bot;
    }


    fetchUsersFromArgs(args, client) {

        const msgParts = args.toString().split(/\s+/);


        if (msgParts.length !== 2)
            return;

        let user1 = msgParts[0];
        let user2 = msgParts[1];

        if (user1.includes('@'))
            if (user1.includes('<'))
                if (user1.includes('>'))
                    user1 = user1.replace('>', ' ');
                    user1 = user1.replace('<', ' ');
                    user1 = user1.replace('@', ' ').trim();
        if (user2.includes('@'))
            if (user2.includes('<'))
                if (user2.includes('>'))
                    user2 = user2.replace('>', ' ');
                    user2 = user2.replace('<', ' ');
                    user2 = user2.replace('@', ' ').trim();

            let fetchedUser1 = client.users.get(user1);
            let fetchedUser2 = client.users.get(user2);
            let users = [];

        
            if(fetchedUser1 !== undefined && fetchedUser2 !== undefined)
                users = [fetchedUser1, fetchedUser2, 1, 1]
            else if(fetchedUser1 !== undefined && fetchedUser2 === undefined)
                users = [fetchedUser1, user2, 1, 0]
            else if(fetchedUser1 === undefined && fetchedUser2 !== undefined)
                users = [user1, fetchedUser2, 0, 1]
            else
                users = [user1, user2, 0, 0]

           return users; 


    }

    ship_twoUsers(fetchedUser1, fetchedUser2, msg, client)
    {
        let ship = Math.floor(Math.random() * 100) + 0;
             
              if(ship == 9)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\` 404 love not found💔')
               

                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 19){
                
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`█⠀⠀⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});

              }
              else if(ship <= 29)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`██⠀⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 39) 
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`███⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 49) 
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`████⠀⠀⠀⠀⠀⠀\` Awful 😭')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 59) 
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`█████⠀⠀⠀⠀\` Barely 😶')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 68)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`██████⠀⠀⠀⠀\` Barely 😶')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 69)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`███████⠀⠀⠀\` ( ͡° ͜ʖ ͡°)')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 79)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`███████⠀⠀⠀\` Pretty Good 😄')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 89)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`████████⠀⠀\` Pretty Good 😄')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 99)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`█████████⠀\` Amazing 😍')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship == 100)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`██████████\` PERFECT! ❣️')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
    }
    
    ship_oneUser(fetchedUser1, user2, msg, client)
    {
        let ship = Math.floor(Math.random() * 100) + 0;
        
        if(ship == 9)
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\` 404 love not found💔')
         

          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 19){
          
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`█⠀⠀⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});

        }
        else if(ship <= 29)
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`██⠀⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 39) 
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`███⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 49) 
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`████⠀⠀⠀⠀⠀⠀\` Awful 😭')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 59) 
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`█████⠀⠀⠀⠀\` Barely 😶')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 69)
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`██████⠀⠀⠀⠀\` Barely 😶')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 68)
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`███████⠀⠀⠀\` ( ͡° ͜ʖ ͡°)')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 79)
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`███████⠀⠀⠀\` Pretty Good 😄')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 89)
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`████████⠀⠀\` Pretty Good 😄')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship <= 99)
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`█████████⠀\` Amazing 😍')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
        else if(ship == 100)
        {
          const embed = new Discord.RichEmbed()
          .setColor('#0xff80ff')
          .setTitle(ship + '% \`██████████\` PERFECT! ❣️')
          client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${fetchedUser1.username}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
        }
    }

    ship_secondUser(user1, fetchedUser2, msg, client)
    {
        
              ship = Math.floor(Math.random() * 100) + 0;
             
  
              if(ship == 9)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\` 404 love not found💔')
               

                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 19){
                
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`█⠀⠀⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});

              }
              else if(ship <= 29)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`██⠀⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 39) 
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`███⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 49) 
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`████⠀⠀⠀⠀⠀⠀\` Awful 😭')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 59) 
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`█████⠀⠀⠀⠀\` Barely 😶')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 68)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`██████⠀⠀⠀⠀\` Barely 😶')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 69)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`███████⠀⠀⠀\` ( ͡° ͜ʖ ͡°)')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 79)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`███████⠀⠀⠀\` Pretty Good 😄')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 89)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`████████⠀⠀\` Pretty Good 😄')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship <= 99)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`█████████⠀\` Amazing 😍')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
              else if(ship == 100)
              {
                const embed = new Discord.RichEmbed()
                .setColor('#0xff80ff')
                .setTitle(ship + '% \`██████████\` PERFECT! ❣️')
                client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${fetchedUser2.username}\`` + '\n' , {embed});
              }
    }


        ship_twoNames(user1, user2, msg, client)
        {
            let ship = Math.floor(Math.random() * 100) + 0;
             
  
             if(ship == 9)
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\` 404 love not found💔')
              

               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 19){
               
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`█⠀⠀⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});

             }
             else if(ship <= 29)
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`██⠀⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 39) 
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`███⠀⠀⠀⠀⠀⠀⠀\` Awful 😭')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 49) 
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`████⠀⠀⠀⠀⠀⠀\` Awful 😭')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 59) 
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`█████⠀⠀⠀⠀\` Barely 😶')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 68)
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`██████⠀⠀⠀⠀\` Barely 😶')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 69)
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`███████⠀⠀⠀\` ( ͡° ͜ʖ ͡°)')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 79)
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`███████⠀⠀⠀\` Pretty Good 😄')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 89)
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`████████⠀⠀\` Pretty Good 😄')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship <= 99)
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`█████████⠀\` Amazing 😍')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }
             else if(ship == 100)
             {
               const embed = new Discord.RichEmbed()
               .setColor('#0xff80ff')
               .setTitle(ship + '% \`██████████\` PERFECT! ❣️')
               client.channels.get(msg.channel.id).send(':heartpulse:**MATCHMAKING**:heartpulse:\n' + '🔻' + `\`${user1}\`` + '\n' + '🔺' + `\`${user2}\`` + '\n' , {embed});
             }

        }


    ship(msg, args, client) {
        const users = this.fetchUsersFromArgs(args, client);
        let user1 = users[0];
        let user2 = users[1];
        let isUser1 = users[2];
        let isUser2 = users[3];

        if(isUser1 === 1 && isUser2 === 1)
            this.ship_twoUsers(user1, user2, msg, client);
        else if(isUser1 === 1 && isUser2 === 0)
            this.ship_oneUser(user1, user2, msg, client); 
        else if(isUser1 === 0 && isUser2 === 1)
            this.ship_secondUser(user1, user2, msg, client); 
        else
            this.ship_twoNames(user1, user2, msg, client);

            
            
    }




}