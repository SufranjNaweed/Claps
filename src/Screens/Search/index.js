import React, {useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';

import axios from 'axios';
import {API_URL} from '../../Configs/API/';

export default function Search() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const updateSearch = (search) => {
        setSearchText(search);
    }

    const submitSearch = () => {
        setIsLoading(true)
        const url =  API_URL + 'gifs/search/' + searchText;
        axios.get(url)
            .then(res => {
                setSearchResults(res.data.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }

    return (
        <MainLayout screenTitle="search" style={{flex: 1}}>
            <View style={styles.searchContainer}>
                <View style={{flex: 4, margin: 0, padding: 0 }} >
                    <Input
                        placeholder=' Search gifs'
                        value={searchText}
                        onChangeText={updateSearch}
                    />
                </View>
                <View style={{flex: 1, margin: 0, padding: 0}} >
                    <Button
                        icon={
                            <Icon
                                name='search'
                                size={18}
                                color='white'
                            />
                        }
                        buttonStyle={{padding: 15}}
                        onPress={submitSearch}
                        loading={isLoading ? true: false}
                    />
                </View>
            </View>
            <View style={{flex : 2}}>
                <FlatList 
                    data={searchResults} 
                    keyExtractor={searchResult => searchResult.id} 
                    renderItem={(searchResult) => <ClapsCard data={searchResult} typeOfMedia="gifs" isFav={false} />}
                />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    searchContainer : {
        flex : 1,
        marginTop : 20,
        marginBottom : 20,
        maxHeight : 40,
        justifyContent : "center",
        flexDirection: "row",
        alignItems: "center",
    }
})