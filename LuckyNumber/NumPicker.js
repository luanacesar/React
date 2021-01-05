function getNum()
{
    return Math.floor(Math.random() * 10) +1;
}

class NumPicker extends React.Component {
    render() {
    const num = getNum();
    let msg;
   

    if (num ===7){  
        msg= 
        <div>     
           <h2>CONGRATS YOU WIN! </h2>  
           <img src="https://i.pinimg.com/originals/8d/a3/cc/8da3cc2c3db6b45b56eb24b622c44c11.gif"/>
       </div>
        } else {
        msg = <h2>Sorry you lose!</h2>
    }
     return (
     <div>
         <h1>Your number is: {num}</h1>
         {msg}
     </div> 
     );
    }
}
// ReactDOM.render(<NumPicker />, document.getElementById('root'));