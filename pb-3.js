function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    } 
    else {
        const x = name.length;
        for (let i = 0; i < x; i++) {
            if (name[i] >= '0' && name[i] <= '9') {
                return true; 
            }
        }
        return false; 
    }
}


