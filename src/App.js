import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';

class App extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        username: '',
        realName: '',
        avatar: '',
        location: '',
        repos: '',
        followers: '',
        description:'',
        url: '',
        notFound: '',
        cards:[]
      }
    }

    render() {
      return (
        <div>
        <Header />
        <div className="container">
        <Search onSubmitUsername={this.onSubmitUsername.bind(this)}/>
          <br />
          <Card data={this.state} />
        </div>
      </div>
      )
    }
    CardList = (props) =>{
      return(
        <div>
          {props.cards.map(card => <Card {...card} />)}
        </div>
      )
    }
    addNewCard = cardInfo => {
      this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo)
      }))
    }
  
    // the api request function
    fetchApi(url) { 
      
      fetch(url)
        .then((res) => res.json() )
        .then((data) => {
          
          // update state with API data
          this.setState({
            username: data.login,
            realName: data.name,
            avatar: data.avatar_url,
            location: data.location,
            repos: data.public_repos,
            followers: data.followers,
            description: data.bio,
            url: data.html_url,
            notFound: data.message
          })
        })
        .catch((err) => console.log('oh no!') )
    }
    
    onSubmitUsername(username) {
      let url = `https://api.github.com/users/${username}`
      this.fetchApi(url)
    }
    
    componentDidMount() {
      let url = `https://api.github.com/users/${this.state.username}`
      this.fetchApi(url)
    }
  }

export default App;
