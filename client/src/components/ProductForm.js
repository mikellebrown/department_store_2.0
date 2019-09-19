import React from 'react';
import { Container, Form } from 'semantic-ui-react';
import axios from 'axios';

class ProductForm extends React.Component {
  state = { name: "", description: "", price: "", }

  handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post(`/api/departments/${this.props.match.params.id}/products`, this.state)
      .then( res => {
        this.props.history.push(`/departments/${this.props.match.params.id}/products`);
      })
      .catch( err => {
        console.log(err);
      })
  }

  handleChange = (e) => {
    const { target: { name, value }} = e;
    this.setState({ [name]: value, });
    
  };
  render() {
    const { name, description, price } = this.state;
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
             <Form.Input
               label="Description"
               name="description"
               placeholder="description"
               value={description}
               onChange={this.handleChange}
               required
            />
              <Form.Input
               label="Price"
               name="price"
               placeholder="price"
               value={price}
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


export default ProductForm;