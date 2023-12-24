import { WebClient } from "@slack/web-api";
import { config } from "dotenv";
import cron from "node-cron";

config();
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);
const conversationID = process.env.CONVERSATIONID;

cron.schedule("1 11,13,15 * * 1,2,3,4,5,6,7", async () => {
  const result = await web.chat.postMessage({
    text: "<!here>, Hey ! please check the following server (.50 .52 .56 .100) for any agent that is running longer than it should be 😊👌🐱‍🚀",
    channel: conversationID,
  });
  console.log(
    `Successfully send message ${result.ts} in conversation ${conversationID}`
  );
  console.log(result);
});
