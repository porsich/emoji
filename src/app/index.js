import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.store = {};
    }

    render() {
        return (
            <View>
                <Text> Emoji App </Text>
            </View>
        );
    }
}
