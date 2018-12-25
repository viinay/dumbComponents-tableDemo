export interface Users {
    _id:string,
    updated_at:string,
    created_at:string,
    user_token:string,
    fullname:string,
    email_id:string,
    password:string,
    registration_token:string,
    referral_token:string,
    resources: {
        plan_index:number,
        plan_id:string,
        forms:number,
        domains:number
    },
    referral_points:number,
    mail_verified: boolean
}
