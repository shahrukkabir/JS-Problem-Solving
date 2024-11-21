
function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || income<expenses){
        return "Invalid Input";
    }
    else{
        let x = income-expenses;
        let y = x * (20/100);
        return y;
    }
}
