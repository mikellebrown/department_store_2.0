import React from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
// import { Link, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import axios from 'axios';
 
class Products extends React.Component {
  state = { products: [], };

    componentDidMount() {
      
    axios.get(`/api/departments/${this.props.match.params.id}/products`)
      .then( res => {
        
        this.setState({ products: res.data, });

      })
      .catch( err => {
        
        console.log(err);
      })
  }
    
    renderProducts = () => {
    const { products, } = this.state; 
    if (products.length <= 0) 
    return <Header as="h2">Ain't Got None</Header> 
    return products.map( product => (
        <Card key={product.id}>
          <Card.Content>
            <Card.Header>{ product.name }</Card.Header>
            <Card.Meta>${ product.price }</Card.Meta>
            <Card.Description>
              {product.description}
            </Card.Description>
          </Card.Content>
            {/* <Card.Content extra>
            <Button as={Link} to={`/departments/:department_id/products`} color='black'>
              Back
            </Button>
          </Card.Content> */}
        </Card>
    ))
  };
  render() {
    return(
      <Container>
        <Header as="h1">Products</Header>
        <br />
        <br />
        <Card.Group>
        { this.renderProducts() }
        </Card.Group>
       
      </Container>

    )
  };
};





export default Products; 