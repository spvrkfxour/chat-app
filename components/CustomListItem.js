import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';


const CustomListItem = () => {
    return (
        <ListItem>
            <Avatar
            rounded
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Grumpy_Cat.png' }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: '800' }} >
                    Chat name
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    This is a test subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem;

const styles = StyleSheet.create({

});