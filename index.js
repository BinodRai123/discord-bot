require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { GoogleGenAI } = require("@google/genai"); 
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const  ImageGenerator = async () => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    prompt: "generate a banana with a ice-cream on it"
  })

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync("gemini-native-image.png", buffer);
      console.log("Image saved as gemini-native-image.png");
    }
  }
}

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
  console.log(message.attachments);
  const bot = message.author.bot;
  if (bot) return;

    message.reply("hello how can i help you today ?");
  
});



client.login(process.env.DISCORD_BOT_TOKEN);
