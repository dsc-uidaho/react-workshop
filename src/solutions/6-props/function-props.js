import React, { useState } from 'react';

// Functional component with hooks
const CheckboxFunctionalWithProps = (props) => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
            {checked ? props.label : "Not " + props.label}
        </div>
    )
}

export default CheckboxFunctionalWithProps;