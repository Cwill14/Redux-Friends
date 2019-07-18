import React from 'react';

const FriendsList = props => {
    return (
        <div>
            <button onClick={() => {
                localStorage.removeItem('token');
                props.props.history.push("/");
            }}>Log Out</button>
            FriendsList
        </div>
    );
};

export default FriendsList;