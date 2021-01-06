class Friend extends React.Component {
    render(){
        const {name, hobbies} = this.props;
        const arrayHobbies = hobbies.map(h => <li>{h}</li>);
        const arrayNames =  name.map(n => <li>{n}</li>);
        return (
            <div>
                <h1>{name[0]}</h1>
                   <ul>
                     {arrayHobbies}
                  </ul>
            </div>

        )
    }

}

//map is used to get the arrays
