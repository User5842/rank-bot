# rank-bot

This bot will eventually create a ranking system for the [leetcode_reddit](https://discord.gg/B45J8HKNth) Discord server.

![rank-bot v1 diagram][]

[rank-bot v1 diagram]: images/rank-bot.drawio.png

- [x] Output message events gathered from the server.
- [ ] Filter based on pre-defined events (e.g., reactions, responses, replies).

## Getting Started

> Without a valid token, you won't be able to log in and run the application. If you want to collaborate, join the server using the above link and speak with the server owner or moderator.

1. Install dependencies using `npm i`.
2. Create your own `.env` environment file at the root of the project, and add your Discord token:

> TOKEN=\<Paste Discord token here\>

3. Run the `build` script.
4. Run the `dev` script, which will run the `mon` and `watch` scripts, allowing TypeScript files to automatically be re-transpiled and nodemon to restart based on file changes.
5. Profit 💰💰💰