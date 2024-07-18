import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

const { width: screenWidth } = Dimensions.get('window');

function SurfingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Image
                    source={require('../assets/aloha.png')}
                    style={styles.header}
                />
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../assets/home_surfing.png')}
                        style={styles.image}
                    />
                    <View style={styles.overlayTextContainer}>
                        <Text style={styles.overlayText}>Surfing</Text>

                    </View>
                </View>
                <View style={styles.highlightsContainer}>
                    <Text style={styles.highlightsHeader}>Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.</Text>
                    <Text style={styles.topspotsHeader}>Top Spots</Text>
                </View>

                {/* Categories*/}

                <ScrollView
                    style={styles.spotContainer}
                    contentContainerStyle={styles.categoriesContent}
                >
                   
                    <View style={styles.cardCategories}>
                        <View style={styles.cardCategoryTextContainer}>
                            <Text style={styles.cardCategoryText1}>1. Maui</Text>
                            <View style={styles.cardCategoryIconContainer}>
                                <Image
                                    source={require('../assets/spot_maui.png')}
                                    style={styles.cardCategoryIcon}
                                />
                            </View>
                        </View>
                    </View>
                    {/* Repeat for other categories */}
                    <View style={styles.cardCategories}>
                        <View style={styles.cardCategoryTextContainer}>
                            <Text style={styles.cardCategoryText1}>2. Kauai</Text>
                            <View style={styles.cardCategoryIconContainer}>
                                <Image
                                    source={require('../assets/spot_kaui.png')}
                                    style={styles.cardCategoryIcon}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cardCategories}>
                        <View style={styles.cardCategoryTextContainer}>
                            <Text style={styles.cardCategoryText1}>3. Honolulu</Text>
                            <View style={styles.cardCategoryIconContainer}>
                                <Image
                                    source={require('../assets/spot_honalu.png')}
                                    style={styles.cardCategoryIcon}
                                />
                            </View>
                        </View>
                    </View>



                </ScrollView>
                <ScrollView
                    style={styles.categoriesContainer}
                    contentContainerStyle={styles.categoriesContent}
                >
                    <Text style={styles.travelguideHeader}>Travel Guide</Text>



                    <View style={styles.tcontainer}>
                        <View style={styles.ttextContainer}>
                            <Text style={styles.tname}>Hadwin Malone</Text>
                            <Text style={styles.tsubtitle}>Guide since 2012</Text>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.buttonTitle}>Contact</Text>
                            </TouchableOpacity>
                        </View>
                        <Avatar
                            rounded
                            size="large"
                            source={require('../assets/travelguide.png')} // Replace with the actual image path
                            containerStyle={styles.tavatar}
                        />

                    </View>

                </ScrollView>
            </ScrollView>
            <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book a trip</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },

    header: {
        fontSize: 36,
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch',
    },
    headerContainer: {

        position: 'relative',
        width: '100%',
        alignItems: 'center',
        backgroundColor:'#ffffff',
        justifyContent: 'center',
    },
    overlayTextContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        top: 0,
    },
    overlayText: {
        fontSize: 60, // Adjust font size as needed
        color: 'white', // Adjust text color as needed
        fontWeight: 'bold',
        opacity: 0.7,
        fontFamily: 'IBMPlexMono-Regular'
    },
    overlayText1: {
        fontSize: 60, // Adjust font size as needed
        color: 'white', // Adjust text color as needed
        fontWeight: 'bold',
        opacity: 0.8,
        fontFamily: 'IBMPlexMono-Regular'
    },
    highlightsContainer: {
        width: '100%',
        paddingHorizontal: 5,
        backgroundColor:'#ffffff',
        marginTop: 20,
      
    },
    spotContainer: {
        marginTop: 0,
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
    },

    categoriesContainer: {
        marginTop: 25,
        flex: 1,
        width: '100%',
        backgroundColor: '#e6f2f2',
    },
    categoriesContent: {
        paddingHorizontal: 10,
        marginTop: 10,
        paddingBottom: 20,
    },
    highlightsHeader: {
        padding: 10,
        fontSize: 16,
        fontFamily: 'IBMPlexMono-Regular',
        marginBottom: 10,
        color: 'black',
    },
    topspotsHeader: {
      marginLeft:10,
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'IBMPlexMono-Bold',
        marginBottom: 10,
        color: 'black',
    },
    travelguideHeader: {
        fontSize: 18,
        fontFamily: 'IBMPlexMono-Bold',
        marginBottom: 10,
        marginTop: 20,
        color: 'black',
    },
    cardsContainer: {
        flexDirection: 'row',
    },
    cardCategories: {
        width: '100%',
        height: 60,
        marginVertical: 6,
        backgroundColor: '#fff',
        borderRadius: 8,
         overflow: 'hidden', // Commented out
         shadowColor: '#000', // Black shadow color for iOS
         shadowOffset: { width: 0, height: 10 }, // Increased shadow offset for iOS
         shadowOpacity: 0.25, // Shadow opacity for iOS
         shadowRadius: 10, // Shadow radius for iOS
         elevation: 10, // Elevation for Android
    },
    cardCategoryTextContainer: {

        flexDirection: 'row',
        alignItems: 'center',

        paddingLeft: 10,
    },
    cardCategoryText1: {
        fontSize: 14,
        fontFamily: 'IBMPlexMono-Bold',
        color: '#008080',
        flex: 1,
    },

    cardCategoryIconContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    cardCategoryIcon: {
        height: '100%',
        resizeMode: 'stretch',
    },
    cardText: {
        fontSize: 16, // Larger text size
        fontFamily: 'IBMPlexMono-Bold',
        color: '#008080', // Set the text color
        marginRight: 5, // Space between text and icon
        paddingLeft: 5,
        flex: 1, // Allow text to take available space
    },
    cardText1: {
        fontSize: 14, // Smaller text size
        fontFamily: 'IBMPlexMono-Regular',
        color: '#333', // Adjust color if needed
        textAlign: 'left', paddingLeft: 5,
        flexWrap: 'wrap', // Ensure text wraps within the container
    },
    cardContent: {
        flexDirection: 'row', // Align text and icon horizontally
        alignItems: 'center',
        marginBottom: 5, // Space between text and additional description
    },

    contactcard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: 'lightgray',
        borderRadius: 5,
        marginBottom: 10,
    },

    card: {
        width: screenWidth * 0.6, // Set card width to 80% of screen width
        height: 260, // Increased height for better visibility of content
        marginRight: 10, // Space between cards
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
        // Added padding inside the card
    },
    cardImage: {
        width: '100%',
        height: '50%', // Adjusted height to allow more space for text
        resizeMode: 'cover',
        marginBottom: 10, // Space between image and text
    },
    cardIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5, // Space above the icon
        alignSelf: 'flex-end', // Aligns the container to the rightmost edge
    },
    cardIcon: {
        width: 32, // Increased width of the icon
        height: 32, // Increased height of the icon
        resizeMode: 'contain',
        marginBottom: 5,
        marginLeft: 0, // Space between text and icon
    },
    cardTextContainer: {
        marginTop: 5,
    },
    cardIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5, // Space above the icon
        alignSelf: 'flex-end', // Aligns the container to the rightmost edge
    },
    travelguidecard: {
        width: '100%', // Set card width to 80% of screen width
        height: 260, // Increased height for better visibility of content
        marginRight: 10, // Space between cards
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
        flexDirection: 'row', // Ensure content and image are in a row
        alignItems: 'center', // Align items vertically in the center
        padding: 10, // Added padding inside the card
    },
    travelguideContent: {
        flex: 1, // Take up remaining space
        marginRight: 10, // Space between text and image
    },
    travelguideImage: {
        width: 100,
        height: 100, // Keep a square aspect ratio
        borderRadius: 50, // Rounded corners for circular image
    },
    tcontainer: {
        flexDirection: 'row',
        alignItems: 'Top',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        height: 150,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,

    },
    ttextContainer: {
        flex: 1,
        justifyContent: 'Top',
    },
    tavatar: {
        marginLeft: 10,
    },
    tname: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'IBMPlexMono-Regular'
    },
    tsubtitle: {
        marginTop:10,
        fontSize: 16,
        color: '#666',
        fontFamily: 'IBMPlexMono-Regular'
    },
    tbuttonContainer: {
        marginTop:20,
        width: '60',
        borderColor: '#008080',
        position: 'absolute',
        bottom: 10,
        right: 10,
        left: 10,
    },
    button: {
        marginTop: 10,
        width: '50%',
        borderColor: '#008080',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'transparent',
    },
    buttonTitle: {
        color: '#008080',
        textAlign: 'center',
        fontFamily: 'IBMPlexMono-Bold'
    },
    scontainer: {
        width: '150%',
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    stext: {
        fontSize: 14,
        fontFamily: 'IBMPlexMono-Bold',
        color: '#008080',
        alignItems: 'center',
        flex: 0.5,
    },
    simage: {
        width: '100%',
        height: 100,
        borderTopEndRadius: 10,
        resizeMode: 'stretch',
    },
    scrollViewContent: {
        alignItems: 'center',
         //backgroundColor: '#e6f2f2',
        paddingBottom: 70, // Adjusted paddingBottom instead of marginBottom
      },
      bookButton: {
        position: 'absolute',
        bottom: 20, // Adjusted bottom position to leave some space
        left: 10,
        right: 10,
        backgroundColor: '#008080',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        zIndex: 1, // Ensure button appears above other content
      },
    bookButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SurfingScreen;
