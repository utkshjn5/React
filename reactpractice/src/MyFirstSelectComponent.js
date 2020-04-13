import React from 'react';

const MyFirstSelectComponent = ({ firstComponent }) => {

    const arrayList = firstComponent.map((component,index) => {
        return (
            <option className="firstComponent" key={index}>
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