import { NativeBaseProvider, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { services } from '../services';
//components
import Card from '../components/Card';
import SpinnerC from '../components/Spinner';
const Business = () => {
    const [newsBusiness, setNewsBusiness] = useState([]);

    useEffect(()=> {
        services('business','es')
            .then(data => setNewsBusiness(data))
            .catch(error => alert(error))
    },[]);

    return(
        <NativeBaseProvider>
            <ScrollView height={850}>
                {newsBusiness.length ? (
                    <Card newsData={newsBusiness}/>
                ):(
                    <SpinnerC />
                )}
            </ScrollView>
        </NativeBaseProvider>
    )
};

export default Business;