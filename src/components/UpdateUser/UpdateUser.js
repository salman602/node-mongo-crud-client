import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const {id} = useParams();
    const [member, setMember] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
        .then(res => res.json())
        .then(data => setMember(data))
    },[])
    return (
        <div>
            <h4>This is update user page.</h4>
            <p>{id}</p>
            <h5>Name: {member.name}</h5>
            <h6>Email: {member.email}</h6>
        </div>
    );
};

export default UpdateUser;