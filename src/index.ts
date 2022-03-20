import "dotenv/config";
import DiscordClientInstance from "./utils/DiscordClientInstance";
import { initializeEventHandlers } from "./utils/utils";

initializeEventHandlers(DiscordClientInstance);

DiscordClientInstance.login(process.env.TOKEN).catch(console.error);
