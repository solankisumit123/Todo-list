var user = require("../models/admin");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



exports.create_admin = async (req, res) => {
    var admin_email = await user.find({ email: req.body.email });
    var pass = await bcrypt.hash(req.body.password, 10)
    req.body.password = pass

    if (admin_email == 0) {
        var data = await user.create(req.body);
        res.status(200).json({
            message: "Admin created successfully..!",
            data
        })
    }
    else {
        res.status(200).json({
            message: "Email Id Exist Try Another One..!",
        })
    }
}

exports.login_admin = async (req, res) => {
    var data = await user.find({ email: req.body.email });
    var user_pass = req.body.password

    if (data.length == 1) {
        bcrypt.compare(user_pass,data[0].password, async function (error, result) {
            if (result) {
                res.status(200).json({
                    status: "Login Success!"
                })
            }
            else {
                res.status(200).json({
                    status: "Invalid Email Or Password"
                })
            }
        });
    } else {
        res.status(200).json({
            status: "Check Your Email And Password..!"
        })
    }

}


exports.get_admin = async (req, res) => {
    var data = await user.find();
    res.status(200).json({
        message: "Admin Data Found..!",
        data: data
    })
}

exports.admin_logout = async (req, res) => {
    res.status(200).json({
        status: "Logout Success!"
    })
}
