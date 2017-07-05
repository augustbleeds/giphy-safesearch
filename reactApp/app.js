import React from 'react';
import ReactDOM from 'react-dom';

class GifBoard extends React.Component{
  render(){
    return (
      <p> I am a GifBoard </p>
    );
  }
}

class SearchBox extends React.Component{

  render(){
    return (
      <p> I am a search Box </p>
    );
  }
}

class GiphyApp extends React.Component{

  render(){
    return (
      <div>
        <SearchBox />
        <GifBoard />
      </div>
    );
  }

}



ReactDOM.render(<GiphyApp />,
   document.getElementById('root'));
