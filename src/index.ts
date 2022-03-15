import "dotenv/config";

import { Client, Intents, Message } from "discord.js";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => console.log("Ready"));

client.on("messageCreate", (message: Message) => {
  if (message.channel.isText()) {
    console.log(`Message ${message.content} created in ${message.channel.id}`);
  }
});

client.login(process.env.TOKEN).catch(console.error);
