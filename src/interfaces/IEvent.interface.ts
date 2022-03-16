/**
 * Represents a Discord event handler.
 */
export interface IEvent {
  /**
   * The method to execute when handling the event.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly execute: (...data: any) => void;

  /**
   * The event name.
   */
  readonly name: string;

  /**
   * Whether or not to add a one-time listener function for the event named `name`.
   */
  readonly once?: boolean;
}
