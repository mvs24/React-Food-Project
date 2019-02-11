import React, { Component } from 'react';
import './App.css';
 import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import {recipes} from './tempList';


class App extends Component {

  state={
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=5fb4ca96b0d54ca11875e3cdd42df912",
    details_id:35380,
    base_url:"https://www.food2fork.com/api/search?key=5fb4ca96b0d54ca11875e3cdd42df912",
    pageIndex:1,
    search:'',
    query:'&q='
  };

  async getRecipes(){
 
    const data = await fetch(this.state.url);
    const jsonData=await data.json();
    // console.log(jsonData);
    // if(jsonData.recipes.length===0){
    //   this.setState({
    //     error:"Did not find any results"
    //   })
    // }else{
       this.setState({
        recipes:jsonData.recipes
      })
    } 
 
    
  

  componentDidMount(){
    this.getRecipes()
  }

  displayPage=(index)=>{
    switch(index){
      default:
      case 1:
      return(<RecipeList handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.search} handleDetails={this.handleDetails} recipes={this.state.recipes} />)
      case 0:
      return(
       <RecipeDetails handleIndex={this.handleIndex} id={this.state.details_id} />
      )
    }
  }

  handleIndex=index=>{
    this.setState({
      pageIndex:index
    })
  };

  handleDetails=(index,id)=>{
    this.setState({
      pageIndex:index,
      details_id:id
    })
  };

  handleChange=(e)=>{
    this.setState({
      search:e.target.value
    },()=>{
      // console.log(this.state.search)
    })    
  };

  handleSubmit=e=>{
    e.preventDefault();
    const{base_url,query,search}=this.state;
    this.setState(()=>{
      return {url:`${base_url}${query}${search}`,search:`${search}`}
    },()=>{
      this.getRecipes();
    })
  };
  

  render() {
    // console.log(this.state.recipes);
    
    return (
     <React.Fragment>
       {this.displayPage(this.state.pageIndex)}
     </React.Fragment>
    );
  }
}

export default App;
