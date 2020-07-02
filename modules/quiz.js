exports.default = class quiz {
    constructor(bot) {
        this.on = true;
        this.bot = bot;
    }

    async quiz(message, args, client) {


        const channel = client.channels.cache.get(message.channel.id);
        let cAnswer;
        let number = 2
        let random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1:
                message.channel.send("How many minutes in an hour?: \nA) 15 \nB) 60 \nC) 45 \nD) 40");
                cAnswer = "b";
                break;

            case 2:
                message.channel.send("How many days in a week?: \nA ) 4 \nB ) 6 \nC ) 7 \nD ) 9");
                cAnswer = "c";
                break;
        }

        try {
            let collected = await channel.awaitMessages(m => m.author === message.author, {
                max: 1,
                time: 10000,
                errors: ['time']
            });

            let userAnswer = collected.first().content.toString();

            

            if(userAnswer.toLowerCase() == cAnswer.toLowerCase())
            {
                message.channel.send(`WOW YOU'RE SO GOOD BRO IT'S CORRECT!!!`);
            }
            else
            {
                message.channel.send(`Sorry, it's wrong. :c`);
            }

        } catch (err) {
            message.channel.send("Time is up!!!");
        }



    }
}