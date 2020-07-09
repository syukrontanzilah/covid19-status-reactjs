import React, { Component } from 'react';
import './App.css';
import CountryList from './component/CountryList/CountryList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      stats: []
    }
  }

  async componentDidMount() {
    const resp = await fetch('https://api.covid19api.com/countries')
    const countries = await resp.json()
    this.setState({ countries })
    this.state.countries.forEach(async country => {
      const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
      const data = await resp.json()
      if (data.length)
        this.setState(prevState => (
          { stats: prevState.stats.concat({...data[data.length - 1],CountryCode:country.ISO2}) }
        ))
    })
  }

  render() {
    return (
      <div className='App'>
        <CountryList stats = {this.state.stats}/>
      </div>
    )
  }
}

export default App;
