import React from 'react';

const HeaderToolbarToogle = () => {
    return (
        <div className="header-toolbar-toggle"><a href="https://agenzzia.com">
            <i className="gc-icon gc-icon--large gc-icon--right" role="img" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
                </svg>
            </i></a></div>
    );
};

export default HeaderToolbarToogle;