export interface RequestSenderId {
    sender_id:string;
    usecase:string;
    company:string
}
enum channel {
    dnd ="dnd",
    WhatsApp="WhatsApp",
    generic="generic",
}
export interface SendSMS{
    to:string;
    from:string;
    sms:string;
    type:string;
    channel:"dnd" |"WhatsApp"| "generic";
    media?: {
        url?:string;
        caption?:string;
    }
}

export interface BulkSMS{
    to:string;
    from:string;
    sms:string;
    type:string;
    channel:"dnd" |"WhatsApp"| "generic";
}

export interface Message{
    to:string;
    sms:string;
}
interface TemplateData {
    product_name:string;
    opt:string;
    expiry_time:string
}
export interface Template{
    phone_number:string;
    device_id:string;
    template_id:string;
    data:TemplateData
}
export interface Campaign{
    country_code:string;
    sender_id:string;
    message:string;
    channel:"dnd" |"WhatsApp"| "generic";
    message_type:string;
    phonebook_id:string;
    campaign_type:string;
    schedule_sms_status?:string;
    schedule_time?:string
}
