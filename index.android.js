/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, View, Text, Image, ListView,} from 'react-native';
import LoadingView from './component/LoadingView.js';

let GITHUB_URL = 'https://api.github.com/users/JakeWharton/followers';

let currentPage = 1;
let perPage = 5;

let HelloReactNative = React.createClass({

    render() {
        if (!this.state.loaded) {
            return <LoadingView hint="Loading..."/>;
        }
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this.renderItem} style={styles.listView}/>
        );
    },

    renderLoadingView() {
        return (
            <LoadingView/>
        );
    },

    renderItem(item) {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                uri: item.avatar_url
                }}
                    style={styles.poster}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{item.login}</Text>
                    <Text style={styles.subtitle}>{item.html_url}</Text>
                </View>
            </View>
        );
    },

    getInitialState() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },

    fetchData() {
        fetch(GITHUB_URL, {"page": currentPage, "per_page": perPage})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true,
                });
            })
            .done();
    },

    componentDidMount() {
        this.fetchData();
    },

});

let styles = StyleSheet.create({
    listView: {
        backgroundColor: '#f1f1f1',
    },
    container: {
        // flex: 1,
        // justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#c3c3c3',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        color: 'black',
        fontSize: 20,
    },
    subtitle: {
        textAlign: 'center',
        padding: 20,
        color: 'grey',
        fontSize: 15,
    },
    poster: {
        width: 100,
        height: 150,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
