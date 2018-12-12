import React from 'react';
import Logo from "./Logo";
import AccountWrapper from "./AccountWrapper";
// import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div className={props.headerClass}>
            <Logo/>
            <AccountWrapper/>
        </div>
    );
};

// Header.propTypes = {
//     headerClass:PropTypes.string()
// };

export default Header;