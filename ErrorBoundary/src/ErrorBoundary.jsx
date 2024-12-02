import React, { Component } from 'react'

 class ErrorBoundary extends Component {

    constructor(props){
        super(props)

        this.state={
            hasError:false  //initializing state
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true   //setting property
        }
    }

  render() {
    if(this.state.hasError){
        return <h1>Something Went wrong</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary