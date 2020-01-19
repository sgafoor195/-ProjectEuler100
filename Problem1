//Calculates sum of all multiples of 3 and 5 below the value of 'num'
function SumOfMultiples(num) {
    const maxArr = Array.from(Array(num).keys()).slice(1);
    let result = 0;
    
    maxArr.forEach(element => {
        if(element % 3 === 0 || element % 5 === 0) {
            result += element;
        }
    });

    return result;
}