import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class ProductView extends React.Component{
  state = { product: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/products/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ product: res.data, });
      
      })
      .catch(err => {
        console.log(err)
      })
      
  }
  
    deleteProduct(id) {
      axios.delete(`/api/departments/${this.props.match.params.department_id}/products/${id}`)
      .then( res => {
        this.props.history.push(`/departments/${this.props.match.params.department_id}/products`);
      })
      .catch( err => {
        console.log(err);
      })

    };
    render() {
      
      const { name, description, price } = this.state.product;

    return(
      <div>
      <Segment>
        <Header as="h1" color="grey">{ name }</Header>
        <Header as="h2" color="grey">{ description }</Header>
        <Header as="h2" color="grey">${ price }</Header>
      </Segment>
      <br />
      <br />
      <Button as={Link} to={`/departments/${this.props.match.params.department_id}/products`} color="black"
      >  
        Back
      </Button>
      <Button as={Link} 
      to={`/products/${this.props.match.params.id}/edit`} color="black"
      >
        Edit
      </Button>
      <Button onClick={() => this.deleteProduct(this.props.match.params.id)} color='black'>
         Delete
       </Button>
    </div>
    )
  }
}





export default ProductView;