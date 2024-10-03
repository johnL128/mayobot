module.exports = {
    name: 'info',
    description: "this checks the bot version",
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle('**About MayoBot**')
        .setDescription(' ')
        .addFields(
            {name: 'Current Version', value: 'v1.0.0A' },
            {name: 'Last Updated', value: '21/07/2021' },
        )
        .setFooter('Created - 18/07/2021');

        message.channel.send(newEmbed);
    }
}