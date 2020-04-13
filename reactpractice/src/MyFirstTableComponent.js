import React from 'react';

const MyFirstTableComponent = ({ userData, deleteUser }) => {
    const userList = userData.map((user,index) => {
        
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td><button onClick={() => { deleteUser(user.id) }}>Delete</button></td>
            </tr>
        )
    })
    return (
        <div className="table">
            <p>My First Table</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>
            </table>
        </div>
    )
}

export default MyFirstTableComponent;