import React from 'react'
import UserCard from './UsersCard'

const UsersList = (props) => {

    const {users} = props

    return (

        <div className = 'users-container'>
            {users.map((user, index) => {
                return (
                    <UserCard {...user} key = {index} />
                )
            })}
        </div>

    )

} 

export default UsersList