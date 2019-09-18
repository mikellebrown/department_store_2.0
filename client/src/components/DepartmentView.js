import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class DepartmentView extends React.Component{
  state = { department: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      
      })
      .catch(err => {
        console.log(err)
      })
      
  }

  deleteDepartment(id) {
    axios.delete(`/api/departments/${id}`)
     .then( res => {
       this.props.history.push(`/departments`);
     })
     .catch( err => {
       console.log(err);
     })

  };
    render() {
      
      const { name, } = this.state.department;

    return(
      <div>
      <Segment>
        <Header as="h1" color="grey">{ name }</Header>
      </Segment>
      <br />
      <br />
      <Button 
        color="black" 
        onClick={this.props.history.goBack}
      >
        Back
      </Button>
      <Button as={Link} 
      to={`/products/${this.props.match.params.id}/edit`} color="black"
      >
        Edit
      </Button>
      <Button onClick={() => this.deleteDepartment(this.props.match.params.id)} color='black'>
         Delete
       </Button>
      <Button as={Link} color="black" to={`/departments/${this.props.match.params.id}/products`}>  
        View Products
      </Button>
      
    </div>
    )
  }
}





export default DepartmentView;