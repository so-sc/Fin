

import express from 'express';
import { OnBoardingRegistration } from '../models/user';
import { OnBoardingRegister } from '../database/userDBWorker';
import { OTP } from '../workers/otp';

const router = express();

router.get("/register", async(req, res) => {
    try {
        var data: OnBoardingRegistration = req.body;
        var response = await OnBoardingRegister(data);
        if (response.success) {
            return res.status(200).json({success: true});
        }   
        return res.status(200).json({success: false, });
    }  catch (e) {
        console.log(`>${__filename}: ${e.message}`);
        return res.status(500).json({ success: false, message: "Something went wrong.." });
    }
})


router.get("/otp-verify", async(req, res) => {
    try {
        var data: any = req.body;
        var response = await OTP(data.PhNo);
        if (response.success) {
            return res.status(200).json({success: true});
        }   
        return res.status(200).json({success: false, });
    }  catch (e) {
        console.log(`>${__filename}: ${e.message}`);
        return res.status(500).json({ success: false, message: "Something went wrong.." });
    }
})


export const App = router