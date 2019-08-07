import React, {useEffect, useState} from 'react';
import FormikLoginForm from './components/LoginForm'
import './styling/App.scss';

function App() {

  const [ users, setUsers ] = useState([])

  useEffect(() => {

    console.log(users)

  }, [users] )


  return (
    <div className="App">

      <FormikLoginForm setUsers = { setUsers }/>

    </div>
  );
}

export default App;
