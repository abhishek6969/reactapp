import React,{ Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";


class App extends Component{
  constructor(){
    super();
    this.state = {
      robots : [],
      searchField : '',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots : users}));
  }
  onSearch = (event)=>{
    this.setState({searchField : event.target.value});
  }
  render(){
    const { robots,searchField } = this.state;
    const filteredRobots = robots.filter(robot=>{
      return (
        robot.name.toLowerCase().includes(searchField)
      );
    });
    if (!robots.length){
      return(
        <h2>Loading...</h2>
      );
    }else{
      return(
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange = {this.onSearch}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots = {filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
        
      )
    }
  }
  
} 
export default App