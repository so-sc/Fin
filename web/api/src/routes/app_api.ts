

import express from 'express';

const router = express();

router.get("/", async(req, res) => {
    try {
        return res.status(200).json({success: true});
    }  catch (e) {
        console.log(`>${__filename}: ${e.message}`);
        return res.status(500).json({ success: false, message: "Something went wrong.." });
    }
})


export const App = router