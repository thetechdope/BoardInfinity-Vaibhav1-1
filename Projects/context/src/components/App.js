import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {

    // State Initialisation

    state = {
        language: 'english'
    }

    onLanguageChange = (language) => {
        this.setState({ language }, () => {
            console.log("Updated State : ", this.state.language);
        });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag uk" onClick={() => { this.onLanguageChange('english') }} />
                    <i className="flag in" onClick={() => { this.onLanguageChange('hindi') }} />
                    <br />

                    <LanguageContext.Provider value={this.state.language}>
                        <ColorContext.Provider value="green">
                            <UserCreate />
                        </ColorContext.Provider>
                    </LanguageContext.Provider>

                </div>
            </div>
        );
    }
}

export default App;