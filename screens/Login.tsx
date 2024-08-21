import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';
import { AuthContext } from '../components/context/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import Text from '../components/Text';

const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loggingIn, setLoggingIn] = useState(true);

    const { handleCreateAccount, handleLogin, loading, error } = useContext(AuthContext) ?? {};

    const handleSignUp = () => {
        setLoggingIn(prev => !prev);
    };

    const handleButtonPress = () => {
        if (loggingIn) {
            handleLogin?.(email);
        }
        else {
            handleCreateAccount?.(email, name);
        }
    }

    const handleGooglePress = () => {
        if (loggingIn) {
            // handle login with google sign in
        }
        else {
            //handle creating an account with google
        }
    }

    return (
    <ImageBackground
        source={require('../assets/images/BackgroundStarsCropped.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
    >
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {/* Logo at the top */}
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image
                        source={require('../assets/images/logo.webp')}
                        style={{ width: 150, height: 150, borderRadius: 30 }} // Adjust width and height as needed
                        resizeMode="contain"
                    />
                </View>
                {/* Login Information */}
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <Text style={{ color: '#8E8E8E', textAlign: 'center', fontSize: 24, marginBottom: 10, fontWeight: '200' }}>
                            Welcome To Night Light
                        </Text>
                        {!loggingIn && (
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#626262',
                                    borderRadius: 8,
                                    padding: 10,
                                    color: '#8E8E8E',
                                    textAlignVertical: 'top',
                                    fontSize: 20,
                                    fontWeight: '200',
                                    marginBottom: 10,
                                    backgroundColor: "#000000"
                                }}
                                placeholder='Enter name'
                                placeholderTextColor={'#9E8E8E'}
                                value={name}
                                onChangeText={setName}
                                autoCapitalize='none'
                            />
                        )}
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#626262',
                                borderRadius: 8,
                                padding: 10,
                                color: '#8E8E8E',
                                textAlignVertical: 'top',
                                fontSize: 20,
                                fontWeight: '200',
                                marginBottom: 10,
                                backgroundColor: "#000000"
                            }}
                            placeholder='Enter email'
                            placeholderTextColor={'#9E8E8E'}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize='none'
                        />
                        <Text style={{ color: '#8E8E8E', textAlign: 'center', fontSize: 20, marginTop: 10, fontWeight: '200' }}>{error}</Text>
                        {loading ? (
                            <Text style={{ color: '#8E8E8E', textAlign: 'center', fontSize: 28, marginTop: 10, fontWeight: '200' }}>Loading...</Text>
                        ) : (
                            <>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={handleButtonPress}
                                >
                                    <Text style={styles.buttonTextStyle}>{loggingIn ? 'Login' : 'Create Account'}</Text>
                                </TouchableOpacity>
                                {/* Divider */}
                                <View style={styles.dividerContainer}>
                                    <View style={styles.line} />
                                    <Text style={styles.dividerText}>or</Text>
                                    <View style={styles.line} />
                                </View>

                                {/* Login With Google */}
                                <TouchableOpacity
                                    style={styles.googleButtonStyle}
                                    onPress={() => {/* handle Google login */}}
                                >
                                    <View style={styles.googleButtonContent}>
                                        <Image
                                            source={require('../assets/images/GoogleLogo.webp')}
                                            style={styles.googleLogoStyle}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.googleButtonTextStyle}>{loggingIn ? 'Login With Google' : 'Sign Up With Google'}</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={handleSignUp}
                                    style={{ marginTop: 20 }}
                                >
                                    <Text style={{ color: '#8E8E8E', textAlign: 'center', fontSize: 18, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                                        {loggingIn ? "Don't have an account?" : "Already have an account?"}
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </ImageBackground>
    );
}

export default Login;


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
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dividerText: {
        color: '#8E8E8E',
        fontSize: 18,
        marginHorizontal: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E',
    },
    googleButtonStyle: {
        backgroundColor: '#ffffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleLogoStyle: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    googleButtonTextStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },    
});
