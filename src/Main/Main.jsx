import React from "react";
import Header from "../Header/Header";
import CatTitle from "./CatTitle/CatTitile";
import s from "./Main.css"
const Main = (props) => {
    let productList = props.state.product.map(p => <CatTitle av={p.av} title={p.title} name={p.name} portion={p.portion} weidth={p.weidth} sellT={p.sellT} R={p.R} />)
  
   
   
   
    return (
        <div>


            <div className="main-container">
                <h1>Ты сегодня покормил кота?</h1>
                {productList}


            </div >
            
           
            
            
            

        

        </div>
    )
}
export default Main