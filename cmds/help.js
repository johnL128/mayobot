module.exports = {
    name: 'help',
    aliases: ['h'],
    description: "this is a help command",
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('**Commands**')
        .setDescription('Below are the list of commands that you can do with the Bot')
        .addFields(
            {name: '!help', value: 'Shows all commands that can be executed' },
            {name: '!ping', value: 'Checks MayoBot Ping' },
            {name: '!info', value: 'About the Bot and current features'},
            {name: '!play', value: 'Plays a song of choice'},
            {name: '!skip', value: 'Skips the song, can **disconnect bot** if theres no songs in the queue'},
            {name: '!dc', value: 'Disconnects Bot'},
        )
        .setFooter('More features soon, thanks for adding this Bot :)');

        message.channel.send(newEmbed);
    }
}