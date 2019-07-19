import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

const FriendsList = props => {
    
    const [list, setList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setList(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [list])
    
    return (
        <div>
            <button onClick={() => {
                localStorage.removeItem('token');
                props.history.push("/");
            }}>Log Out</button>
            <div className="listBox">
                { list 
                    ? (list.map(eachFriend => {
                        return <Friend friend={eachFriend} key={eachFriend.id} />
                    }))
                    : <p>loading...</p>
                    
                }
            </div>
            <AddFriend setList={setList} />
        </div>
    );
};

export default FriendsList;