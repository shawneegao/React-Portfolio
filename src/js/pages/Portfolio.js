import React from "react"

export default class Portfolio extends React.Component{
  constructor(){
    super();
    this.state = {
      dog:"Dog"
    };
  }
  handleChange(e){
    this.setState({dog:e.target.value})
  }
  render(){
    console.log(this.props);
    const {images} = this.props.params.image;
    const {dog, human} = this.props.location.query;
    return(
      <div>
        <h1>Portfolio{images}</h1>
        <input value = {this.state.dog} onChange = {this.handleChange.bind(this)}/>
        <h1>Portfolio{this.state.dog}</h1>
        <h1></h1>
      </div>
    );
  }
}
