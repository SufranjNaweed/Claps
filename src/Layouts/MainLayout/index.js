import React from 'react';
import { View } from 'react-native';

import styles from '../../Styles/MainLayout';
import Header from '../../Components/Header';

const MainLayout = (props) => {
    return (
        <>
            <Header screenTitle={props.screenTitle}/>
            <View style={styles.mainContainer}>
                {props.children}
            </View>
        </>
    );
}
 
export default MainLayout;