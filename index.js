require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("bot is ready");
});

client.on("messageCreate", (message) => {
  // console.log(`${message.author.username} send message -> ${message.content}`);
  const bot = message.author.bot;
  if (bot) return;

    message.reply("hello how can i help you today ?");
  
});

client.login(process.env.DISCORD_BOT_TOKEN);
