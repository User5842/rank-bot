import { IBase } from "./IBase.interface";

/**
 * Represents a user on Discord.
 */
export interface IUser extends IBase {
  /**
   * The user's id.
   */
  readonly id: string;

  /**
   * The username of the user.
   */
  readonly username: string;
}
