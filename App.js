import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

class App extends React.Component {
    
    render () {
    
        return (
            <View>
                
                    <Header headerText= "Albums" />
                    <AlbumList />
                
            </View>
        )
    }
}

export default App;