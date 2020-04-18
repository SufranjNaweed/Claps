import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';
import MainLayout from '../../Layouts/MainLayout';
import ClapsCard from '../../Components/ClapsCard';
import axios from 'axios';

import {API_URL} from '../../Configs/API/index';

export default function Trends() {
    
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
         getGifs();
    },[]);
    
    const getGifs = async () => {
        try{
            let gifs = await axios.get(API_URL + 'gifs')
            .then((res) => {
                setGifs(res.data.data);
                return res.data.data;
            });

            return gifs;
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <MainLayout screenTitle='Trends'>
            <View style={{flex: 1}}>                
                {
                    gifs.length > 0 ?          
                    (
                        <FlatList 
                            data={gifs} 
                            keyExtractor={gif => gif.id} 
                            renderItem={(gif) => <ClapsCard data={gif} typeOfMedia="gifs" isFav={false} />}
                        />
                    ) : (
                        <View style={{flex: 1, alignItems: "center", justifyContent : 'center'}}>
                            <ActivityIndicator size="large" color="#0000ff"/>
                            <Text style={{textAlign : "center", fontSize : 22, fontWeight: "bold", letterSpacing: 2 ,marginTop: 30}}>🔥 Loading Trendy Gifs 🚀</Text>
                        </View>
                    )
                }
            </View>
        </MainLayout>
    );
}