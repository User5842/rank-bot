//TODO: Store a cache of
// 1. Which invites codes were created by who
// 2. The current # of uses for each for invite code.

export default {
  updateInvites() {
    console.log("Syncing discord invites with database invites...");
    // TODO: Retrieve ALL invite code information from discord channel, and potentially sync it with the database, if
    //       not now, then at some point in the future, perhaps as a scheduled task or, at bare minimum, as part of the
    //       shutdown procedure for the server.
    console.log("Discord invites synced with database invites!");
  },
};
