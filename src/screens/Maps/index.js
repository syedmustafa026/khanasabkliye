import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Locations() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 24.8607,
                    longitude: 67.0011,
                    latitudeDelta: 0.0,
                    longitudeDelta: 0.0,
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Aliabad"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Numaish Chowrange"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.8732834,
                        longitude: 67.0337457
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Saylani house phase 2"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.8278999,
                        longitude: 67.0688257
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Touheed commercial"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.8073692,
                        longitude: 67.0357446
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Sehar Commercial"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.8138924,
                        longitude: 67.0677652
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Jinnah avenue"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.8949528,
                        longitude: 67.1767206
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Johar Chowrangi"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.9132328,
                        longitude: 67.1246195
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Johar chowrangi 2"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.9100704,
                        longitude: 67.1208811
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 24.9200172,
                        longitude: 67.0612345
                    }}
                    title={"Hill park"}
                    description={"Saylani Welfare Roti Bank"}
                    coordinate={{
                        latitude: 24.8673515,
                        longitude: 67.0724497
                    }}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});