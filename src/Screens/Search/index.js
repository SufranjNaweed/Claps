import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import { SearchBar } from 'react-native-elements';
import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';

import axios from 'axios';
import {API_URL} from '../../Configs/API/';
import { useFetch } from '../../CustomsHooks/useFetch';

export default function Search() {
    const [searchText, setSearchText] = useState('gift');
    const [searchResults, setSearchResults] = useState([]);
   
    

    const {fetchedDatas, loading} = useFetch(API_URL + 'gifs/search/' + searchText)
    console.log("Search -> fetchedDatas", fetchedDatas)


    useEffect(() => {
        console.log("mount")
        console.log('-------------------------------------------')
      
        console.log('-------------------------------------------')


        return () => {
            console.log('unmout')
        }
    }, [searchText])

    const updateSearch = (search) => {
        setSearchText(search);
    }

    const clearSearch = () => {
        setSearchText('');
    }

    return (
        <MainLayout screenTitle="search" >
            <SearchBar 
                placeholder="Type Here..."
                value={searchText}
                lightTheme={true}
                round={true}
                onChangeText={updateSearch}
                onClear={clearSearch}
            />
            <View style={{flex: 1}}>
                <FlatList 
                    data={fetchedDatas} 
                    keyExtractor={fetchedData => fetchedData.id} 
                    renderItem={(fetchedData) => <ClapsCard data={fetchedData} typeOfMedia="gifs" isFav={false} />}
                />
            </View>
        </MainLayout>
    );
}