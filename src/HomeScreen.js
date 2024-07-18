import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

const { width: screenWidth } = Dimensions.get('window');

function HomeScreen() {
    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView
            
            contentContainerStyle={styles.scrollViewContent}>
            
                <Image
                    source={require('../assets/aloha.png')}
                    style={styles.header}
                />
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../assets/home_island.png')}
                        style={styles.image}
                    />
                    <View style={styles.overlayTextContainer}>
                        <Text style={styles.overlayText}>Welcome</Text>
                        <Text style={styles.overlayText1}>to Hawaii</Text>
                    </View>
                </View>
                <View style={styles.highlightsContainer}>
                    <Text style={styles.highlightsHeader}>Highlights</Text>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.cardsContainer}
                    >
                        {/* Cards go here */}
                        <View style={styles.card}>
                            <Image
                                source={require('../assets/home_surfing.png')}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>Surfing</Text>
                            </View>
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardText1}>Best Hawaiian islands for surfing</Text>
                            </View>
                            <View style={styles.cardIconContainer}>
                                <Image
                                    source={require('../assets/home_arrow.png')}
                                    style={styles.cardIcon}
                                />
                            </View>
                        </View>
                        {/* Card 2 */}
                        <View style={styles.card}>
                            <Image
                                source={require('../assets/home_surfing2.png')}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>Hula</Text>
                            </View>
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardText1}>Try it yourself.</Text>
                            </View>
                            <View style={styles.cardIconContainer}>
                                <Image
                                    source={require('../assets/home_arrow.png')}
                                    style={styles.cardIcon}
                                />
                            </View>
                        </View>
                        <View style={styles.card}>
                            <Image
                                source={require('../assets/home_surfing3.png')}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>Vulcanoes</Text>
                            </View>
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardText1}>Volcanic conditions can change at any time.</Text>
                            </View>
                            <View style={styles.cardIconContainer}>
                                <Image
                                    source={require('../assets/home_arrow.png')}
                                    style={styles.cardIcon}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* Categories*/}

                <ScrollView
                    style={styles.categoriesContainer}
                    contentContainerStyle={styles.categoriesContent}
                >
                    <Text style={styles.highlightsHeader}>Categories</Text>
                    <View style={styles.cardCategories}>
                        <View style={styles.cardCategoryTextContainer}>
                            <Text style={styles.cardCategoryText1}>Adventure</Text>
                            <View style={styles.cardCategoryIconContainer}>
                                <Image
                                    source={require('../assets/home_arrow1.png')}
                                    style={styles.cardCategoryIcon}
                                />
                            </View>
                        </View>
                    </View>
                    {/* Repeat for other categories */}
                    <View style={styles.cardCategories}>
                        <View style={styles.cardCategoryTextContainer}>
                            <Text style={styles.cardCategoryText1}>Culinary</Text>
                            <View style={styles.cardCategoryIconContainer}>
                                <Image
                                    source={require('../assets/home_arrow1.png')}
                                    style={styles.cardCategoryIcon}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardCategories}>
                        <View style={styles.cardCategoryTextContainer}>
                            <Text style={styles.cardCategoryText1}>Eco-tourism</Text>
                            <View style={styles.cardCategoryIconContainer}>
                                <Image
                                    source={require('../assets/home_arrow1.png')}
                                    style={styles.cardCategoryIcon}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardCategories}>
                        <View style={styles.cardCategoryTextContainer}>
                            <Text style={styles.cardCategoryText1}>Family</Text>
                            <View style={styles.cardCategoryIconContainer}>
                                <Image
                                    source={require('../assets/home_arrow1.png')}
                                    style={styles.cardCategoryIcon}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardCategories}>
                        <View style={styles.cardCategoryTextContainer}>
                            <Text style={styles.cardCategoryText1}>Sport</Text>
                            <View style={styles.cardCategoryIconContainer}>
                                <Image
                                    source={require('../assets/home_arrow1.png')}
                                    style={styles.cardCategoryIcon}
                                />
                            </View>
                        </View>
                    </View>
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
        height: 450,
        resizeMode: 'stretch',
    },
    headerContainer: {
backgroundColor:'ffffff',
        position: 'relative',
        width: '100%',
        alignItems: 'center',
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
        marginLeft: 8,
        width: '100%',
        paddingHorizontal: 5,
        marginTop: 20,
        height:330

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
        height: 50,
        marginVertical: 8,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardCategoryTextContainer: {
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',

        paddingLeft: 10,
    },
    cardCategoryText1: {
        fontSize: 14,
        color: '#333',
        flex: 1,
    },
    cardCategoryIconContainer: {
        marginVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    cardCategoryIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    cardText: {
        fontSize: 18, // Larger text size
        fontFamily: 'IBMPlexMono-Bold',
        color: '#008080', // Set the text color
        marginRight: 5, // Space between text and icon
        paddingLeft: 5,
        flex: 1, // Allow text to take available space
    },
    cardText1: {
        fontSize: 15, // Smaller text size
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
        marginTop: 10,
        marginRight: 10, // Space between cards
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000', // Black shadow color for iOS
        shadowOffset: { width: 0, height: 10 }, // Increased shadow offset for iOS
        shadowOpacity: 0.25, // Shadow opacity for iOS
        shadowRadius: 10, // Shadow radius for iOS
        elevation: 10, // Elevation for Android
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
        marginTop:10,
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
        marginTop: 15,
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
    scrollViewContent: {
        alignItems: 'center',
       //  backgroundColor: '#e6f2f2',
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

export default HomeScreen;
