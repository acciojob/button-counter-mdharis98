import React, { useState } from "react"
const Button = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
            <p>Button clicked {count} times</p>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default Button;