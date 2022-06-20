import React from "react";
import Header from "../../Header/Header";
import s from "./CatTitle.css"

const CatTitle = (props) => {
    if (props.av === 0) {
        return (
            <div className="non-available">
                <div className="img">
                    <div className="title"> {props.title}</div>
                    <div className="name">{props.name}</div>
                    <div className="portion">{props.portion}</div>
                   
                    <img src="https://psv4.vkuseraudio.net/s/v1/d/ecxCxdT3MXi0wLaCPD3U02trPWXv5Jo0Y62-rAqu7HupPG_ys9N6WsEmJV9K9Yln_ZOFgNOlDBXPv1w4HP6bLEwiuiUD5AniARsZQZAga0E-Jl5v5zOCQQ/48adbc37d59237857a6426336594778117f9b08e.png" width="100%"
                    />
                    <div className="non-available-weidth">
                        {props.weidth}
                    </div>
                    <div> <button className="n">Нет в наличии</button></div>
                    

                </div>

            </div>
        )
    }
    

    return (
        <div className="cat">
            <div className="img">
                <div className="title"> {props.title}</div>
                <div className="name">{props.name}</div>
                <div className="portion">{props.portion}</div>

                <img src="https://psv4.vkuseraudio.net/s/v1/d/ecxCxdT3MXi0wLaCPD3U02trPWXv5Jo0Y62-rAqu7HupPG_ys9N6WsEmJV9K9Yln_ZOFgNOlDBXPv1w4HP6bLEwiuiUD5AniARsZQZAga0E-Jl5v5zOCQQ/48adbc37d59237857a6426336594778117f9b08e.png" width="100%"
                />
                <div className="weidth">
                    {props.weidth}

                </div>


            </div>
            <div>{props.sellT} <a href="">КУПИТЬ</a>  </div>
            <div>
                
            </div>

        </div>
        
            
       
        
    )
}
export default CatTitle