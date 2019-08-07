import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = (props) => {

  return(
  <Card className = 'user-card'>
    <Image src={props.file} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Role : </span>
      </Card.Meta>
      <Card.Description>
        Contact : {props.email}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
  )}

export default UserCard

