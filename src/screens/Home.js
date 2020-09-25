import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { getWikipedaData, searchUpdate } from '../actions';
import LottieView from 'lottie-react-native';
import InputText from '../components/common/InputText';
import WikiDetailList from '../components/Wiki/WikiDetailList';
import _ from 'lodash';

const Home = ({ wiki: { search, loading, wikiData }, getWikipedaData, searchUpdate, navigation }) => {

    const [formData, setFormData] = useState({
        searchInput: '',
    });

    const onFormDataChange = async (name, text) => {
        setFormData({ ...formData, [name]: text });
        searchUpdate({ prop: 'search', value: text });
        await callAPI();
    };
    const { searchInput } = formData;

    const { container, searchContainer, lottieContainer } = styles;


    const callAPI = _.debounce(async () => {
        try {
            getWikipedaData()
        } catch (err) {
            console.log('err', err);
        }
    }, 2000);


    let renderWikiList = () => {
        if (loading || search == '') {
            return (
                <View style={lottieContainer}>
                    <LottieView source={require('../components/common/loader.json')} autoPlay loop />
                </View>
            );
        }

        return wikiData.map(data => <WikiDetailList key={data.pageid} data={data} navigation={navigation} />)
    }

    return (
        <View style={container}>
            <SafeAreaView>
                <View style={searchContainer}>
                    <KeyboardAvoidingView behavior="padding">
                        <InputText
                            label={'Search'}
                            iconName={'search'}
                            value={searchInput}
                            placeholder={'Search Wikipedia Articles'}
                            onChangeText={(value) => { onFormDataChange('searchInput', value) }}
                        />
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
            <ScrollView>
                {renderWikiList()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchContainer: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    lottieContainer: {
        height: 400,
        width: 400,
    }
});

const mapStateToProps = (state) => {
    return {
        wiki: state.wiki
    }
}

export default connect(mapStateToProps, { getWikipedaData, searchUpdate })(Home);
