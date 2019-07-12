const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "KOBIeayKqh5UXNpOMyOUAry4WK1NjopjukFokAnkssXYpiKJki1TFi-JQTkBN45n1L2eHAX1WpuB-k1Oc7Zq9mn-MRPDHEHdu9-jKRVreXZ04ZG9cnu7HTzWVkNMqqcYcs--qny623yEVsScDOb-aJ8QAIDWlsCASshp4BD_GoqkX25ml7T5bNB3lu5aMkxlQVmdcnhX3B_OqlSZJmeWi24ydyAkuqFvOJAES4gPuu-HQPVzJk-QcVF7zYJOfUEXLA6T5N14i9Z4N6X8366R6NV8rPpNY2861QAjIyKQvpF_FtxskytWJ_oPMIukpy940NwbUWjusik4_rSqKR0VoQ");
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};