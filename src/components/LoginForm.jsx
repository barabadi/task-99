import React from 'react'
import { Card, Input, Form, Button } from './form'

export default function LoginForm() {
  return (
    <Card>
      <Form>
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <Button> Submit           
        </Button>      
      </Form>        
    </Card>
  )
}