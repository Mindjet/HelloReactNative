/**
 * Created by Mindjet on 3/8/17.
 */
'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, View, ProgressBarAndroid, Text, requireNativeComponent,} from 'react-native';

export default class LoadingView extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <ProgressBarAndroid/>
                    <Text>{this.props.hint}</Text>
                </View>
            </View>
        );
    }

}


let styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    wrapper: {
        padding: 30,
        width: 200,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        borderRadius: 20,
    },

    progressBar: {},

    text: {
        textAlign: 'center',
    },

});