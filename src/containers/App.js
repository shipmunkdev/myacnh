import React, { Component } from 'react';
import './App.css';
import VillagersList from '../components/VillagersList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { villagers } from '../villagers';

class App extends Component {
    render() {
        return !villagers.length
            ? <h1>Flying with Dodo Airlines . . .</h1>
            : (
                <div className='tc'>
                    <div className='bg-light-green'>
                        <h1 className='f4 ma1 blue'>myACNH.online</h1>
                    </div>
                    <Scroll>
                        <ErrorBoundry>
                            <VillagersList villagers={villagers} />
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