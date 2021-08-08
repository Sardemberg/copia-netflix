import React from "react";
import "./appMobile.css";

export default function AppMobile() {
    return (
        <div className="general-container">
            <img src="logo.png" width="200px" />
            <h2>
                Instale o nosso aplicativo para ter uma melhor experiência
            </h2>
            <div className="container-aplication">
                <img src="google-play.png" width="140px"/>
                <img src="apple-store.png" width="140px"/>
            </div>
        </div>
    )
}