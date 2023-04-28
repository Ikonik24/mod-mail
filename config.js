module.exports = {
  Client: {
    TOKEN: "" || process.env.TOKEN, // Your bot's TOKEN. Please use this only in VISUAL STUDIO CODE, not in REPLIT. [OPTIONAL]
    ID: "" || process.env.ID// Your bot's ID. [REQUIRED]
  },

  Handler: {
    GUILD_ID: "", // Your guild/server ID where you want the mails will be created. [REQUIRED]
    CATEGORY_ID: "" // Custom category ID where you want the mails will be created on. You can use /setup slash command to create a category without using this variable.
  },

  Modmail: {
    INTERACTION_COMMAND_PERMISSIONS: ['Administrator'], // The permissions for the slash commands that admins/server managers can access only. [REQUIRED]
    MAIL_MANAGER_ROLES: [''], // The roles for the category where moderators can manage mails.
    MENTION_MANAGER_ROLES_WHEN_NEW_MAIL_CREATED: false // If this is "true": When a mail created, all the MANAGER_ROLES will be pinged. Else, if "false": It doesn't ping the roles.
  }
};

/*
* DiscordJS-V14-ModMail-Bot
* Yet Another Discord ModMail Bot made with discord.js v14, built on Repl.it and coded by TRXCORE TEAM https://discord.gg/trxcore.
* Developer: TRXCORE TEAM https://discord.gg/trxcore
* Support server: dsc.gg/codingdevelopment
* Please DO NOT remove these lines, these are the credits to the developer.
* Sharing this project without giving credits to TrxCore Team ends in a Copyright warning. (©)
*/
