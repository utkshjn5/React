import React from 'react';

const MyFirstComponent = ({ firstComponent }) => {

    const arrayList = firstComponent.map(component => {
        return (
            <div className="firstComponent" key={component.id}>
                <div>{component.name}</div>
                <div>{component.age}</div>
            </div>
        )
    });
    return (
        <div className="array-list">
            <p>This is From My First Component</p>
            {arrayList}
        </div>
    )
}



export default MyFirstComponent;