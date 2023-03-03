import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import CustomListItem from '../components/CustomListItem';
import { auth, db } from '../firebase';


const HomeScreen = ({ navigation }) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        });
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Hurricane',
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
            headerLeft: () => {
                return (
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity onPress={ signOutUser } activeOpacity={0.5}>
                            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}/>
                        </TouchableOpacity>
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={{ 
                        marginRight: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 80,
                        }}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <AntDesign name='camerao' size={24} color='white' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>
                            <SimpleLineIcons name='pencil' size={24} color='white' />
                        </TouchableOpacity>
                    </View>
                )
            },
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

});
