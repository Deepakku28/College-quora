import { Add } from '@material-ui/icons';
import React from 'react';
import '../css/SidebarOptions.css';

function SidebarOptions() {
    return (
        <div className="sidebar-options">
            <div className="sidebar-option">
                <p>Academics</p>
            </div>
            <div className="sidebar-option">
                <p>Accounts</p>
            </div>
            <div className="sidebar-option">
                <p>Mess</p>
            </div>
            <div className="sidebar-option">
                <Add />
                <p>Others</p>
            </div>
        </div>
    );
}

export default SidebarOptions;