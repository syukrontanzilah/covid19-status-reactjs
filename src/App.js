import React, { Component } from 'react';
import './App.css';
import CountryList from './component/CountryList/CountryList';
import Search from './component/Search/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      stats: [],
      searchField: '',
    }
    this.handleChange = this.handleChange.bind(this)
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
          { stats: prevState.stats.concat({ ...data[data.length - 1], CountryCode: country.ISO2 }) }
        ))
    })
  }

  handleChange =(e) =>{
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { stats, searchField } = this.state
    const filterCountries = stats.filter(country => (
      country.Country.toLowerCase().includes(searchField.toLowerCase())

    ))
    return (
      <div className='App'>
        <Search
          handleChange={this.handleChange}
          placeholder='Search Contry ...' />
        <CountryList stats={filterCountries} />
      </div>
    )
  }
}

export default App;
