# [termii-nodejs-sdk](https://developers.termii.com/)
### Node js SDK for the Termii messages (SMS) and one time password (OTP) services
# Sender ID API 
>A Sender ID is the name or number that identifies the sender of an SMS message. This API allows businesses retrieve the status of all registered sender ID and request registration of sender ID through getSenderId method.

```bash
const Termii = require('termii-nodejs-sdk').default
let termii = new Termii("Your API Key");

termii.getSenderId().then(data=>{console.log({data})}).catch(err=>{console.log({err})})

```
Sample response 

```json
  {
      "current_page": 1,
      "data": [
          {
              "sender_id": "ACME Key",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:51:53"
          },
          {
              "sender_id": "ACME Alert",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:51:09"
          },
          {
              "sender_id": "ACME Wall",
              "status": "unblock",
              "company": ACME,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-29 16:50:38"
          },
          {
              "sender_id": "Hooli",
              "status": "unblock",
              "company": Hooli,
              "usecase": null,
              "country": null,
              "created_at": "2021-03-26 13:19:16"
          },
          {
              "sender_id": "Google",
              "status": "unblock",
              "company": null,
              "usecase": null,
              "country": null,
              "created_at": "2021-01-19 17:41:30"
          },
          {
              "sender_id": "Facebook",
              "status": "unblock",
              "company": null,
              "usecase": null,
              "country": null,
              "created_at": "2021-01-19 17:41:14"
          },
         
      ],
      "first_page_url": "https://api.ng.termii.com/api/sender-id?page=1",
      "from": 1,
      "last_page": 47,
      "last_page_url": "https://api.ng.termii.com/api/sender-id?page=47",
      "next_page_url": "https://api.ng.termii.com/api/sender-id?page=2",
      "path": "https://api.ng.termii.com/api/sender-id",
      "per_page": 10,
      "prev_page_url": null,
      "to": 15,
      "total": 704
  }

```
