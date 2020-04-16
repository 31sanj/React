import React from 'react';

class Car extends React.Component{

  constructor(props){
    super(props);
    this.state = {name: "sanjana",
                  age: 25,
                  username: "san31"};
  }

changeUser = () => {
  this.setState({name: "manish"});
}

render() {
return(
  <div>
<p>My name is {this.state.name}</p>
<p>My age is {this.state.age}</p>
<button type="button" onClick={this.changeUser}>Change name</button>
</div>
);
}
}


 export default Car;