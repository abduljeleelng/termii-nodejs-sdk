# [termii-nodejs-sdk](https://developers.termii.com/)
### Node js SDK for the Termii messages (SMS) and one time password (OTP) services
# Sender ID API
> Register for a new sender Id through the requestSenderId method.

```bash
const Termii = require('termi-demo').default
let termii = new Termii("Your API Key");

termii.requestSenderId({sender_id:"Acme",usecase:"Your OTP code is zxsds",company:"Acm Corps"}).then(data=>{console.log({data})}).catch(err=>{console.log({err})})

```
Response Sample

```json
    {
        "code": "ok",
        "message": "Sender Id requested. You will be  contacted by your account manager."
      
      
    }
```

# payload details 
| Option | Required | Data Type | Description | 
|---|---|---|---|
|`sender_id`| `Yes` | `String` | Represents the ID of the sender which can be alphanumeric or numeric. Alphanumeric sender ID length should be between 3 and 11 characters (Example:CompanyName)|
|`usecase`| `Yes` | `String` | A sample of the type of message sent.|
|`company`| `Yes` | `String` | Represents the name of the company with the sender ID.|
