import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{
    state={
        advice:''
    };

    componentDidMount(){
        this.fetchAdvice();
    }
    randomID(){
        return Math.floor(Math.random()*15)+1;
    }
    fetchAdvice=()=>{
        const id=this.randomID();
        axios.get(`https://localhost:7206/api/Advices/GetAdvice?id=${id}`)
        .then((res)=>{
            const {advice}=res.data;
            this.setState({
                advice
            })
        })
        .catch((error)=>{console.log(error)});
    }
    render(){
        const {advice}=this.state;
        return(
            <div className='app'>
                <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button' onClick={this.fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
                </div>
            </div>
        )
    }
}

export default App;