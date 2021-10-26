import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[]);

    const handleDeleteMember = (id) =>{
        console.log(id);
        const url = `http://localhost:5000/users/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = members.filter(member => member._id !== id);
                setMembers(remaining)
            }
        })
    }
    return (
        <div>
            <h4>This is users page.</h4>
            <ol>
                {
                    members.map(member => <li 
                        key={member._id}
                    >{member.name} :: {member.email} 
                    <Link to={`/users/update/${member._id}`}><button>Update</button></Link>
                    <button onClick={()=> handleDeleteMember(member._id)}>X</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Users;