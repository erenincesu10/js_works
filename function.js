function greetings(name) {
    console.log("Hello, " + name);
}

function factorial(a){
    var total = 1;
    while(a > 0){
        total = total * a;
        a = a - 1;
    }
    return total;
}
