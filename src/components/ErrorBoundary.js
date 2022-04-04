import React,{Component} from "react";

class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasError : false
    }
  }
  componentDidCatch(eror,info){
    this.setState({hasError:true})
  }
  render(){
    if(this.state.hasError){
      return(
        <div>
          <h1>Oops this is not good!</h1>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;