import { IEvent } from "../interfaces/IEvent.interface";
import InvitesService from "../utils/InvitesService";

module.exports = {
  execute() {
    console.log("Ready");
    InvitesService.updateInvites();
  },
  name: "ready",
  once: true,
} as IEvent;
