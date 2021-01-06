class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                name = {['Elton','luana', 'vava']}
                hobbies={['Piano','Singing', 'Dancing']}
                />
                   <Friend
                name = {['Carolina','Bianca', 'Leticia']}
                hobbies={['Dancing','Jumping', 'playing']}
                />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));