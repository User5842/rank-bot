import { IBase } from "./IBase.interface";
import { IUser } from "./IUser.interface";

/**
 * Represents a member of a guild on Discord.
 * @see {@link https://discord.js.org/#/docs/discord.js/stable/class/GuildMember}
 */
export interface IGuildMember extends IBase {
  /**
   * The member's id.
   */
  readonly id: string;

  /**
   * The user that this guild member instance represents.
   */
  readonly user: IUser;
}
