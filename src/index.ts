import "dotenv/config";

import { Client, Intents } from "discord.js";

import { initializeEventHandlers } from "./utils/utils";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

initializeEventHandlers(client);

client.login(process.env.TOKEN).catch(console.error);
