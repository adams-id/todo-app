import React from 'react';


export const HeaderComponent = ({children}) => {
    return (
        <div className="hero-head has-background-link px-5 pt-6 pb-4 columns">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <h2 className="title is-2 has-text-white">TODO APP</h2>
                    </a>
                </div>
            </nav>

            {children}
        </div>
    )
}