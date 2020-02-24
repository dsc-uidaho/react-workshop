import React, { useState } from 'react';

// Functional component with hooks
const CheckboxFunctional = (props) => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <input type="checkbox" value={checked} onChange={(event) => setChecked(!checked)} />
            {checked ? "Checked" : "Not Checked"}
        </div>
    )
}

export default CheckboxFunctional;