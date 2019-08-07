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
      <UsersList users = {users} />
    </div>
  );
}

export default App;
