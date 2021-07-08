const core = require("@actions/core");
const exec = require("@actions/exec");

async function run() {
  try {
    // Validate action
    if (
      !core.getInput("action")
    ) {
      throw new Error("action missing or in the wrong format.");
    }

    const action = core.getInput("action");
    console.log(`Action: ${action}`);
    // Execute build.sh
    await exec.exec(`bash ${__dirname}/../build.sh ${action}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();