function SumOfEvenNumbers(num){
    const fibArr = [1,2];
    let result = 2;

    for(let i = 2; i < num; i++){
        let prevOne = fibArr[i-1];
        let prevTwo = fibArr[i-2];
        let latestNum = prevOne + prevTwo;
        fibArr.push(latestNum);
        
        if(latestNum >= 4000000){
            break;
        }

        if(latestNum % 2 === 0){
            result += latestNum;
        }
    }
    return result;
}

SumOfEvenNumbers(4000000); //returns 4613732
