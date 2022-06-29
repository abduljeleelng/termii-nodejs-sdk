require('dotenv').config();
const Termii = require("termii-nodejs-sdk").default

let api_key = process.env.API_KEY

let termii = new Termii(api_key);
//request for the sender Id
termii.requestSenderId({sender_id:"",usecase:"",company:""}).then(data=>{console.log({data})}).catch(err=>{console.log({err})})

//get account balance
termii.balance().then(data=>{console.log({data})}).catch(err=>{console.log({err})})

//send token
termii.token({
    message_type: "NUMERIC",
    to: "234803735....",
    from: "Acm",
    channel: "dnd",
    pin_attempts: 4,
    pin_time_to_live: 4,
    pin_length: 6,
    pin_placeholder: "< 123456 >",
    message_text: "Your (company name) confirmation code is < 123456 >. It expires in 30 minutes",
    pin_type:"NUMERIC"
}).then(dat=>console.log({dat})).catch(er=>console.log({er}));
