import React from 'react';

const GCGoldBalance = () => {
    return (
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
    );
};

export default GCGoldBalance;