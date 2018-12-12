import React from 'react';
// import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div className={props.headerClass}>
            <figure className="gc-logo">
                <figcaption className="gc-logo__text">GC Lite</figcaption>
            </figure>
            <div className="account-wrapper">
                <div className="gc-gold-balance no-border"><i className="gc-icon gc-icon--normal gc-icon--right" role="img" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#FBB03B">
                            <circle stroke="#FBB03B" strokeWidth="2" id="a" cx="11" cy="11" r="10" fillOpacity=".6"></circle>
                            <path d="M11.98 6.05c-.97 3.44-1.21 3.94-1.76 3.86-1.21-.16 1.6-5.55.11-5.74-1.22-.15-1.23 1.95-1.9 4.25-.2.7-.58 2.24-1.13 2.16-.83-.1-.25-1.5-.09-2.38.2-1.12-.72-1.74-1.25-.2-.26.76-.32.84-.4 1.7-.1.95-.2 1.92-.42 2.87-.46 2.05-.31 5.33 3.3 5.82 1.95.27 3.52-.87 4.49-1.96.49-.66.98-1.4 1.54-1.77 1.5-.99 2.8-.73 3.03-1.43.45-1.34-3.41-.6-4.19-.41-.55.14-1.88.3-2.1.9-.23.63.55.48.8.82.3.4-.12.89-.55 1.27-.5.45-1.32.9-2.6.72-2.67-.36-2.42-3.24-.7-4.14 3.04-1.59 5.73.12 6.75-2.15.96-2.14 2.34-4.68 1.3-4.85-1.13-.17-1.37 1.32-2.06 2.9-.61 1.4-.76 1.53-1.14 1.48-.8-.1 2.05-6 .7-6.19a1.3 1.3 0 0 0-.18-.01c-1.15 0-1.33 1.68-1.55 2.48"></path>
                        </g>
                    </svg>
                </i>
                    <div format="(,ddd)" className="gc-odometer gc-gold-balance__amount odometer odometer-auto-theme">
                        <div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div>
                    </div>
                    <span className="gc-loader gc-loader--textual"><span className="gc-loader__dot">.</span><span className="gc-loader__dot">.</span><span className="gc-loader__dot">.</span></span></div>
                <div className="header-toolbar-toggle"><a href="https://agenzzia.com">
                    <i className="gc-icon gc-icon--large gc-icon--right" role="img" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
                    </svg>
                </i></a></div>
                <div className="bell-toolbar-notifier"><a href="https://agenzzia.com"><span className="gc-badge">1</span><i className="gc-icon gc-icon--normal gc-icon--both gc-icon--middle" role="img" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 1 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                    </svg>
                </i></a></div>
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
            </div>
        </div>
    );
};

// Header.propTypes = {
//     headerClass:PropTypes.string()
// };

export default Header;