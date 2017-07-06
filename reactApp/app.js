import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let giphyURL = 'https://api.giphy.com/v1/gifs/search';
let key = '5c1b64e50bbd46baa32e0411eb27651a';

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
        <div>{this.props.content.map(GifObj => <GifItem url={GifObj.embed_url} />)}</div>
    );
  }
}

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  handleTyping(e){
    this.setState({text: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.search(this.state.text);
    this.setState({text: ''});
  }

  render(){
    return (
      <form className="form-group">
        <input onChange={e => this.handleTyping(e)} value={this.state.text} type="text" placeholder="Search me!" className="form-control" />
        <input onClick={e => this.handleSubmit(e)} className="btn btn-default form-control" type="submit" value="Search" />
      </form>
    );
  }
}
/*
TODO:
1. search in GiphyApp
2. pass down gifObjs as a prop to GifBoard / pass down search to SearchBox

*/
class GiphyApp extends React.Component{

  constructor(props){
    super(props);
    this.state = {gifObjs: []};
  }

  // use axios to get data, filter, and put in constructor
  search(query){
    axios.get(giphyURL, {
      params: {
        api_key: key,
        q: query,
        limit: 15,
        rating: 'g',
      }
    })
      .then(gifArr => {
        this.setState({gifObjs: gifArr.data.data})
      })
      .catch(err => console.log('Error in search', err));
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
        </div>
        <div className="row" >
          <div className="col-xs-4 col-xs-offset-4">
            <SearchBox search={q => this.search(q)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
          <GifBoard content={this.state.gifObjs}/>
          </div>
        </div>
     </div>
    );
  }

}



ReactDOM.render(<GiphyApp />,
   document.getElementById('root'));
