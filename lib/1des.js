/**
 * Created by foxtail on 16/11/15.
 */
var chars       = " -_.abcdefghijklmnopqrstuvwxyz1234567890";
var flipped     = " -_'ɐqɔpǝɟɓɥıɾʞlɯuodbɹsʇnʌʍxʎz⇂zƐㄣϛ9ㄥ860";

var cryptojs = require('crypto-js')

function flip(name) {
    return name.toLowerCase()
        .split('')
        .reverse()
        .join('')
        .replace(/./g, function(a) {
            var i = chars.indexOf(a);
            return i != -1?  flipped[i]
                :      /* _ */   '';
        });
}


var encode = function(string,key){
    if(!string){string='you are a';}
    if(!key){key='shabby';}


    retrurn(flip(str));

}

var decode = function(string,key){
    if(!string){return;}
    l1 = string.length;
}


module.exports ={
    encode: encode,
    decode: decode
}

