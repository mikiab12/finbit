import React, { useEffect, useState } from 'react';
import { MainApi } from '../../api/main.api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './user.css';
import { useDispatch, useSelector } from 'react-redux';
import { storeComments, storePosts, storeUsers, reset } from '../../store/slice/userSlice';
import { UserDetail } from './UserDetail';

export function UserList(props) {

    const [users, setUsers] = useState([]);
    const [ posts, setPosts ] = useState([]);

    const [ userPosts, setUserPosts ] = useState([]);
    const [ comments, setComments ] = useState([]);

    const [selectedUser, selectUser] = useState(-1);


    const dispatch = useDispatch();

    const api = new MainApi()

    const store = useSelector(state => state);

    useEffect(() => {
        getAllusers();
        getAllPosts();
        getAllComments();


    }, []);

    function getAllusers(){
       if(store.content.users.length == 0){
        api.getAllUsers().then((response) => {
            setUsers(response.data);
            dispatch(storeUsers(response.data));
        })
       }
       else{
           setUsers(store.content.users);
       }

    }

    function getAllPosts(){
        if(store.content.posts.length == 0){
            api.getAllPosts().then((response) => {
                setPosts(response.data);
                dispatch(storePosts(response.data));
            })
        }
        else{
            setPosts(store.content.posts);
        }
    }

    function getAllComments(){
 
        if(store.content.comments.length == 0){
            api.getAllComments().then((response) => {
                setComments(response.data);
                dispatch(storeComments(response.data));
            })
           }
           else{
               setComments(store.content.comments);
           }
    }

    function openUser(index){
        selectUser(index);
        var filteredPosts = posts.filter((i) => i.userId == users[index].id );
        var commentedPosts = filteredPosts.map((item) => {
            var comm = comments.filter((i) => i.postId == item.id);
            return {
                ...item, comments : comm
            }
        });
        setUserPosts(commentedPosts.sort((a,b) => a.comments.length - b.comments.length ));

    }

 

    



    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
                {/* <h1>User List</h1> */}
                <table className='tableContainer'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Detail</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>
                                        <button onClick={() => openUser(index)}
                                        >
                                            <FontAwesomeIcon
                                                
                                                icon={faArrowRight} />
                                        </button>

                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
           
        <UserDetail users={users} posts={posts} selectedUser={selectedUser}
        userPosts={userPosts} store={store} {...props}
        />

        </div>




    )
}

