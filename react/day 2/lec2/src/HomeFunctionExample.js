import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import BTButton from './Button';
import UserData from './UserData';

function HomeFunctionExample() {
    const [userInfo, setUserInfo] = useState({

        name: "Rana",
        position: "frontEnd",
    })


    const [userList, setUsersList] = useState(['Rana','Ahmed','Karim','Mohamed'])
    
    const changeUserName = (name) => {
        setUserInfo({
            ...userInfo,
            name,
        })
    }
    
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        console.log("DID MOUNT, Empty ARRay")
        return () => {
            //clean up method -> WILL unmount
        }
    }, [])
    useEffect(() => {
        console.log("DID MOUNT")
    }, [userInfo])
    return (
        <>
            <h1>Hello</h1>
            <ul>{
                userList.map((user, index)=> {
                    return <li key={index}> {user}</li>
                })
            }</ul>
            <UserData
                user={userInfo}
            />
            {/* {isAdmin && (
                <BTButton
                name="Change username" handleClick={() => changeUserName("Ahmed")}
            />
            )} */}
            {isAdmin ? (
                <BTButton
                    name="Change username" handleClick={() => changeUserName("Ahmed")}
                />
            ) : <h4>You don't have premission </h4>}
          

        </>
    )
}
export default HomeFunctionExample