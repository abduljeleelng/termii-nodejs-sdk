import axios from 'axios';
const base_url:string = "https://api.ng.termii.com/api"
const url = (endpoint:string):string =>`${base_url}/${endpoint}`;
const headers = {
    "Content-Type": "application/json"
};

export const getSenderIdRequest = async (apikey:string) =>{
    try {
        let resp = await axios.get(`${url("sender-id")}?api_key=${apikey}`);
        return resp.data;
    } catch (error) {
        return error
    }
}

export const requestSenderIdRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url("sender-id/request")}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}

export const singleSMSRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url("sms/send")}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}

export const bulkSMSRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url("sms/send/bulk")}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}
export const numberRequest = async (data:object) => {
    try {
        let resp = await axios.post(`${url("sms/number/send")}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}

export const templateRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url("send/template")}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}

export const phoneBooksRequest = async (data:string) =>{
    try {
        let resp = await axios.get(`${url("phonebooks")}?api_key=${data}`);
        return  resp.data
    } catch (error) {
        return error
    }
}

export const createPhoneBookRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url("phonebooks")}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}

export const updatePhoneBookRequest = async (phonebook_id:string,data:object) =>{
    try {
        let resp = await axios.put(`${url("phonebooks")}/${phonebook_id}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}
export const deletePhoneBookRequest = async (phonebook_id:string,data:string) =>{
    try {
        let resp = await axios.delete(`${url(`phonebooks/${phonebook_id}?api_key=${data}`)}`);
        return  resp.data
    } catch (error) {
        return error
    }
}

export const contactRequest = async (phonebook_id:string) =>{
    try {
        let resp = await axios.get(`${url(`phonebooks/${phonebook_id}/contacts`)}`);
        return  resp.data
    } catch (error) {
        return error
    }
}
export const addSingleContactRequest = async (phonebook_id:string, data:object) =>{
    try {
        let resp = await axios.post(`${url(`phonebooks/${phonebook_id}/contacts`)}`, data,{headers} );
        return  resp.data;
    } catch (error) {
        return error
    }
}

export const addBulkContactRequest = async (phonebook_id:string, data:object) =>{
    try {
        let resp = await axios.post(`${url(`phonebooks/${phonebook_id}/contacts`)}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}
export const deleteContactRequest = async (contact_id:string,api_key:string) =>{
    try {
        let resp = await axios.delete(`${url(`phonebook/contact/${contact_id}?api_key=${api_key}`)}`);
        return  resp.data
    } catch (error) {
        return error
    }
}

export const campaignRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url(`sms/campaigns/send`)}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}
export const campaignListRequest = async (data:string) =>{
    try {
        let resp = await axios.get(`${url(`sms/campaigns?api_key=${data}`)}`);
        return  resp.data
    } catch (error) {
        return error
    }
}

export const campaignHistoryRequest = async (campaign_id:string,api_key:string) =>{
    try {
        let resp = await axios.get(`${url(`sms/campaigns/${campaign_id}?api_key=${api_key}`)}`);
        return  resp.data
    } catch (error) {
        return error
    }
}

export const tokenRequest = async (data:object) =>{
    try {
        let resp :any = {}
        resp = await  axios.post(`${url(`sms/otp/send`)}`,data)
        return resp.data
    } catch (error) {
        return error
    }
}
export const voiceTokenRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url(`sms/otp/send/voice`)}`, data,{headers});
        return  resp.data
    } catch (error) {
        return error
    }
}
export const callTokenRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url(`sms/otp/call`)}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}
export const inAppTokenRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url(`sms/otp/generate`)}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}
export const verifyTokenRequest = async (data:object) =>{
    try {
        let resp = await axios.post(`${url(`sms/otp/verify`)}`, data,{headers} );
        return  resp.data
    } catch (error) {
        return error
    }
}
export const balanceRequest = async (api_key:string) =>{
    try {
        let resp = await axios.get(`${url(`get-balance?api_key=${api_key}`)}`);
        return  resp.data
    } catch (error) {
        return error
    }
}

export const searchRequest = async (phone_number:string,api_key:string) =>{
    try {
        let resp = await axios.get(`${url(`check/dnd?api_key=${api_key}&phone_number=${phone_number}`)}`);
        return  resp.data
    } catch (error) {
        return error
    }
}

export const statusRequest = async (phone_number:string,api_key:string,country_code:string) =>{
    try {
        let resp = await axios.get(`${url(`insight/number/query?phone_number=${phone_number}&api_key=${api_key}&country_code=${country_code}`)}` );
        return  resp.data
    } catch (error) {
        return error
    }
}
export const historyRequest = async (api_key:string) =>{
    try {
        let resp = await axios.get(`${url(`sms/inbox?api_key=${api_key}`)}`);
        return  resp.data
    } catch (error) {
        return error
    }
}

