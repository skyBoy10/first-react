// import 'whatwg-fetch';
// import 'es6-promise';
import mockApi from './mockApi';

const getReq = (url) => {
    let result = fetch(url, {
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json, text/plain, */*'
        },
        mode: 'cors'
    });

    return result;
};

//格式化请求参数
const formatHandle = obj => {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    
    if (result) {
        result = result.slice(1);
    }
    
    return result;
};

const postReq = (url, param) => {
    let result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formatHandle(param)
    });

    return result;
};

const mockHttp = (type, param) => {
    return new Promise((resolve, reject) => {
        const res = mockApi(type, param);
        setTimeout(() => {
            resolve(res);
        }, 2000)
    });
}

const httpReq = {
    get: getReq,
    post: postReq,
    mockHttp: mockHttp
};

export default httpReq;