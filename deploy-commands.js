const { REST, Routes } = require('discord.js')

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN } = process.env

const fs = require("node:fs")
const path = require("node:path")
const commandPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith(".js"))

const commands = []

for (const file of commandFiles){
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({version: "10"}).setToken(TOKEN);

(async () => {
    try{
        console.log(`Resetando ${commands.length} commands`)

        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
            console.log("resgistrado")
    }
    catch(error){
        console.error(error)
    }
})();

