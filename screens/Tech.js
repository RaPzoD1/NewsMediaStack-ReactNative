import { NativeBaseProvider, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { services } from '../services';
//components
import Card from '../components/Card';
import SpinnerC from '../components/Spinner';
const Tech = () => {
    const [newsTech, setNewsTech] = useState([]);

    useEffect(()=> {
        services('technology','us')
            .then(data => setNewsTech(data))
            .catch(error => alert(error))
    },[]);

    return(
        <NativeBaseProvider>
            <ScrollView height={850}>
                {newsTech.length ? (
                    <Card newsData={newsTech}/>
                ):(
                    <SpinnerC />
                )}
            </ScrollView>
        </NativeBaseProvider>
    )
};

export default Tech;