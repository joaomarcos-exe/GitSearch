import React from "react";
import {TextInput, Text, KeyboardAvoidingView, Platform} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style'
import Input from '../../components/input/index'

export default () => {
    return(
        <LinearGradient colors={['#915CED', '#483766']} style={styles.homePage}>
            <Text style={styles.title}>GIT SEARCH</Text>
            <Input />
        </LinearGradient>
    )
}


