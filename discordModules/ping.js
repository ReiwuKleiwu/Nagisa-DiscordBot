exports.default = class ping {
    constructor(bot) {
      this.on  = true;
      this.bot = bot;
    }

    pingReply(msg)
    {
        console.log('Pong!');
        msg.reply('Pong!');
    }
}