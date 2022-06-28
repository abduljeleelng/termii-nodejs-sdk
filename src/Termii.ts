import {getSenderIdRequest,requestSenderIdRequest,singleSMSRequest,bulkSMSRequest,numberRequest,templateRequest,
    phoneBooksRequest,createPhoneBookRequest,updatePhoneBookRequest,deletePhoneBookRequest,contactRequest,addSingleContactRequest,
    addBulkContactRequest, deleteContactRequest, campaignRequest, campaignListRequest,campaignHistoryRequest,tokenRequest,voiceTokenRequest,
    callTokenRequest,inAppTokenRequest,verifyTokenRequest,balanceRequest,searchRequest,statusRequest,historyRequest,
} from "./utils";
import {BulkSMS, Campaign, Message, RequestSenderId, SendSMS, Template} from "./utils/type";

class Termii {
    api_key:string = ""
    constructor(api_key:string) {
        this.api_key = api_key
    }

    async getSenderId(){
        let resp = await getSenderIdRequest(this.api_key);
        return resp
        // return new Termii(resp)
    }
    async requestSenderId({sender_id,usecase,company}:RequestSenderId){
        let api_key = this.api_key;
        const payload = {api_key,sender_id,usecase,company}
        let resp = await requestSenderIdRequest(payload);
        return resp
    }

    async sendSMS({to,from,sms,type,channel,media}:SendSMS){
        let api_key = this.api_key;
        const payload = {api_key,to,from,sms,type,channel,media}
        let resp = await singleSMSRequest(payload);
        return resp
    }
    async bulkSMS({to,from,sms,type,channel}:BulkSMS){
        let api_key = this.api_key;
        const payload = {api_key,to,from,sms,type,channel}
        let resp = await bulkSMSRequest(payload);
        return resp
    }
    async message({to,sms}:Message){
        let api_key = this.api_key;
        const payload = {api_key,to,sms,}
        let resp = await numberRequest(payload)
        return resp
    }
    async template({phone_number,device_id,template_id,data:{product_name,opt,expiry_time}}:Template){
        let api_key = this.api_key;
        const payload = {api_key,phone_number,device_id,template_id,data:{product_name,opt,expiry_time}}
        let resp = await templateRequest(payload)
        return resp
    }
    async phoneBook(){
        let resp = await phoneBooksRequest(this.api_key)
        return resp
    }
    async createPhoneBook({phonebook_name,description}:{phonebook_name:string,description?:string}){
        let api_key = this.api_key;
        const payload = {api_key,phonebook_name,description}
        let resp = await createPhoneBookRequest(payload)
        return resp
    }
    async updatePhoneBook({phonebook_id,phonebook_name,description}:{phonebook_id:string,phonebook_name:string,description?:string}){
        let api_key = this.api_key;
        const payload = {api_key,phonebook_name,description}
        let resp = await updatePhoneBookRequest(phonebook_id,payload)
        return resp
    }
    async deletePhoneBook({phonebook_id}:{phonebook_id:string}){
        let api_key = this.api_key;
        let resp = await deletePhoneBookRequest(phonebook_id,api_key)
        return resp
    }
    async contact({phonebook_id}:{phonebook_id:string}){
        let resp = await contactRequest(phonebook_id)
        return resp
    }
    async addContact({phonebook_id,phone_number,country_code,email_address,first_name,last_name,company}:{phonebook_id:string,phone_number:string,country_code?:string,email_address?:string,first_name?:string,last_name?:string,company?:string}){
        let api_key = this.api_key;
        const payload = {api_key,phone_number,country_code,email_address,first_name,last_name,company}
        let resp = await addSingleContactRequest(phonebook_id,payload)
        return resp
    }
    async addBulkContact({phonebook_id,contact_file,country_code}: { phonebook_id:string,contact_file:string,country_code:string }){
        let api_key = this.api_key;
        const payload = {api_key,contact_file,country_code}
        let resp = await addBulkContactRequest(phonebook_id,payload)
        return resp
    }
    async deleteContact({contact_id}:{contact_id:string}){
        let api_key = this.api_key;
        let resp = await deleteContactRequest(contact_id,api_key)
        return resp
    }
    async campaign({country_code,sender_id,message,channel,message_type,phonebook_id,campaign_type,schedule_sms_status,schedule_time}:Campaign){
        let api_key = this.api_key;
        const payload = {api_key,country_code,sender_id,message,channel,message_type,phonebook_id,campaign_type,schedule_sms_status,schedule_time}
        let resp = await campaignRequest(payload)
        return resp
    }
    async campaignList(){
        let api_key = this.api_key;
        let resp = await campaignListRequest(api_key)
        return resp
    }
    async campaignHistory({campaign_id}:{campaign_id:string}){
        let api_key = this.api_key;
        let resp = await campaignHistoryRequest(campaign_id,api_key)
        return resp
    }
    async token({message_type,to,from,channel,pin_attempts,pin_time_to_live,pin_length,pin_placeholder,message_text,pin_type}:{message_type:"NUMERIC"|"ALPHANUMERIC",to:string,from:string,channel:"dnd"|"WhatsApp"|"generic",pin_attempts:number,pin_time_to_live:number,pin_length:number,pin_placeholder:string,message_text:string,pin_type:String}){
        let api_key = this.api_key;
        const payload = {api_key,message_type,to,from,channel,pin_attempts,pin_time_to_live,pin_length,pin_placeholder,message_text,pin_type}
        let resp = await tokenRequest(payload);
        return resp;
    }
    async voiceToken({pin_type,phone_number,pin_attempts,pin_time_to_live,pin_length}: {pin_type:"NUMERIC"|"ALPHANUMERIC", phone_number:string,pin_attempts:number,pin_time_to_live:number,pin_length:number }){
        let api_key = this.api_key;
        const payload = {api_key,pin_type,phone_number,pin_attempts,pin_time_to_live,pin_length}
        let resp = await voiceTokenRequest(payload)
        return resp
    }
    async callToken({phone_number,code}:{phone_number:string,code:number}){
        let api_key = this.api_key;
        const payload = {api_key,phone_number,code}
        let resp = await callTokenRequest(payload)
        return resp
    }
    async inAppToken({pin_type,phone_number,pin_attempts,pin_time_to_live,pin_length}:{pin_type:"NUMERIC"|"ALPHANUMERIC", phone_number:string,pin_attempts:number,pin_time_to_live:number,pin_length:number }){
        let api_key = this.api_key;
        const payload = {api_key,pin_type,phone_number,pin_attempts,pin_time_to_live,pin_length}
        let resp = await inAppTokenRequest(payload)
        return resp
    }
    async verifyToken({pin_id,pin}:{pin_id:string,pin:string}){
        let api_key = this.api_key;
        const payload = {api_key,pin_id,pin}
        let resp = await verifyTokenRequest(payload)
        return resp
    }
    async balance(){
        let api_key = this.api_key;
        let resp = await balanceRequest(api_key)
        return resp
    }
    async search({phone_number}:{phone_number:string}){
        let api_key = this.api_key;
        let resp = await searchRequest(phone_number,api_key)
        return resp
    }

    async status({phone_number, country_code}:{phone_number:string, country_code:string}){
        let api_key = this.api_key;
        let resp = await statusRequest(phone_number,api_key,country_code)
        return resp
    }
    async history(){
        let resp = await historyRequest(this.api_key)
        return resp
    }
}

export default Termii
