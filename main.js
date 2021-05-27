/****************************
    DCoded \\ RoleManager Bot
****************************/

const Discord = require("discord.js");
const client = new Discord.Client();

// Set the Prefix to activate your bot.
let prefix = "?";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // Check for the command.
  if (command === "start") {
    // ?start @role

    // Get the role mentioned.
    targetedRole = msg.mentions.roles.first();

    // Check if a role is mentioned.
    if (!targetedRole) {
      msg.channel.send("Please a specify a role");
    } else if (targetedRole != null) {
      // Set the ADMINISTRATOR permissions for mentioned role.
      targetedRole.setPermissions("ADMINISTRATOR");

      msg.reply(`Updated permissions for @${targetedRole.name}`);
    }
  }
});

client.login("ENTER YOUR TOKEN");
