import React from 'react';

const MyFirstComponent = ({ firstComponent, deletePerson }) => {

    const arrayList = firstComponent.map(component => {
        return (
            <div className="firstComponent" key={component.id}>
                <div>{component.name}</div>
                <div>{component.age}</div>
                <button onClick={() => { deletePerson(component.id) }}>Delete</button>
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