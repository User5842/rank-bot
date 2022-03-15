/**
 * Represents a data model that is identifiable by a Snowflake (i.e. Discord API data models).
 * @see {@link https://discord.js.org/#/docs/discord.js/stable/class/Base}
 */
export interface IBase {
  /**
   * The client that instantiated this.
   */
  readonly client: Record<string, never>;
}
