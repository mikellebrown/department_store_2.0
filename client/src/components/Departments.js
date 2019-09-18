import React from 'react';
import { Container, Header, Card, Button } from 'semantic-ui-react';
import { Link, } from 'react-router-dom'
import axios from 'axios';


class Departments extends React.Component {
  state = { departments: [], }


   
  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  renderDepartments = () => {
    const { departments, } = this.state; 
    if (departments.length <= 0)
    return <Header as="h2">Ain't Got None</Header> 
    return departments.map( department => (
        <Card key={department.id}>
          <Card.Content>
            <Card.Header>{ department.name }</Card.Header>
            <br />
          </Card.Content>
            <Card.Content extra>
            <Button as={Link} to={`/departments/${department.id}`} color='black'>
              View
            </Button>
          </Card.Content>
        </Card>
    ))
  };
  render() {
   return(
      <Container>
        <Header as="h1">Departments</Header>
        <br />
        <Button as={Link} color="black" to="/departments/new">
          New Department
        </Button>
        <br />
        <br />
        <Card.Group>
        { this.renderDepartments() }
        </Card.Group>

      </Container>
    

    );
  };
};


export default Departments;