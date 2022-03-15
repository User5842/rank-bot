import { Message } from "discord.js";

import { IEvent } from "../interfaces/IEvent.interface";

const participationScore: Record<string, number> = {};

module.exports = {
  execute(message: Message) {
    if (message.channel.isText()) {
      const { id, username } = message.author;

      if (participationScore[id] === undefined) {
        participationScore[id] = 0;
      }

      participationScore[id] += 1;

      console.log(
        `${username} wrote ${message.content} in ${message.channel.toString()}`
      );
      console.log(`Current scores are: ${JSON.stringify(participationScore)}`);
    }
  },
  name: "messageCreate",
} as IEvent;
