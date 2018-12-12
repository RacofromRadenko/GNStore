import React from 'react';
import GCGoldBalance from "./GCGoldBalance";
import HeaderToolbarToogle from "./HeaderToolbarToogle";
import BellToolbarNotifier from "./BellToolbarNotifier";
import UserAccountToolbar from "./UserAccountToolbar";

const AccountWrapper = () => {
    return (
        <div className="account-wrapper">
            <GCGoldBalance/>
            <HeaderToolbarToogle/>
            <BellToolbarNotifier/>
            <UserAccountToolbar/>
        </div>
    );
};

export default AccountWrapper;