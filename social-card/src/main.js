import React from 'react';
import Image from './image.js';
import Description from './description.js';
import Author from './author.js';


class Main extends React.Component {

  main(){
    const main = {
      marginLeft: '50px',
      maxWidth: 'fit-content',
      position: 'relative'
    };
    return main;
  }

  render(){
    return (
      <div style={this.main()}>
        <Image />
        <Description state={this.props.state} />
        <Author author={this.props.state.author} image={this.props.state.authorImg}  />
      </div>
    );
  }
}

export default Main;
