/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
    let say = pars.join(" ").slice(0);
	let result = Number(say).toString(16).substring(0, 15);
	if (Number(say).toString(16).substring(15)) {
		let BinError = new API.RichEmbed()
			.setColor("#ff0000")
			.setTitle("OverFlowed!");
		input.channel.send(BinError);
	} else {
		let hexEmb = new API.RichEmbed()
		.setColor(randomHexColor())
		.setTitle(result)
		.setDescription("Decimal to Hexadecimal\n10진수를 16진수로 변환함");
		input.channel.send(hexEmb);
	}
};

module.exports.help = {
    name: "16진수"
};
