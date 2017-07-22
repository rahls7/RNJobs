import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewScreen extends Component {
   static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight: (
        <Button
         title='Settings'
          onPress={() => navigation.navigate('settings')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
        ),
        headerStyle: {
            marginTop: Platform.OS === 'android' ? 24 : 0
        }
    });
    
    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
            const initialRegion = {
                latitude: job.latitude,
                longitude: job.longitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };
            return (
            <Card>
                <View style={{ height: 200 }}>
                    <MapView 
                    style={{ flex: 1 }}
                    cachedEnabled={Platform.OS === 'android'}
                    scrollEnabled={false}
                    initialRegion={initialRegion} 
                    />
                    <View style={styles.detailWrapper}>
                        <Text style={styles.italics}>{job.company}</Text>
                        <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
                    </View>
                    <Button title="Apply Now" backgroundColor="#03A9F4" onPress={() => Linking.openURL(job.url)} />
                </View>
            </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
             {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        likedJobs: state.likedJobs
    };
}

const styles = {
    detailWrapper: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
};

export default connect(mapStateToProps)(ReviewScreen);
