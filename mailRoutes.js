const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'smonusinghal1998@gmail.com',
    pass: 'Asdfg@asdfg'
    }
});

router.post('/text-mail', (req, res) => {
    const {to, subject, text} = req.body;
    const mailData = {
        from: "smonusinghal1998@gmail.com",
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our First mail using nodeMailer <br/>'
    };

    transporter.sendMail(mailData, (error, info) => {
        if(error)
            return console.log(error);
        else   
            res.status(200).send({
                message: "Mail Send Successfully!!", 
                message_id: info.message_id
            });
    });
});

router.post('/attachments-mail', (req, res) => {
    const {to, subject, text} = req.body;
    const mailData = {
        from: "smonusinghal1998@gmail.com",
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our First mail using nodeMailer <br/>',
        attachments: [
            {
                filename: "Pavan.jpg",
                path: "assests\\Pavan.jpg"
            }
        ]
    };

    transporter.sendMail(mailData, (error, info) => {
        if(error)
            return console.log(error);
        else   
            res.status(200).send({
                message: "Mail Send Successfully!!", 
                message_id: info.message_id
            });
    });
});

router.get('/hello', (req, res) => {
    res.status(200).send({success: "Hello World!!"});
});

module.exports = router;
