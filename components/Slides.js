import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (<Button 
            buttonStyle={styles.buttonStyle}
             title="Onwards!" raised
             onPress={this.props.onComplete}
            />);
        }
    }
    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View style={[styles.slideView, { backgroundColor: slide.color }]} key={slide.text}>
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );   
        });
    }
    render() {
        return (
            <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginBottom: 15
    },
    slideView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
    }
};

export default Slides;
