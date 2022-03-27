import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';

export default () => {
    return(
        <LinearGradient colors={['#915CED', '#483766']} style={{flex:1}}>
            <View style={styles.homePage}>
                <>
                    <Text style={styles.fontTittle}>
                        GITSEARCH
                    </Text>
                    <View style={styles.test}>
                        <TextInput 
                            placeholder="User name"
                            style={styles.inputStyle} 
                        >
                            
                        </TextInput>
                        <Icon name="search-outline" size={30} color="#000" style={styles.myIcon}/>
                    </View>
                </>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    homePage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    fontTittle:{
        fontSize: 45,
    },
    test:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputStyle:{
        width:364,
        height: 51,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderRadius: 29,
        borderColor: '#5E5175',
        paddingLeft: 10,
        backgroundColor: '#B89EE6',
        
    },
    myIcon:{
        position: 'absolute',
        backgroundColor:'#6A44AD',
        right: 5,
        borderRadius:30,
        padding:5
    }
})
