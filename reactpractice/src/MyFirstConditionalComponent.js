import React from 'react';

const MyFirstConditionalComponent = ({ firstComponent }) => {

    const arrayList = firstComponent.map((component,index) => {
        if (component.name !== 'Utkarsh' ) {
            return (

                <div className="firstComponent" key={index}>
                    <div>{component.name}</div>
                    <div>{component.age}</div>
                </div>

            )
        }else{
            return null;
        }
    });

    return (
        <div className="array-list">
            <p>This is From My First Conditional Component</p>
            {arrayList}
        </div>
    )
}



export default MyFirstConditionalComponent;