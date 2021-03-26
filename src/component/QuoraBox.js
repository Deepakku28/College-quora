import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import "../css/QuoraBox.css";
import { selectUser } from '../features/userSlice';

function QuoraBox() {
    const user=useSelector(selectUser);
    return (
        <div className="quora-box">
            <div className="quora-box-info">
                <Avatar src={user.photo} />
                <h5>
                    {user.displayName}
                </h5>
            </div>
            <div className="quora-box-quora">
                <p>What is your Question or link?</p>
            </div>
        </div>
    );
}

export default QuoraBox;