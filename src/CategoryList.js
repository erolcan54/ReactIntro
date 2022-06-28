import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export class CategoryList extends Component {

  state={categories:[
    {CategoryId:1,CategoryName:"Beverages"},
    {CategoryId:2,CategoryName:"Condiments"},
  ],
  currentCategory:""
};

changeCategory=(cat)=>{
  this.setState({currentCategory:cat.CategoryId})
};

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          {
            this.state.categories.map(cat=>(
              <ListGroupItem onClick={()=>this.changeCategory(cat)} key={cat.CategoryId}>{cat.CategoryName}</ListGroupItem>
            ))
          }
          
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    )
  }
}
