import React from 'react';

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

export default CheckboxClass;