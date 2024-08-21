import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import Text from '../components/Text';

const DreamJournaled = ({ navigation }) => {

    return (
    <ImageBackground
        source={require('../assets/images/BackgroundStarsCropped.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
    >
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#8E8E8E', textAlign: 'center', fontSize: 24, marginBottom: 10, fontWeight: '200' }}>Dream Has Been Journaled</Text>
                
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate("JournalDream")}
                >
                    <Text style={styles.buttonTextStyle}>Journal Another Dream</Text>
                </TouchableOpacity>

                {/* Add the new button here */}
                <TouchableOpacity
                    style={styles.goldenButtonStyle}
                    onPress={() => navigation.navigate("AddInterpretations")}
                >
                    <Text style={styles.goldenButtonTextStyle}>Add An Interpretation</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ImageBackground>
    )
}

export default DreamJournaled;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#00FFFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        margin: 10
    },
    buttonTextStyle: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    goldenButtonStyle: {
        backgroundColor: '#FFD700', // Golden color
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        margin: 10
    },
    goldenButtonTextStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
    },
});
