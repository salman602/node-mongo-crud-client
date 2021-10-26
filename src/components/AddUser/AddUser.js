import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = (e) =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newMember = {name: name, email: email};
        console.log(newMember);

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(newMember)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Successfully added the member');
                e.target.reset();
            }
            console.log('got the member',data.insertedId)
        })
    }
    return (
        <div>
            <h2>This is Add User.</h2>
            <form onSubmit={handleAddUser}>
                <input ref={nameRef} type="text" name="" id="" placeholder="Full Name" /><br />
                <input ref={emailRef} type="email" name="" id="" placeholder="Email" /><br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;