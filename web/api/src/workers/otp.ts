


export const OTP = async (PhNo: any) => {
    try {
        const client = require('twilio')(process.env.accountSid, process.env.authToken);
        const fromNumber = '+13237365750'; // Your Twilio phone number (formatted with country code)
        const toNumber = `+91${PhNo}`; // Recipient's phone number (formatted with country code)
        let otp = '';
        for (let i = 0; i < 4; i++) {
            otp += Math.floor(Math.random() * 10).toString();
        } 
        var msg = await client.messages.create({
            body: `Your OTP is: ${otp}. This code will expire in few minutes. Please do not share this OTP with anyone. Thank you.`,
            from: fromNumber,
            to: toNumber
        });
        if(msg.error){
            return { success: false, message: msg.error.message }
        } else {
            return { success: true, otp: otp }
        }
    } catch(e) {
        console.log(`>${__filename}: ${e.message}`);
        return { success: false }
    }
}