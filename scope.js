let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    console.log(result);
    if(result > 9){
        const mood = "happy"
        console.log(mood);
    }
    //console.log(mood);
    return result;
}

const output = sum(3, 7);
console.log(output);
