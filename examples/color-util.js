"use strict";
/** @format */
exports.__esModule = true;
// To convert color values one into another
/**
 * Ex :  rgb(220, 20, 60)
 *
 *  First Value
        Take the first number, 220, and divide by 16. 220 / 16 = 13.75, which means that the first digit of the 6-digit hex color code is 13, or D.
        Take the remainder of the first digit, 0.75, and multiply by 16. 0.75 (16) = 12, which means that the second digit of the 6-digit hex color code is 12, or C.
        So far, we have #DC____.

    ... and so on.
 */
function rgbToHex(R, G, B) {
    var hexCode = '#';
    hexCode += decToHex(R);
    hexCode += decToHex(G);
    hexCode += decToHex(B);
    return hexCode;
}
var decToHex = function (dec) {
    var hex = '';
    var quo = dec / 16;
    var rem = dec % 16;
    hex += parseInt(quo + '').toString(16);
    hex += (rem * 16).toString(16);
    return hex;
};
var hexToDec = function (code) {
    var num1 = parseInt(code[0], 16);
    var num2 = parseInt(code[1], 16);
    return num1 * 16 + num2;
};
function hexToRgb(hex) {
    return {
        r: hexToDec(hex.substring(1, 3)),
        g: hexToDec(hex.substring(3, 5)),
        b: hexToDec(hex.substring(5, 7))
    };
}
console.log(rgbToHex(32, 0, 0));
console.log(hexToRgb('#200000'));
