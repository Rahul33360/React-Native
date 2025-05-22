import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string) {
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Js in 22
            </Text>
        </View>
        <Image source={{
            uri:'https://in.pinterest.com/pin/9077636743816501/',
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://leetcode.com/u/Rahul_kr_6485/')} 
            >
                <Text>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        
    },
    cardImage: {
        height:100,
        width:50,
    },
    card: {

    },
    elevatedCard: {

    },
    headingContainer: {

    },
    footerContainer: {

    },

    headerText: {

    },
    bodyContainer: {

    },

})