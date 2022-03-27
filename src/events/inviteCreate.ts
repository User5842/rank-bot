import { Invite } from "discord.js";

import { IEvent } from "../interfaces/IEvent.interface";

/**
 * An event listener for the inviteCreate Discord.js event.
 */
module.exports = {
  execute(invite: Invite) {
    console.log(
      `User #${invite?.inviterId || "???"} created an invite ${
        invite?.code || "???"
      }.`
    );
  },
  name: "inviteCreate",
} as IEvent;
