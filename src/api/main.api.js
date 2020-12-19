import { Api } from './api';
import { RouteComponentProps } from 'react-router';


export class MainApi {
    constructor(){
        this.api = new Api();
    }

    getAllUsers(){
        var path = `/users`;
        return this.api.get(path);
    }

    getUser(id){
        var path =`/users/${id}`;
        return this.api.get(path);
    }

    getAllPosts(){
        var path = `/posts`;
        return this.api.get(path);
    }

    getAllComments(){
        var path =`/comments`;
        return this.api.get(path);
    }

  


}
