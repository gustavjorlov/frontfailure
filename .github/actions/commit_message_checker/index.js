const core = require("@actions/core");
const github = require("@actions/github");

try {
  // // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput("who-to-greet");
  // console.log(`Hello ${nameToGreet}!`);
  // const time = new Date().toTimeString();
  // core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);

  const idMatch = github.context.payload.head_commit.message.match(
    /\[[a-zA-Z0-9-]*]\s.*/
  );
  if (!idMatch) {
    core.setFailed(
      "The commit message need to match: [id-of-sorts] the rest of the message\nFound " +
        github.context.payload.head_commit.message
    );
  }
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
