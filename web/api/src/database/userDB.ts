
import { OnBoardingRegistration } from "../models/user";
import mongo from "mongoose";


export const onBoarding = new mongo.Schema<OnBoardingRegistration>({
    name: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: true
    }, 
    gender: {
        type: Number,
        require: true
    }, 
    living: {
        type: Number,
        require: true
    }, 
    disabled: {
        type: Number,
        require: true
    }, 
    PhNo: {
        type: String,
        require: true
    }, 
    finExp: {
        type: Number,
        require: true
    }
},{
    collection: "onboarding",
})