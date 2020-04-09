import React from 'react';

const MyFirstSelectComponent = ({ firstComponent }) => {

    const arrayList = firstComponent.map(component => {
        return (
            <option className="firstComponent" key={component.id}>
                {component.name}
            </option>
        )
    });
    return (
        <div>
            <p>This is From My First select Component</p>
            <select className="array-list">
                {arrayList}
            </select>
        </div>
    )
}



export default MyFirstSelectComponent;