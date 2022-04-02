import { IEvent } from "../interfaces/IEvent.interface";
import InvitesService from "../utils/InvitesService";

/**
 * An event listener for the ready Discord.js event.
 */
module.exports = {
  execute() {
    console.log("Ready");
    InvitesService.updateInvites();
  },
  name: "ready",
  once: true,
} as IEvent;
