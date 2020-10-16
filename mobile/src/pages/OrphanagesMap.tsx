import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { RectButton } from "react-native-gesture-handler";

import mapMarker from "../images/map-marker.png";

export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigateOrphanageDetails() {
        navigation.navigate('OrphanageDetails');
    }

    function handleNavigateToCreateOrphanage() {
        navigation.navigate('SelectMapPosition');
    }

    return (
        <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
            latitude: -27.0567732,
            longitude: -48.8699401,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
            }}
        >
            <Marker
            icon={mapMarker}
            calloutAnchor={{
                x: 2.7,
                y: 0.8,
            }}
            coordinate={{
                latitude: -27.0567732,
                longitude: -48.8699401,
            }}
            >
            <Callout tooltip onPress={handleNavigateOrphanageDetails}>
                <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Lar das meninas</Text>
                </View>
            </Callout>
            </Marker>
        </MapView>

        <View style={styles.footer}>
            <Text style={styles.footerText}>2 orfanatos encontrados</Text>
            <RectButton
                style={styles.createOrphanageButton}
                onPress={handleNavigateToCreateOrphanage}
            >
            <Feather name="plus" size={28} color="#FFF" />
            </RectButton>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 16,
        justifyContent: "center",
    },

    calloutText: {
        color: "#0089a5",
        fontSize: 14,
        fontFamily: "Nunito_700Bold",
    },

    footer: {
        position: "absolute",
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: "#FFF",
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 3, // Para sobrear apenas no ANDROID, do IOS temos o Shadow
    },

    footerText: {
        color: "#8FA7B3",
        fontFamily: "Nunito_700Bold",
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: "#15C3D6",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
