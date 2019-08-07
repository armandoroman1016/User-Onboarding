import React, {useEffect, useState} from 'react';
import FormikLoginForm from './components/LoginForm'
import UsersList from './components/UserList'
import './styling/App.scss';

function App() {

  const [ users, setUsers ] = useState([])

  useEffect(() => {

    console.log(users)

  }, [users] )


  return (
    <div className="App">
      <FormikLoginForm setUsers = { setUsers }/>
      <div className = 'users-parent-container'>
        <h1>Current Users</h1>
        <UsersList users = {users} />
      </div>
    </div>
  );
}

export default App;
