
import React from "react"

class ClassComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        
        this.setState( {count: this.state.count + 1});
        setTimeout(() => {
            console.log(this.state.count);
        });
            // console.log(this.state.count);

    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount} style={{ backgroundColor: "blue", color: "white", "border": "1px solid black", padding: "20px", borderRadius: "5px", "margin": "auto" }}>
                    increment
                </button>
                <div style={{ marginTop: "20px", "color": "blue" }}>
                    {this.state.count}
                </div>
            </div>
        )
    }
}

export default ClassComponent;