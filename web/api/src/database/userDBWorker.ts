import mongo from "mongoose";
import { OnBoardingRegistration } from "../models/user";
import { onBoarding } from "./userDB";

export const OnBoarding = mongo.model('onboarding', onBoarding);

export const OnBoardingRegister = async (data: OnBoardingRegistration) => {
    try {
        const register = new OnBoarding(data);
        const info = await register.save();
        return { success: true }
    } catch (e) {
        console.log(`>${__filename}: ${e.message}`);
        return { success: false }
    }
}
