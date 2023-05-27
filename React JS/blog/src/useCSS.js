import './App.css';
import Style from "./custom.module.css";

export default function Func(){

    return(
        <div>
            <p className="primary">
                Style in react js 1
            </p>

            <p style={{fontSize:"35px" , color:"orangered"}}>
                Style in react js 2
            </p>

            <p className={Style.success}>
                Style in react js 3
            </p>
        </div>
    )
}