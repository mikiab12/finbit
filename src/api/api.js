import { baseUrl } from './urlConfig';
import Axios from 'axios';


export class Api {
    constructor(){
        this.axios = Axios.create({
            baseURL : baseUrl,
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
               'Access-Control-Allow-Headers': '*',
               "Access-Control-Allow-Origin": "*",
               'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })

        // this.axios.interceptors.response.use((response) => {
        //     return response;}, (error) => {
        //      console.log(error);
        //      Swal.close();
        //      if(error.message == "Network Error"){
        //         Swal.fire("Error","Server Is Down !!!","error");
        //         dispatch(logout());
        //         console.log(this.Props);
        //         this.Props.history.push("/login");
        //     }

        //     else if(error.response || (error.response && error.response.data == "Access Denied")){
        //         console.log(error.response.status);
        //         if(error.response.status == 403 || error.response.status == 405){
        //             Swal.fire("Error",error.response.data,"error");
        //             dispatch(logout());
        //             console.log(this.Props);
        //             this.Props.history.push("/login");
        //         }
        //         else{
        //             Swal.fire("Error",error.response.data,"error");
        //         }
        //     }

        //     return Promise.reject(error);
            
        // })
    }

    get(path){
        return  this.axios.get(path);
    }
    post(path,data){
        return this.axios.post(path,data);
    }

    put(path,data){
        return this.axios.put(path,data);
    }

    delete(path){
        return this.axios.delete(path);
    }
}
