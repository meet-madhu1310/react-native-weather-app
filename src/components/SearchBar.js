import React from 'react'
import { StyleSheet } from 'react-native'

import { Container, Item, Input, Button, Text, Icon, Header } from 'native-base'


const SearchBar = () => (
    <Container style={styles.container}>
        <Header style={styles.header} searchBar transparent>
            <Item style={styles.searchbar}>
                <Icon name="ios-search" />
                <Input placeholder="enter city" />
            </Item>
            <Button style={styles.searchButton} transparent>
                <Text style={{color: '#02732A', marginLeft: -10}}>Search</Text>
            </Button>
        </Header>
    </Container>
)

export default SearchBar

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0
    },
    header: {
        padding: 0,
        margin: 0
    },
    searchbar: {
        marginTop: -10,
        height: 40,
        borderRadius: 10
    },
    searchButton: {
        marginTop: -10,
        maxWidth: 80,
        padding: 0
    }
})