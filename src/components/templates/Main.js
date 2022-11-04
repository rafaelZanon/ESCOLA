import './Main.css';
import React from 'react';
export default function Main(props) {
    return (
        <div className="content">
            <main>
                <div>
                    {props.children}
                </div>
            </main>
        </div>
    )
}