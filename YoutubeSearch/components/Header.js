import React from 'react';
import {Header} from 'react-native-elements';

const AppHeader = (props) => (

        <Header 
          centerComponent={{text: 'Youtube Search', style: {color: 'white'} }}
          outerContainerStyles={{backgroundColor: '#E62117'}}
        />
    );


export default AppHeader;