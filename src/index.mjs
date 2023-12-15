import { WebClient } from "@slack/web-api";
import { config } from "dotenv";
import cron from "node-cron";

config();
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);
const conversationID = process.env.CONVERSATIONID;

cron.schedule("21 11,15,19 * * 1,5", async () => {
  const result = await web.chat.postMessage({
    text: "@here porfavor, revisar los servidores .52 - .56 - .59 - .100",
    channel: conversationID,
  });
  console.log(
    `Successfully send message ${result.ts} in conversation ${conversationID}`
  );
  console.log(result);
});

//28 11,18 * * *

//0 11,15 * * 1,5
