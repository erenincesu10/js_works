function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4;

    const firstDecimal = 4.0;
    
    const firstString = 'Hello ';
    
    
    console.log(firstInteger+Number(secondInteger));
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    Number(secondDecimal);
    console.log(firstDecimal+Number(secondDecimal))
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString+secondString);
}


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}

//input
//4
//4.0
//"World!"
//result
//8
//8.0
//"Hello World!"
