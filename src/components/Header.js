import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.titleText}>Go Weather</Text>
        <Text style={styles.baseText}>An app to find weather</Text>
    </View>
)

export default Header

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        height: '10%',
        backgroundColor: '#02732A'
    },
    titleText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15
    },
    baseText: {
        color: '#fff',
        fontSize: 15,
        marginTop: 1,
        fontWeight: '600'
    }
})