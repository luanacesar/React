function getSelection()
{
    return Math.floor(Math.random(Machine) * s1 *s2 *s3);
}

class Machine extends React.Component{
    render(){
        const icon = getSelection();
        let msg;
        if (icon === s1){  
            msg= 
            <div>     
               <h2>CONGRATS YOU WIN! {}</h2>  
           </div>
            } else {
                icon = <h2>Sorry you lose!</h2>
        }
        return (
            <div>
                <h1>Slot Machines!</h1>
           
            </div>
        )
    }
}

