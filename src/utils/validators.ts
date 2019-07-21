export const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export const validateBvn = (bvn: string): boolean => {
    if(!bvn || !bvn.trim()){
        return false;
    }
    const regex = /^\d+$/;
    return bvn.trim().length === 11 && regex.test(bvn);
}

export const validatePhone = (phone: string): boolean => {
    if(!validateNotEmpty(phone)) return false;
    
    const phoneNumber = phone.trim();

    const isValidElevenDigits = phoneNumber.length === 11;
    const isValidThirteenDigits = phoneNumber.length === 13 && phoneNumber.startsWith('234');
    return isValidElevenDigits || isValidThirteenDigits;
}

export const validateNotEmpty = (v: string = '') => v !== null && v.trim().length > 0;

export const validateFile = (file: File) => !!file;

