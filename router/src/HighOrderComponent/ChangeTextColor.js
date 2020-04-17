import React from 'react';

const ChangeTextColor=(WrappedComponent)=>{

    let colorArray = ['blue','green','red','orange','yellow','pink'];
    const randomColor = colorArray[Math.floor(Math.random()*5)];
    const className = randomColor+"-text";

    return(props)=>{
    return(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
    }
}

export default ChangeTextColor;