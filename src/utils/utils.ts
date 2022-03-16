import { Client } from "discord.js";

import { readdirSync } from "fs";
import { resolve } from "path";

import { IEvent } from "../interfaces/IEvent.interface";

/**
 * Get a list of event files from the events directory.
 * @returns {string[]} A list of event files.
 */
const getEventFiles = (): string[] =>
  readdirSync(resolve(__dirname, "..", "events"));

/**
 * For each event type, initializes its event handler.
 * @param client The Discord client.
 */
export const initializeEventHandlers = (client: Client<boolean>) => {
  const eventFiles = getEventFiles();

  for (const file of eventFiles) {
    const event = require(resolve(__dirname, "..", "events", file)) as IEvent;
    if (event.once) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
};
