import { IEvent } from "../interfaces/IEvent.interface";

module.exports = {
  execute() {
    console.log("Ready");
  },
  name: "ready",
  once: true,
} as IEvent;
