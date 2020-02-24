import React, { useState } from 'react';

// Exercise: convert the react class component below to a functional class component
//           name the component CheckboxFunctional
// Hint: use React Hook: `useState`
//      syntax: 
//        const [state, setState] = useState(initialState);


class CheckboxClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        }
    }

    toggle = (event) => {
        this.setState({checked: !this.state.checked})
    }

    render() {

        return (
            <div>
                <input type="checkbox" value={this.state.checked} onChange={this.toggle}/>
                {this.state.checked ? "Checked" : "Not Checked"}
            </div>
        )
    }
}


// code here



export default CheckboxFunctional;