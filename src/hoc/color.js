import React from 'react'

export default function color (WrappedComponent) {

    const colors = ['red', 'pink','yellow','blue', 'green', 'orange'];
    const randomColour = colors[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text'

    return (props)=>{
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
    
}
