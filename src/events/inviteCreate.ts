import { Invite } from "discord.js";

import { IEvent } from "../interfaces/IEvent.interface";

module.exports = {
  execute(invite: Invite) {
    console.log(
      `User #${invite?.inviterId || "???"} created an invite ${
        invite?.code || "???"
      }.`
    );
    // TODO: Store these invites
  },
  name: "inviteCreate",
} as IEvent;
