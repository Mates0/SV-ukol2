// Převod z dvojkové soustavy do desítkové
const binaryNumber = "101010";
const decimalNumber = binaryToDecimal(binaryNumber);
function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            decimal += Math.pow(2, power);
        }
        power++;
    }
    return decimal;
}

console.log(decimalNumber);
