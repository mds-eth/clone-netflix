import React from 'react';

import './style.css';

function Header({ black })
{
    return (
        <header className={black ? 'black' : ''}>
            <img className="img-netflix" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="logo netflix" />
            <img className="img-user" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar user" />
        </header>
    )
}

export default Header;