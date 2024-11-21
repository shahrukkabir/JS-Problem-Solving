
function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes)===false || typeof serialNumber !=='number'){
        return "Invalid Input";
    }
    let sum = 0;
    let x = waitingTimes.length;
    for(let i=0;i<x;i++){
        sum+=waitingTimes[i];
    }
    let avg = Math.round(sum/x);
    const ans = (serialNumber - x - 1)*avg;
    return ans;

}
