import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { getWikipedaData, searchUpdate } from '../actions';
import { WebView } from 'react-native-webview';
import LottieView from 'lottie-react-native';

const Home = ({ route }) => {

    const { container } = styles;
    const title = route.params.title;

    return (
        <SafeAreaView style={container}>
            <WebView
                source={{ uri: `https://en.wikipedia.org/wiki/${title}` }}
                startInLoadingState={true}
                renderLoading={() => {
                    return <LottieView source={require('../components/common/loader.json')} autoPlay loop />;
                }}

            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

const mapStateToProps = (state) => {
    return {
        wiki: state.wiki
    }
}

export default connect(mapStateToProps, { getWikipedaData, searchUpdate })(Home);
