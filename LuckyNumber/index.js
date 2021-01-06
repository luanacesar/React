class App extends React.Component {
    render() {
        return(
        <div>
            <Hello to="Ringo" 
            from ="Paul" 
            bangs={4}
            />
            <NumPicker/>
            <Hello to="Britney" 
            from ="Adele" 
            bangs={4}
            />
            <NumPicker/>
            <Hello 
            />
        </div>
        )
    
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

//    function getMood(){
//        const moods = [ 'Angry', 'Hungry', 'Silly', ' Quiet', 'Paranoid'];
//        return moods[Math.floor(Math.random() * moods.length)];
//    }
//    class JSXDemo extends React.Component{
//         render(){
//             return (
//             <div>
//             <h1>My current mood is:  {() => <p>test</p>} </h1>
//             <h3> here: {getMood()} </h3>
//             </div>
//             );
//         }
//     }

//     ReactDOM.render(<JSXDemo />, document.getElementById('root'));

// function getNum()
// {
//     return Math.floor(Math.random() * 10) +1;
// }

// class NumPicker extends React.Component {
//     render() {
//     const num = getNum();
//     let msg;

//     if (num ===7){  
//         msg= 
//         <div>     
//            <h2>CONGRATS YOU WIN! </h2>  
//            <img src="https://i.pinimg.com/originals/8d/a3/cc/8da3cc2c3db6b45b56eb24b622c44c11.gif"/>
//        </div>
//         } else {
//         msg = <p>Sorry you lose!</p>
//     }
//      return (
//      <div>
//          <h1>Your number is: {num}</h1>;
//          {msg}
//      </div> 
//      );
//     }
// }
// ReactDOM.render(<NumPicker />, document.getElementById('root'));

