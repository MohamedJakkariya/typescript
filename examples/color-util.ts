/** @format */

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

function rgbToHex(R: number, G: number, B: number): string {
	let hexCode = '#';
	hexCode += decToHex(R);
	hexCode += decToHex(G);
	hexCode += decToHex(B);
	return hexCode;
}

const decToHex = (dec: number): string => {
	let hex = '';
	const quo = dec / 16;
	let rem = dec % 16;
	hex += parseInt(quo + '').toString(16);
	hex += (rem * 16).toString(16);
	return hex;
};

const hexToDec = (code: string): number => {
	let num1 = parseInt(code[0], 16);
	let num2 = parseInt(code[1], 16);

	return num1 * 16 + num2;
};

export type hexType = {
	r: number;
	g: number;
	b: number;
};

function hexToRgb(hex: string): hexType {
	return {
		r: hexToDec(hex.substring(1, 3)),
		g: hexToDec(hex.substring(3, 5)),
		b: hexToDec(hex.substring(5, 7)),
	};
}

console.log(rgbToHex(32, 0, 0));
console.log(hexToRgb('#200000'));
