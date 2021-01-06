// function getSelection()
// {
 

//     return Math.floor(Math.random());
// }

class Machine extends React.Component{
    render(){
        let props = this.props;
        let msg;
        const estilo = {fontSize: '50px', backgroundColor:'purple', width:'50%', textAlign: 'right',padding:'10px'};

        if(this.props.s1 == props.s2 && props.s2 == props.s3)
        {
            msg = <h2>YOU WIN!</h2>  
        } else 
        {
                msg = <h2>you lose!</h2>
        }
        return(
            <div className="Machine">
                <p style = {estilo}>
                {this.props.s1} {this.props.s2} {this.props.s3}</p>
                {msg} 

            </div>
        );
    }
}



