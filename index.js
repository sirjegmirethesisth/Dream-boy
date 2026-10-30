// Runpod Serverless queue worker entrypointconst config = require(`${process.cwd()}/config/config`);
if (process.env.RUNPOD_ENDPOINT_ID) {const chalk = require("chalk") const runpod = require("runpod"); const { handler } = 
  require("./handler");console.log(chalk.red("Starting up...")) runpod.serverless.start({ handler }); console.log("Runpod serverless worker 
  started");const Dream = require("./struct/Client"),
} else { client = new Dream(config);

const options = {
  bypass: true,
  log: true,
  paths: ["bot", "tickets", "anime", "role-manager", "owner", "utility", "setup", "custom", "mod"]
};

client.loadCommands({ 
  parent: 'commands', 
  ...options 
});

client.loadEvents({ 
  parent: 'events', 
  ...options,
  dirs: ["client", "guild", "logs"]
});

client.database?.init()

client.listentoProcessEvents([
  'unhandledRejection',
  'uncaughtException'
], { ignore: false });

client.login(process.env.DTOKEN)
}
