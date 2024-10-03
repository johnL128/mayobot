module.exports = {
    name:'ping',
    description: 'Shouws user bot ping',
    async execute(message, args, cmd, client, Discord){
        message.channel.send(':globe_with_meridians: Ching Chong Ching Chong, Checking my ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#0000ff')
            .setTitle(`MayoBot's Ping`)
            .setDescription(` `)
            .addFields (
                {name: 'Latency :signal_strength:', value: `**${ping}ms**`}
            )
            message.channel.send(newEmbed);
        })
    }
}