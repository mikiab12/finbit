import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone, faGlobe, faAddressCard, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { storePost, setVIPUser, removeVIPUser } from '../../store/slice/userSlice';
import { PostChart } from './postChart';


export function UserDetail(props) {

    const { users, posts, selectedUser, userPosts, store } = props;

    const [showPosts, setShowPosts] = useState(true);

    const dispatch = useDispatch();

    function getTotalNumberOfComments(post) {
        var init = 0;
        post.map((item) => { init = init + item.comments.length; });
        return init;

    }

    function goToPost(item) {
        dispatch(storePost(item));
        props.history.push(`/post/${item.id}`);

    }

    function vipUser(status, id) {
        if (status) {
            dispatch(setVIPUser(id));
        }
        else {
            dispatch(removeVIPUser(id));
        }
    }

    return (
        selectedUser != -1 ?

            <div style={{ flex: 2 }}>

                <div className={'userDetailContainer'}>
                    <div className={store.user.vipUsers.indexOf(selectedUser) == -1 ?
                        "userDetailHeader" : "vipUserDetailHeader"}>
                        <p>{users[selectedUser].name}

                        </p>

                    </div>
                    <p> <label className="vipCheckBox"><input type='checkbox'
                        checked={store.user.vipUsers.indexOf(selectedUser) != -1}
                        onChange={e => vipUser(e.target.checked, selectedUser)} />VIP User</label></p>

                    <div style={{ display: 'flex' }}>
                        <img
                            src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC'} />
                        <div className="propertyList">
                            <p> <span className="propertyTitle"> <FontAwesomeIcon icon={faMailBulk} /> Email : </span> <span>{users[selectedUser].email}</span> </p>
                            <p><span className="propertyTitle">  <FontAwesomeIcon icon={faPhone} /> Phone : </span> <span>{users[selectedUser].phone}</span> </p>
                            <p><span className="propertyTitle"> <FontAwesomeIcon icon={faGlobe} /> WebSite : </span> <span>{users[selectedUser].website}</span></p>
                            <p> <span className="propertyTitle"> <FontAwesomeIcon icon={faAddressCard} /> Address : </span> <span>{users[selectedUser].website}</span></p>
                            <p><span className="propertyTitle"> <FontAwesomeIcon icon={faBuilding} /> Company : </span> <span>{users[selectedUser].company.name}</span></p>                        </div>
                    </div>
                    <div className="statusSection">
                        <div className="statusBox">
                            <p className={'statusNumber'}>{userPosts.length}</p>
                            <p className={'statusLabel'}>Total Number of Posts</p>
                        </div>
                        <div className="statusBox">
                            <p className={'statusNumber'}>{getTotalNumberOfComments(userPosts)}</p>
                            <p className={'statusLabel'}>Total Number of Comments</p>
                        </div>
                        <div className="statusBox">
                            <p className={'statusText'}>{userPosts[0].title}</p>
                            <p className={'statusLabel'}>Post with the most Comment</p>
                        </div>
                        <div className="statusBox">
                            <p className={'statusText'}>{userPosts[userPosts.length - 1].title}</p>
                            <p className={'statusLabel'}>Post with the least comment</p>
                        </div>
                    </div>
                    <div>
                        <div><PostChart posts={userPosts} /> </div>
                        <div className="userDetailHeader">
                            <p>Posts</p>
                        </div>
                        <label><input type='checkbox' checked={showPosts} onChange={e => setShowPosts(e.target.checked)} />Show Posts</label>


                        {showPosts ?

                            userPosts.map((item, index) => (
                                <div className="statusBox" key={index}>
                                    <p className={'postTitle'}>{item.title}</p>
                                    <p className={'postBody'}>{item.body} <button onClick={() => goToPost(item)}> See More ...</button> </p>
                                </div>
                            )) : null}

                    </div>

                </div>
            </div>

            : null
    );
}
