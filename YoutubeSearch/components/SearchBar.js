import React from 'react';
import { View, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

class SearchBar extends React.Component{

    state={ term: ''};

    render(){
  
        return (

        <View style={styles.containerStyle}>

        <TextInput style={styles.searchTextStyle}
        onChangeText={term => this.setState({term})}
        value={this.state.term} />
        
        <Button 
          buttonStyle={styles.buttonStyle}
          title= {this.props.loading ? 'Loading...' : 'Search'} 
          onPress={() => this.props.onPressSearch(this.state.term)}
        />

      </View>

        );
    }
}

const styles = {
    containerStyle: {
      marginTop: 75,
      marginLeft: 10,
      margineRight: 10,
      flexDirection: 'row'
    },
  
    searchTextStyle: {
      flex: 1
    },
  
    buttonStyle: {
      marginBottom: 8,
      height: 30
    }
  };

export default SearchBar;