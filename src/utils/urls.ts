export const getRealBaseUrl = (url: string): string => {
    if(url.charAt(url.length - 1) === '/'){
        return url.substr(0, url.length - 1);
    }
    return url;
};

export const getQueryParams = (search: string) => {
    //search = location.search.substring(1);
    let queryParams = {} as any;
    new URLSearchParams(search).forEach((val, key) => queryParams[key] = val );
    return queryParams;
}

const getQueryParamsDeprecated = (search: string) => {
    let queryParams = {};
    if(search){
        if(search.startsWith('?')){
            search = search.substring(1);
        }
        queryParams = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
            function(key, value) { return key==="" ? value:decodeURIComponent(value) });
    }
    return queryParams;
}


export const getQueryStringFromObject = (obj: any) => {
    let urlString = '';
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (obj[prop] != null && obj[prop].constructor === Array) {
                obj[prop].forEach((i: any) => {
                    urlString += `${prop}=${i}&`;
                });
            }
            else {
                if(obj[prop].toString().trim() !== ''){
                    urlString += prop + '=' + obj[prop] + '&';
                }
            }
        }
    }
    return urlString.substr(0, urlString.length - 1);
}
