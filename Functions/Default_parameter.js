// Default Parameter

function interest(p, r = 5, y = 2) { // r and y are default value just beacuse if user does not pass the value of r and y in parameter so calculater will use default value of parameter
    return p * r * y / 100;
}

console.log(interest(1000, 10, 5));
console.log(interest(1000, 10));      // user does not pass the value of y