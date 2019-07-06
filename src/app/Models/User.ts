export interface User {
    id?: string;
    date: Date;
    user_firstname?: string;
    user_lastname?: string;
    user_email?: string;
    user_tel?: string;
    user_city?: string;
    user_town?: string;
    user_gender?: string;
    user_age?: string;
    user_maritalstatus?: string;
    user_havechild?: string;
    user_education?: string;
    user_job?: string;
    user_income?: string;
    user_device_phone: boolean;
    user_device_tablet: boolean;
    user_device_computer: boolean;
    user_phonemodel?: string;
    user_type?: string;
    user_joined_tests?: object;
}