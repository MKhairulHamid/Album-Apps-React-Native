import React from 'react';
import { TouchableOpacity, Text , View, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle : {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff', 
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: '#007aff', 
        marginLeft: 5, 
        marginRight: 5
    },
    textStyle :{
        alignSelf: 'center', 
        color: '#007aff', 
        fontSize: 16, 
        fontWeight: '600', 
        paddingVertical : 10
    }
});

export default (props) => {
    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress = { props.onPress }
        >
            <View>
                <Text style={styles.textStyle}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}