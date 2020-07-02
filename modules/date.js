const Discord = require('discord.js');
const fs = require('fs');

exports.default = class date {
    constructor(bot) {
        this.on = true;
        this.bot = bot;
    }


    async dateprofile(msg, args, client) {
        const argsParts = args.toString().split(/\s+/);
        let user = argsParts[0];


        if (user.includes('@'))
            if (user.includes('<'))
                if (user.includes('>'))
                    if (user.includes('!'))
                        user = user.replace('!', ' ');
        user = user.replace('>', ' ');
        user = user.replace('<', ' ');
        user = user.replace('@', ' ').trim();



        fs.readFile('./datingProfiles.json', 'utf-8', async (err, data) => {
            if (err) throw err;
            let profiles = JSON.parse(data);

            let datingProfile = profiles.profiles.find(profile => profile.id == user);

            if (datingProfile != undefined) {

                const member = await msg.guild.members.fetch(datingProfile.id);



                const embed = new Discord.MessageEmbed()
                    .setTitle(member.user.username)
                    .setThumbnail(`https://cdn.discordapp.com/avatars/${datingProfile.id}/${member.user.avatar}`)
                    .addFields({
                        name: '**Vorname/Spitzname:**',
                        value: datingProfile.name.toString()
                    }, {
                        name: '**Alter:**',
                        value: datingProfile.alter.toString()
                    }, {
                        name: '**Geschlecht:**',
                        value: datingProfile.geschlecht.toString()
                    }, {
                        name: '**Bundesland/Herkunft:**',
                        value: datingProfile.herkunft.toString()
                    }, {
                        name: '**Nationalität:**',
                        value: datingProfile.nationalitaet.toString()
                    }, {
                        name: '**Größe:**',
                        value: datingProfile.groesse.toString()
                    }, {
                        name: '**Augenfarbe:**',
                        value: datingProfile.augenfarbe.toString()
                    }, {
                        name: '**Haarfarbe:**',
                        value: datingProfile.haarfarbe.toString()
                    }, {
                        name: '**Blutgruppe:**',
                        value: datingProfile.blutgruppe.toString()
                    }, {
                        name: '**Beruf:**',
                        value: datingProfile.beruf.toString()
                    }, {
                        name: '**Hobbies/Interessen:**',
                        value: datingProfile.hobbies.toString()
                    }, {
                        name: '**Sachen die ich mag:**',
                        value: datingProfile.ilike.toString()
                    }, {
                        name: '**Sachen die ich nicht mag:**',
                        value: datingProfile.idontlike.toString()
                    }, {
                        name: '**Musikgeschmack:**',
                        value: datingProfile.musik.toString()
                    }, {
                        name: '**Lieblingswolkenform:**',
                        value: datingProfile.wolke.toString()
                    }, {
                        name: '**Interessiert an:**',
                        value: datingProfile.sexualitaet.toString()
                    }, {
                        name: '**Beziehungsstatus:**',
                        value: datingProfile.beziehungsstatus.toString()
                    }, {
                        name: '**Fetische:**',
                        value: datingProfile.fetisch.toString()
                    }, {
                        name: '**Lieblingsgetränk:**',
                        value: datingProfile.getraenk.toString()
                    }, {
                        name: '**Lieblingsserie/Film/Anime:**',
                        value: datingProfile.serie.toString()
                    }, {
                        name: '**Anzahl an Decken in meinem Bett:**',
                        value: datingProfile.decken.toString()
                    })

                msg.channel.send(embed);
            } else {
                msg.reply("Es wurde leider kein zugehöriges Profil gefunden. Erstelle doch eines! :)");
            }
        });



    }


    async deletedateprofile(msg, args, client) {
        const authorID = msg.author.id;

        fs.readFile('./datingProfiles.json', 'utf-8', async (err, data) => {
            if (err) throw err;
            let profiles = JSON.parse(data);

            let datingProfile = profiles.profiles.find(profile => profile.id == authorID);


            if (datingProfile != undefined) {
                profiles.profiles.splice(profiles.profiles.indexOf(datingProfile), 1);

                fs.writeFileSync('./datingProfiles.json', JSON.stringify(profiles), 'utf-8', (err) => {
                    if (err) throw err;
                });
            } else {
                msg.reply("es wurde kein zugehöriges Profil gefunden.");
                return;
            }

            msg.reply("dein Profil wurde erfolgreich gelöscht.");



        });
    }


    async updatedateprofile(msg, args, client) {

        const argsParts = args.toString().split(/\s+/);
        const channel = client.channels.cache.get(msg.channel.id);
        const datingFragen = [{
                Frage: 'was ist dein Vorname/Spitzname?',
                FLAG: 'NAME'
            },
            {
                Frage: 'wie alt bist du?',
                FLAG: 'ALTER'
            },
            {
                Frage: 'was ist dein Geschlecht?',
                FLAG: 'GESCHLECHT'
            },
            {
                Frage: 'aus welchem Bundesland(Herkunft) kommst du?',
                FLAG: 'HERKUNFT'
            },
            {
                Frage: 'was ist deine Nationalität?',
                FLAG: 'NATIONALITÄT'
            },
            {
                Frage: 'wie groß bist du?',
                FLAG: 'GRÖSSE'
            },
            {
                Frage: 'was ist deine Augenfarbe?',
                FLAG: 'AUGENFARBE'
            },
            {
                Frage: 'was ist deine Haarfarbe?',
                FLAG: 'HAARFARBE'
            },
            {
                Frage: 'welche Blutgruppe hast du?',
                FLAG: 'BLUTGRUPPE'
            },
            {
                Frage: 'was ist dein Beruf / Ausbildung / Studium oder Schulwerdegang?',
                FLAG: 'BERUF'
            },
            {
                Frage: 'was sind deine Hobbies?',
                FLAG: 'HOBBIES'
            },
            {
                Frage: 'welche Sachen magst du?',
                FLAG: 'ILIKE'
            },
            {
                Frage: 'welche Sachen magst du nicht?',
                FLAG: 'IDONTLIKE'
            },
            {
                Frage: 'beschreibe deinen Musikgeschmack!',
                FLAG: 'MUSIK'
            },
            {
                Frage: 'was ist deine Lieblingswolkenform?',
                FLAG: 'WOLKE'
            },
            {
                Frage: 'an welchem Geschlecht bist du interessiert? (Sexualität)',
                FLAG: 'SEXUALITÄT'
            },
            {
                Frage: 'was ist dein momentaner Beziehungsstatus?',
                FLAG: 'BEZIEHUNGSSTATUS'
            },
            {
                Frage: 'was sind deine Fetische?',
                FLAG: 'FETISCH'
            },
            {
                Frage: 'was ist dein Lieblingsgetränk?',
                FLAG: 'GETRÄNK'
            },
            {
                Frage: 'was ist deine Lieblingsserie / Film / Anime?',
                FLAG: 'SERIE'
            },
            {
                Frage: 'wie viele Decken hast du in deinem Bett?',
                FLAG: 'DECKEN'
            }
        ]


        msg.reply("im Folgenden werde ich dir ein paar persönliche Fragen stellen um dein Dating-Profile zu erstellen! Falls du eine Frage nicht beantworten willt, tippe bitte ein \"-\".");

        let neuesProfil = new user();

        for (let i = 0; i < datingFragen.length; i++) {
            msg.reply(datingFragen[i].Frage);
            try {
                let collected = await channel.awaitMessages(m => m.author === msg.author, {
                    max: 1,
                    time: 300000,
                    errors: ['time']
                });

                //WRITE TO OBJECT
                switch (datingFragen[i].FLAG) {
                    case 'NAME':
                        neuesProfil.name = collected.first().content.toString();
                        break;
                    case 'ALTER':
                        neuesProfil.alter = collected.first().content.toString();
                        break;
                    case 'GESCHLECHT':
                        neuesProfil.geschlecht = collected.first().content.toString();
                        break;
                    case 'HERKUNFT':
                        neuesProfil.herkunft = collected.first().content.toString();
                        break;
                    case 'NATIONALITÄT':
                        neuesProfil.nationalitaet = collected.first().content.toString();
                        break;
                    case 'GRÖSSE':
                        neuesProfil.groesse = collected.first().content.toString();
                        break;
                    case 'AUGENFARBE':
                        neuesProfil.augenfarbe = collected.first().content.toString();
                        break;
                    case 'HAARFARBE':
                        neuesProfil.haarfarbe = collected.first().content.toString();
                        break;
                    case 'BLUTGRUPPE':
                        neuesProfil.blutgruppe = collected.first().content.toString();
                        break;
                    case 'BERUF':
                        neuesProfil.beruf = collected.first().content.toString();
                        break;
                    case 'HOBBIES':
                        neuesProfil.hobbies = collected.first().content.toString();
                        break;
                    case 'ILIKE':
                        neuesProfil.ilike = collected.first().content.toString();
                        break;
                    case 'IDONTLIKE':
                        neuesProfil.idontlike = collected.first().content.toString();
                        break;
                    case 'MUSIK':
                        neuesProfil.musik = collected.first().content.toString();
                        break;
                    case 'WOLKE':
                        neuesProfil.wolke = collected.first().content.toString();
                        break;
                    case 'SEXUALITÄT':
                        neuesProfil.sexualitaet = collected.first().content.toString();
                        break;
                    case 'BEZIEHUNGSSTATUS':
                        neuesProfil.beziehungsstatus = collected.first().content.toString();
                        break;
                    case 'FETISCH':
                        neuesProfil.fetisch = collected.first().content.toString();
                        break;
                    case 'GETRÄNK':
                        neuesProfil.getraenk = collected.first().content.toString();
                        break;
                    case 'SERIE':
                        neuesProfil.serie = collected.first().content.toString();
                        break;
                    case 'DECKEN':
                        neuesProfil.decken = collected.first().content.toString();
                        break;
                }


            } catch (err) {
                console.log(err);
            }
        }

        //Save Object Into File

        neuesProfil.id = msg.author.id;
        neuesProfil.saveProfileToFile();

        msg.reply("Herzlichen Glückwunsch! Dein Dating-Profile wurde erfolgreich erstellt. :) ")


    }

}


class user {
    constructor(ID, NAME, ALTER, GESCHLECHT, HERKUNFT, NATIONALITÄT, GRÖSSE, AUGENFARBE, HAARFARBE, BLUTGRUPPE, BERUF, HOBBIES, ILIKE, IDONTLIKE, MUSIK, WOLKE, SEXUALITÄT, BEZIEHUNGSSTATUS, FETISCH, GETRÄNK, SERIE, DECKEN) {
        this.userID = ID;
        this.name = NAME;
        this.alter = ALTER;
        this.geschlecht = GESCHLECHT;
        this.herkunft = HERKUNFT;
        this.nationalitaet = NATIONALITÄT;
        this.groesse = GRÖSSE;
        this.augenfarbe = AUGENFARBE;
        this.haarfarbe = HAARFARBE;
        this.blutgruppe = BLUTGRUPPE;
        this.beruf = BERUF;
        this.hobbies = HOBBIES;
        this.ilike = ILIKE;
        this.idontlike = IDONTLIKE;
        this.musik = MUSIK;
        this.wolke = WOLKE;
        this.sexualitaet = SEXUALITÄT;
        this.beziehungsstatus = BEZIEHUNGSSTATUS;
        this.fetisch = FETISCH;
        this.getraenk = GETRÄNK;
        this.serie = SERIE;
        this.decken = DECKEN;
    }



    async saveProfileToFile() {

        fs.readFile('./datingProfiles.json', 'utf-8', (err, data) => {
            if (err) throw err;

            let profiles = JSON.parse(data);
            profiles.profiles.push(this);

            fs.writeFile('./datingProfiles.json', JSON.stringify(profiles), 'utf-8', (err) => {
                if (err) throw err;
            });
        });

    }
}

