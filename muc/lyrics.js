/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
    let songs = pars.join(" ").slice(22);
    let { body } = await superagent
        .get(`https://some-random-api.ml/lyrics?title=${songs}`);
    let eLyrics = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle(`Lyrics, HERE!`)
        .setURL(body.links.genius)
        .setDescription(`"${body.title}" -${body.author}`)
        .addField(`${body.lyrics}`, "[Lyric End]")
        .setThumbnail(`${body.thumbnail.genius}`)
        .setFooter("Powered by some-random-api.ml");
    input.channel.send(eLyrics);
}

module.exports.help = {
    name: "ly",
    description: "가사"
}