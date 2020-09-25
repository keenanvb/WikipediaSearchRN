import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Card from '../common/Card';

const WikiDetailList = ({ data, navigation }) => {

    const { title, snippet } = data
    const { textStyle, snippetStyle } = styles;

    let cleanSnippet = snippet.replace(/<\/?[^>]+(>|$)/g, "");

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('WikiWebView', {
                title: title
            });
        }}>
            <Card>
                <Text style={textStyle}>{title}</Text>
                <Text style={snippetStyle}>{cleanSnippet}</Text>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        margin: 5,
        paddingLeft: 10,
        paddingTop: 10,
        color: '#05375a',
        fontSize: 20,
    },
    snippetStyle: {
        margin: 5,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 14,
    }
});

export default connect(null, {})(WikiDetailList);