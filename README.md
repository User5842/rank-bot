# rank-bot

This bot will eventually create a ranking system for the [leetcode_reddit](https://discord.gg/B45J8HKNth) Discord server.

![rank-bot v1 diagram][]

[rank-bot v1 diagram]: images/rank-bot.drawio.png

- [x] Output message events gathered from the server.
- [ ] Filter based on pre-defined events (e.g., reactions, responses, replies).

## Getting Started

### Prerequisites

1. **Discord API Token**

   > Without a valid token, you won't be able to log in and run the application. See [here](https://www.writebots.com/discord-bot-token/) for a good tutorial on how to obtain this token.

2. **AWS Access Key ID** and **AWS Secret Access Key**

   > Without an AWS access key ID and and secret access key, the connection to DynamoDB will be blocked. See [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html) for instructions on how to set up your own IAM user in AWS to obtain these credentials for your own DynamoDB connection.

If you want to collaborate, we may be interested in working with you to get you these credentials in service of a common goal. Please join the server using the above link and speak with the server owner or moderator.

### Installation

1. Install dependencies using `npm i`.
2. Create your own `.env` environment file at the root of the project, and add your keys:

   ```
   TOKEN=<Paste Discord API token here>
   AWS_ACCESS_KEY_ID=<Paste AWS Access Key ID here>
   AWS_SECRET_ACCESS_KEY=<Paste AWS Secret Access Key here>
   ```

3. Run the `build` script.
4. Run the `dev` script, which will run the `mon` and `watch` scripts, allowing TypeScript files to automatically be re-transpiled and nodemon to restart based on file changes.
5. Profit 💰💰💰
