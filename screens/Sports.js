import { NativeBaseProvider, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { services } from '../services';
//components
import Card from '../components/Card';
import SpinnerC from '../components/Spinner';

const Sports = () => {
    const [newsSports, setNewsSports] = useState([]);

    useEffect(()=> {
        services('sports','es')
            .then(data => setNewsSports(data))
            .catch(error => alert(error))
    },[]);

    return(
        <NativeBaseProvider>
            <ScrollView height={850}>
                {newsSports.length ? (
                    <Card newsData={newsSports}/>
                ):(
                    <SpinnerC />
                )}
            </ScrollView>
        </NativeBaseProvider>
    )
};

export default Sports;