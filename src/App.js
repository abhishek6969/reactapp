import React,{ useEffect,useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";


function App() {
  // constructor(){
  //   super();
  //   this.state = {
  //     robots : [],
  //     searchField : '',
  //   }
  // }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({robots : users}));
  // }
  console.log('updated hooks')
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users));
  },[])//empty aray added to loop only if whatever inside array changes in this case empty so basicallly it is  component didmount
  const [robots,setRobots] = useState([])
  const [searchField,setSearchField] = useState('')
   const onSearch = (event)=>{
    setSearchField(event.target.value);
  }
  // const { robots,searchField } = this.state;
  const filteredRobots = robots.filter(robot=>{
    return (
      robot.name.toLowerCase().includes(searchField)
    );
  });
  console.log(robots,searchField)
  if (!robots.length){
    return(
      <h2>Loading...</h2>
    );
  }else{
    return(
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange = {onSearch}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
      
    )
  }
} 
export default App
