/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");
const superagent = require("superagent");

module.exports.run = async (mu, input, pars) => {
	superagent.get("https://api.myjson.com/bins/183xhk").then((res) => {
		let UsersCoin = res.body;

  let coinAmt = Math.floor(Math.random() * (3)) + 0; // 코인 종류
  let coinResult = Math.floor(Math.random() * (3)) + 0; // 동전던지기 결과
  let coinMent1; // 코인 결과의 따른 멘트
  let coinMent2; // ..
  let coinAmtMent; // 코인 종류의 따른 멘트
  
  if (coinAmt === 0) {
      coinAmtMent = 1;
  } else if (coinAmt === 1) {
      coinAmtMent = 10;
  } else if (coinAmt === 2) {
      coinAmtMent = 100;
  } else if (coinAmt === 3) {
      coinAmtMent = 1000;
  }

  coinMent1 = `주머니에서 ${coinAmtMent} MUC 동전을 꺼내 돌렸다뮤!`;

  if (coinResult === 0) {
      coinMent2 =`결과는.... 앞이였다뮤! [+${coinAmtMent * 2} MUC]`;
      UsersCoin[input.author.id] = {
          UsersCoin: UsersCoin[input.author.id].UsersCoin + (coinAmtMent * 2)
      };
  } else if (coinResult === 1) {
      coinMent2 = `결과는... 뒷면이였다뮤... [-${coinAmtMent / 2} MUC]`;
      UsersCoin[input.author.id] = {
          UsersCoin: UsersCoin[input.author.id].UsersCoin - (coinAmtMent / 2)
      };
  } else if (coinResult === 2) {
      coinMent2 = `결과는... 어어엇! 하수구에 빠트렸다뮤.... [-${coinAmtMent} MUC]`;
      UsersCoin[input.author.id] = {
          UsersCoin: UsersCoin[input.author.id].UsersCoin - coinAmtMent
      };
  } else if (coinResult === 3) {
      coinMent2 = `결과는... 에엣? 섯다뮤~! [+0 MUC, -0 MUC]`;
  }
  superagent.put("https://api.myjson.com/bins/183xhk").send(UsersCoin).catch((err) => console.log(err));
  let coinFlipEmb = new API.RichEmbed()
  .setTitle(coinMent1)
  .setAuthor(input.author.username)
  .setColor(randomHexColor())
  .setDescription(coinMent2);
  input.channel.send(coinFlipEmb);

});
};

module.exports.help = {
  name: "동전던지기",
  description: "동전"
};
