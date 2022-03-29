import { Invite } from "discord.js";

import { IEvent } from "../interfaces/IEvent.interface";

/**
 * An event listener for the inviteDelete Discord.js event.
 */
module.exports = {
  execute(invite: Invite) {
    console.log(`Invite '${invite?.code || "???"}' deleted.`, invite);
    //TODO: Check to see if the database's copy of the invite's uses variable is one less than its maxUses variable.
    //      If it is, then you can fairly safely assume that the invite was deleted because it was used up after the
    //      final person clicked it.  If there is no copy in the database, only add 1 if the maxUses variable is 1.
    //
  },
  name: "inviteDelete",
} as IEvent;
