
//jshint esversion:6

const fs = require('fs');

var mustDeletedList = fs.readFileSync('mustDeletedList.txt', 'utf-8');
mustDeletedList  = mustDeletedList.toString().split("\r\n");

console.log(mustDeletedList);

var sentence = "teşekkür\naçığa aldığım bileti iptal etmek istiyorum\naçığa aldığım bilet kuponumun iade alabilir miyim lütfen?\nbilet iade hakkında bilgi almak.\naçığa alınmış uçak bilet vardı onun iptal iade işlemini yapmak istiyorum\nbilet alırken iptal işlemi için ödeyeceğim tutarı öğrenmek istiyorum. yardımcı olursanız sevinirim.\nbilet ücretini iade edebiliyormusunuz\npara iade işlemi\nselam iade işlemini gerçekleştirmek istiyorum\nkupon kodumun iade almak istiyorum\nkupon kodunuzun iade\nkupon kodu iade\niptal süreci";

var replaced = sentence;

var regex = new RegExp("[!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]","g");
replaced = replaced.replaceAll(regex, "");

for (let i=0; i<mustDeletedList.length; i++) {
    regex = new RegExp(mustDeletedList[i],"g");
    replaced = replaced.replaceAll(regex, "");
};


console.log(replaced);