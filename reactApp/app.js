import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = [{
  embed_url : "https://giphy.com/embed/Yzk0KZhgcPdbW",
  rating: "g",
}, {
  embed_url: "https://giphy.com/embed/d31xaEJuFKwdgmqc",
  rating: "g",
}, {
  embed_url: "https://giphy.com/embed/138btjfXAn1xyo",
  rating: "g",
}, {
  embed_url: "https://giphy.com/embed/CidndLIDBmYo0",
  rating: "g",
}, {
  embed_url : "https://giphy.com/embed/Yzk0KZhgcPdbW",
  rating: "g",
}, {
  embed_url: "https://giphy.com/embed/d31xaEJuFKwdgmqc",
  rating: "g",
}, {
  embed_url: "https://giphy.com/embed/138btjfXAn1xyo",
  rating: "g",
}, {
  embed_url: "https://giphy.com/embed/CidndLIDBmYo0",
  rating: "g",
}, {
  embed_url: "https://giphy.com/embed/CidndLIDBmYo0",
  rating: "g",
}];

class GifItem extends React.Component{
  render(){
    return (
        <iframe src={this.props.url} width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    );
  }
}

class GifBoard extends React.Component{
  render(){
    return (
        <div>{dummyData.map(GifObj => <GifItem url={GifObj.embed_url} />)}</div>
    );
  }
}

class SearchBox extends React.Component{

  render(){
    return (
      <form className="form-group">
        <input type="text" placeholder="Search me!" className="form-control" /> <input className="btn btn-default form-control" type="submit" value="Search" />
      </form>
    );
  }
}

class GiphyApp extends React.Component{

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
        </div>
        <div className="row" >
          <div className="col-xs-4 col-xs-offset-4">
            <SearchBox />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
          <GifBoard />
          </div>
        </div>
     </div>
    );
  }

}



ReactDOM.render(<GiphyApp />,
   document.getElementById('root'));
