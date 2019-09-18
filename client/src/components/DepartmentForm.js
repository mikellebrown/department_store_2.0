import React from 'react';
import { Container, Form } from 'semantic-ui-react';
import axios from 'axios';

class DepartmentForm extends React.Component {
  state = { name: "", }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/departments", this.state)
      .then( res => {
        this.props.history.push("/departments");
      })
      .catch( err => {
        console.log(err);
      })
  }

  handleChange = (e) => {
    const { target: { name, value} } = e;
    this.setState({ [name]: value, });
    
  };
  render() {
    const { name , } = this.state;
    return(
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
               label="Name"
               name="name"
               placeholder="name"
               value={name}
               onChange={this.handleChange}
               required
            />
          </Form.Group>
          <Form.Button color="black">Submit</Form.Button>
        </Form>
      </Container>

    );
  };
};


export default DepartmentForm;