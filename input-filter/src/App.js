import './App.css';
import { Component } from 'react';
import Search from './Components/Search';

class App extends Component {

  render() {

    const searchItems = [
      { name: 'Armenia' },
      { name: 'Italy' },
      { name: 'Usa' },
      { name: 'Switzerland' },
      { name: 'France' },
      { name: 'Cuba' },
      { name: 'Australia' },
      { name: 'Indonesia' },
      { name: 'Spain' },
      { name: 'Argentina' },
    ];

    return (
      <div className='main'>
        <Search items={searchItems} />
      </div>
    )
  }
}

export default App