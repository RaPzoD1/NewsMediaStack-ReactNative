import React, { useEffect, useState } from 'react';
import { services } from '../services'
import {NativeBaseProvider, ScrollView} from 'native-base';
//components
import Card from '../components/Card';
import SpinnerC from '../components/Spinner';
const All = () => {
    const [newsData, setNewsData] = useState([]);
    useEffect(()=>{
        services('general','es')
            .then(data => {
                setNewsData(data)
            })
            .catch(error => {
                alert(error)
            })            
    },[])

    return (
        <NativeBaseProvider>
            <ScrollView height={850}>
                {newsData.length ? (
                    <Card newsData={newsData} />
                ) : (
                    <SpinnerC />
                )}
            </ScrollView>
        </NativeBaseProvider>
    )
};


export default All;