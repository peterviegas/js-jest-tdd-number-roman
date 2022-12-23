function romanNumber(number) {

    //if 3001, 0 AND -15 in Roman = null
    if (number > 3000 || number < 1) {
        return null
    } else {
        //Define the const
        //Unit
        const romanUnit = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        //Decimal
        const romandecimal = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
        //Hundred
        const romanhundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
        //Thousand

        //Create a initial storage copyin unti 1-9
        const romanNumbers = [...romanUnit];

        //Add the decimal letters (decimal + unit) 1-99
        for (const f in romandecimal) {
            romanNumbers.push(romandecimal[f]);
            for (const s in romanUnit) {
                romanNumbers.push(romandecimal[f] + romanUnit[s]);
            }
        }

        //Create auxiliar variable to store 1-99
        const romanNumbersAux = [...romanNumbers];

        //Add the hundred letters (hudred + decimal + unit) 1-999
        for (const f in romanhundred) {
            romanNumbers.push(romanhundred[f]);
            for (const s in romanNumbersAux) {
                romanNumbers.push(romanhundred[f] + romanNumbersAux[s]);
            }
        }



        //Add the thousand letters (thousand + hudred + decimal + unit) 1-3000

        //retur result

        return romanNumbers[number - 1];
    }
}
module.exports = romanNumber;