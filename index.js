import React,{Component} from "react";
import ReactDOM  from "react-dom";
import'./App.css';
import f2 from './components/image/f1.jpeg';
import f1 from './components/image/f2.jpeg';
class Home extends Component{
    render(){
        return(
            <div class='d'>
                <center>
                <h1>Welcome to buddy club</h1>
                <h2>This is About my friends</h2>
                <img src={f2} className="s"></img>
                <img src={f1} className="t"></img>
                <h2 style={{color:"black",textalign:'center',padding:'10px'}}>Things are never quite as scary when you've got a best friend. </h2>
                </center>
                <ul>
                <li>Ilax</li>
                <li>Krish</li>
                <li>Harsha</li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Home/> ,document.getElementById('root'));