import React, { Component } from 'react';
import Input from './components/Input';
import Loader from './components/Loader';
import Search from './components/Search';
import Header from './components/Header';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
  constructor() {
    super();
  
    this.state = {
      // det man skriver i inputfältet
      value: '',
      // data som vi hämtar
      items: [],
      isLoading: false,
      // spara det vi sökt på 
      searchResult: null,
      searchOk: null,
      error: false,
    }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  // To handle search
  handleChange(e) {
    // ändra value state till det som vi skrev i input
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    let searchResult = [];
  // Go through everything in items
  // See if it matches with the value of input
    for (var i = 0; i < this.state.items.length; i++) {
      if (
        this.state.items[i].name.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1) {
        console.log('MATCH!');
        // det vi hittar lägger vi i variabeln searchResult
        searchResult.push(this.state.items[i]);
        console.log(searchResult);
      } else {  
        console.log('No matches on your search, try again');
      }
    }
    e.preventDefault();

    // If we have something in the object searchResult
    if(searchResult.length > 0) {
      this.setState({
        error: false,
        searchOk: true,
        value: '',
        searchResult: searchResult
      })
    } else {
      this.setState({
        error: true,
        searchOk: false,
        value: '',
        searchResult: []
      })
    }
  }

  // call to the API 
  componentDidMount() {
    this.setState({ isLoading: ! this.state.isLoading })
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data,
          error: false
        });
        this.setState({ isLoading: ! this.state.isLoading })
        console.log(data);
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">

          <Header />
          
          <Loader isLoading={this.state.isLoading} />

          <Input 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            value={this.state.value} 
            searchOk={this.state.searchOk}
          />

          {this.state.error ? <p className="errorMsg">No match on the search <i className="fa fa-frown-o" aria-hidden="true"></i>
<br /> Try again!</p> : null }

          <Search search={this.state.searchResult} />

      </div>
    );
  }
}

export default App;
