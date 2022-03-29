import { GuildMember } from "discord.js";

import { IEvent } from "../interfaces/IEvent.interface";

/**
 * An event listener for the guildMemberAdd Discord.js event.
 */
module.exports = {
  execute(member: GuildMember) {
    console.log(
      `New User Joined!\nid: ${member?.user?.id || "???"} nickname: ${
        member?.user?.username || "???"
      }.`
    );
  },
  name: "guildMemberAdd",
} as IEvent;
