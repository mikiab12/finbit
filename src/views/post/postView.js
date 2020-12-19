import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../post/postView.css';

export function PostView(props){


    const selectedPost = useSelector( state => state.content.selectedPost );
    return(
        
            selectedPost != null ?
            <div>
                <div className="statusBox">
                    <div className="userDetailHeader">
                        <p>{selectedPost.title}</p>
                    </div>
                 
                        <p className="postBody">{selectedPost.body}</p>
                        <div className="userDetailHeader">
                        <p>Comments</p>
                        
                    </div>
                   
                </div>
                {
                            selectedPost.comments.map((item,index) => (
                                <div className="statusBox">
                                    <p className={"commentName"}>{item.name} ({item.email})</p>
                                    <p className={"commentBody"}>{item.body}</p>
                                    </div>
                            ))
                        }
                </div>

            : null
        
        
    )
}