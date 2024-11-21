
function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
    const testScore = 50;
    const schoolGrade = 30;
    const ifFarmer = 20;

    let finalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily ===true){
        finalScore+=ifFarmer;
    }
    if(finalScore>=80){
        console.log("true");
        return true;
    }
    else{
        return false;
    }
}
