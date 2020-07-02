import React, { Component } from 'react';
import './App.css';
import VillagersList from '../components/VillagersList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { villagers } from '../villagers';

class App extends Component {
    constructor() {
        super();
        this.state = {
            villagers: [],
            searchField: ''
        };
    }

    componentDidMount() {
        this.setState({ villagers });
    }

    onSearchChange = e => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { villagers, searchField } = this.state;
        const filteredvillagers = villagers.filter(villager => {
            return villager.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return !villagers.length
            ? <h1>Flying with Dodo Airlines . . .</h1>
            : (
                <div className='tc'>
                    <div className='bg-light-green'>
                        <h1 className='f4 ma1 blue'>myACNH.online</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                    <Scroll>
                        <ErrorBoundry>
                            <VillagersList villagers={filteredvillagers} />
                        </ErrorBoundry>
                    </Scroll>
                    <div>
                        <p className='f7 white'>Made with <span role="img" aria-label="heart">💖</span> by BaconCandy</p>
                        <p className='f7 white'>myACNH.online is a fan-made website</p>
                        <p className='f7 white'>and is in no way affiliated with Nintendo</p>
                    </div>
                </div>
            );
    }
}

export default App;