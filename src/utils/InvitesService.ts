import { Collection, Guild, Invite } from "discord.js";

import DiscordClientInstance from "./DiscordClientInstance";

/**
 * A service to abstract away user invite statistics tracking.
 */
export default {
  /**
   * Update the database using all the current invites available from Discord for all Guilds the bot is a member of.
   */
  updateInvites() {
    DiscordClientInstance.guilds.cache.forEach(
      (guild) => void this.updateGuildInvites(guild)
    );
  },
  /**
   * Update the database using all the current invites available from Discord for a given Guild.
   *
   * @param guild The Guild with the invites to be updated.
   */
  async updateGuildInvites(guild: Guild) {
    console.log(`Updating all invites for guild ${guild.name}`);
    try {
      const invites: Collection<string, Invite> = await guild.invites.fetch({
        cache: false,
      });
      //TODO: Add current invite statistics into the database.
      console.log(
        `Updated ${invites.size} active invites for guild ${guild.name}`,
        invites
      );
    } catch (err) {
      console.error(`Failed to update invites for guild ${guild.name}:\n`, err);
    }
  },
};
