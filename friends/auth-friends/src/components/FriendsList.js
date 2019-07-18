import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';

const FriendsList = props => {
    
    const [list, setList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data);
                setList(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    
    return (
        <div>
            <button onClick={() => {
                localStorage.removeItem('token');
                props.props.history.push("/");
            }}>Log Out</button>
            {list.map(eachFriend => {
                return <Friend friend={eachFriend} key={eachFriend.id} />
            })}
            FriendsList
        </div>
    );
};

export default FriendsList;