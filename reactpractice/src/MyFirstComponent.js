import React from 'react';

const MyFirstComponent = ({ firstComponent, deletePerson }) => {

    const arrayList = firstComponent.map((component,index) => {
        return (
            <div className="firstComponent" key={index}>
                <div>{component.name}</div>
                <div>{component.age}</div>
                <button onClick={()=>{deletePerson(component.id)} }>Delete</button>
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