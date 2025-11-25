require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({intents: [GatewayIntentBits]});

client.once("ready", () => {
    console.log("bot is ready");
})

client.login(process.env.DISCORD_BOT_TOKEN);