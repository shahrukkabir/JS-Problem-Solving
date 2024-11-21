
function sendNotification(email) {
    if(email.includes('@')===false){
        return "Invalid Email";
    }
    const gmail = email.split('@');
    const userName = gmail[0];
    const domainName = gmail[1];
    const notification = userName + " sent you an email from " + domainName;
    return notification;
}