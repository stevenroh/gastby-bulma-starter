import React from 'react';
import { Button, Container, Columns } from 'react-bulma-components';
import { Header } from '../components/header';
import './../styles/app.scss';

const IndexPage = () => {
  return (
    <>
      <title>Gatsby Bulma Starter</title>
      <Header />
      <Container className="my-6">
        <Columns>
          <Columns.Column>
            <h2 className="title">Hello world</h2>
            
            <Button color="primary" onClick={() => alert('Hello again !')}>Test</Button>    
          </Columns.Column>
        </Columns>
      </Container>
    </>
  )
}

export default IndexPage

