const ReimuClient = require('./Structures/ReimuClient');
const config = require('../config.json');

const client = new ReimuClient(config); 
client.login(); 