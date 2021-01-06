// to make default values and needs to be writen as defaultProps
class Hello extends React.Component {
    static defaultProps = {
        to:'jaqueline',
        from: 'LUANA',
        bangs: 1
    }
    render() {
        let bangs = "!".repeat(this.props.bangs)
        return (
            <div>    
                <h1>Hello {this.props.to} from {this.props.from}{bangs}</h1>
            </div>
        )
   
    }
}
// ReactDOM.render(<Hello/>, document.getElementById('root'));