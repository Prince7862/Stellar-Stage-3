import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DailyPic extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Daily Picture Screen!</Text>
            </View>
        )
    }
}