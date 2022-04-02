import { GuildMember } from "discord.js";

import { IEvent } from "../interfaces/IEvent.interface";
import InvitesService from "../utils/InvitesService";

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
    InvitesService.updateInvites();
  },
  name: "guildMemberAdd",
} as IEvent;
