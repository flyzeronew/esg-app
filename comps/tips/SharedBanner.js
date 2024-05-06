import React, { Component } from "react"

function SharedBanner(props) {
    const appUrl = process.env.APP_URL;
    return (        
        <div className="sharedBanner">
            <div className="mask"></div>
            <div className="box">
                <h1 className="title">永續生活小撇步</h1>
                <div className="txt">
                    <p>踏上永續生活的路上，小小的舉措，我們珍愛這片土地，永續生活於其中。</p>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}
export default SharedBanner;