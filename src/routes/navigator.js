import React from 'react';
import { HashRouter, Route , Switch,Router, BrowserRouter } from 'react-router-dom';
import { PostView } from '../views/post/postView';
import { UserList } from '../views/users/userList';


// const UserList = React.lazy(() => import('../views/userList').then(({UserList}) => ({ default : UserList })));
// const PostView = React.lazy(() => import('../views/postView').then(({PostView}) => ({ default : PostView })));

export function App(props){
    return(
        <HashRouter>
            <Switch>
            <Route exact path="/post/:id" component={(PostView)} {...props} />
            <Route path="/" component={UserList} {...props} />
            </Switch>
    </HashRouter>
    )
}
