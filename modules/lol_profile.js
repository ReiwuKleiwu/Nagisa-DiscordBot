const Discord = require('discord.js');
const moment = require('moment');

const profileIconURL = 'http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/'

const {
    Kayn,
    REGIONS
} = require('kayn')
const kayn = Kayn('RGAPI-3e046baf-7555-421e-b0d0-69d90c85d424')({
    region: REGIONS.EUROPE_WEST,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'en_US',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})

exports.default = class league_profile {
    constructor(bot) {
        this.on = true;
        this.bot = bot;
    }

    async league_profile(msg, args, client) {

        let account;
        let entries;
        let championMasteries; 



        try {
            account = (await kayn.Summoner.by.name(args));
            entries = (await kayn.League.Entries.by.summonerID(account.id));
            championMasteries = (await kayn.ChampionMastery.list(account.id));
        } catch (err) {
            console.log(err);
        }

        console.log(championMasteries[0]);
        //let champion = await kayn.DDragon.Champion.getDataById('Jhin');
        let champions = await kayn.DDragon.Champion.listDataByIdWithParentAsId();

        console.log(champions.data[championMasteries[0].championId].name);
      

        const embed = new Discord.MessageEmbed()
            .setTitle(account.name)
            .setThumbnail(profileIconURL + `${account.profileIconId}.png`)
            .addFields({
                name: '**Last activity:**',
                value: moment(account.revisionDate).format('MMMM Do YYYY, h:mm:ss a')
            }, {
                name: 'Level:',
                value: account.summonerLevel
            }, {
                name: 'Rank:',
                value: entries[0] != undefined ? (entries[0].tier + ' ' + entries[0].rank + ' ― ' + entries[0].leaguePoints + ' LP') : 'This player has no rank yet.'
            },
            {
                name: 'Wins:',
                value: entries[0].wins,
                inline: true
            },
            {
                name: 'Losses:',
                value: entries[0].losses,
                inline: true
            },
            {
                name: 'Winrate:',
                value: ((entries[0].wins / (entries[0].losses + entries[0].wins) * 100).toFixed(2).toString() + '%'),
                inline: true
            },
            {
                name: 'Most played champions:',
                value: champions.data[championMasteries[0].championId].name + ' ― ' + championMasteries[0].championPoints + '\n' +
                       champions.data[championMasteries[1].championId].name + ' ― ' + championMasteries[1].championPoints + '\n' +
                       champions.data[championMasteries[2].championId].name + ' ― ' + championMasteries[2].championPoints
            })
            .attachFiles([`./modules/rankImages/${entries[0].tier.toLowerCase()}.png`])
            .setImage('attachment://' + `${entries[0].tier.toLowerCase()}.png`)




        msg.channel.send(embed);










    }



}