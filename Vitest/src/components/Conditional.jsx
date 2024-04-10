import React from "react";

const Conditional = ({bool}) => {
    return (
        <>
        {bool ? <h1>True</h1> : <p>False</p>}
        </>
    )
}

export default Conditional;