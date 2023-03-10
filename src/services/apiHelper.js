import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});


export const GET = (url,data,headers) =>{
    return axiosInstance({
        method:'GET',
        url,
        params:data?.params,
        headers
    });
}

export const POST = (url,data,headers)=>{
    return axiosInstance({
        method:'POST',
        url,
        data,
        headers
    })
};

export const DELETE =(url,data,headers)=>{

    return axiosInstance({
        method:'DELETE',
        url,
        params:data?.params,
        headers
    })
}

export const PUT = (url,data,headers)=>{
    return axiosInstance ({
        method:'PUT',
        url,
        data,
        headers
    })
}

export const PATCH = (url,data,headers)=>{
    return axiosInstance ({
        method:'PATCH',
        url,
        data,
        headers
    })
}

export default axiosInstance;