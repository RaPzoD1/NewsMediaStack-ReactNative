import { NativeBaseProvider, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { services } from '../services';
//components
import Card from '../components/Card';
import SpinnerC from '../components/Spinner';

const Health = () => {
    const [newsHealth, setNewsHealth] = useState([]);

    useEffect(()=> {
        services('health','us')
            .then(data => setNewsHealth(data))
            .catch(error => alert(error))
    },[]);

    return(
        <NativeBaseProvider>
            <ScrollView height={850}>
                {newsHealth.length ? (
                    <Card newsData={newsHealth}/>
                ):(
                    <SpinnerC />
                )}
            </ScrollView>
        </NativeBaseProvider>
    )
};

export default Health;