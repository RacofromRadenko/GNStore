import React from 'react';

const UserAccountToolbar = () => {
    return (
        <div className="gc-dropdown gc-dropdown--icon gc-dropdown--right gc-dropdown--no-caret gc-account-settings-toggle btn-group">
            <button id="dfac86c3-f77d-4b89-9880-89c13e934e01" aria-haspopup="true" aria-expanded="false" type="button" className="gc-dropdown gc-dropdown--icon gc-dropdown--right gc-dropdown--no-caret gc-account-settings-toggle-toggle btn btn-default">
                <div className="gc-avatar gc-avatar--small">
                    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134">
                        <defs>
                            <linearGradient id="svg-avatar__linearGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#474A6D"></stop>
                                <stop offset="100%" stopColor="#22243B"></stop>
                            </linearGradient>
                        </defs>
                        <g fill="none" fillRule="evenodd" transform="translate(3 3)">
                            <circle cx="64" cy="64" r="64" fill="url(#svg-avatar__linearGradient)"></circle>
                            <circle cx="64" cy="64" r="65.5" stroke="#7F8FA4" strokeWidth="3"></circle>
                            <path fill="#7F8FA4" d="M20.55 110.99C31.18 103.03 46.8 98 64.22 98c17.28 0 32.8 4.95 43.42 12.81A63.77 63.77 0 0 1 64 128a63.77 63.77 0 0 1-43.45-17.01z"></path>
                            <circle cx="64" cy="64" r="24" fill="#7F8FA4"></circle>
                        </g>
                    </svg>
                </div>
            </button>
            <ul role="menu" className="gc-dropdown gc-dropdown--icon gc-dropdown--right gc-dropdown--no-caret gc-account-settings-toggle-menu" aria-labelledby="dfac86c3-f77d-4b89-9880-89c13e934e01">
                <li role="presentation" className=""><a href="https://agenzzia.com" role="menuitem" tabIndex="-1">Profile</a></li>
                <li role="separator" className="divider"></li>
                <li role="presentation" className=""><a href="https://agenzzia.com" role="menuitem" tabIndex="-1">Logout</a></li>
            </ul>
        </div>
    );
};

export default UserAccountToolbar;