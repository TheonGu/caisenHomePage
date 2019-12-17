/*
能发送异步ajax请求的函数模块封装 axios库
函数的返回值是promise对象
*/
import axios from 'axios'
import {message} from 'antd'

export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        let promise
        if(type==='GET'){
            promise= axios.get(url,{
                params:data//指定参数
            });
        }else{//发post请求
            promise= axios.post(url,data);
        }
        promise.then(response=>{
            resolve(response)
        }).catch(error=>{
            message.error('请求出错了:'+error.message)
        })
    })
   
}