import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { playerStyles as styles } from '../styles/app.styles';
import { Ionicons } from '@expo/vector-icons';

export default function Player({ navigation, route }) {
    const { song } = route.params;
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        handlePlay();
    }, []);

    const handlePlay = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                { uri: song.uri },
                { shouldPlay: true },
                onPlaybackStatusUpdate
            );
            setSound(sound);
            setIsPlaying(true);
            if (position !== 0) {
                await sound.playFromPositionAsync(position);
            }
        } catch (error) {
            console.log('Error al reproducir la canción:', error);
        }
    };

    const handlePause = async () => {
        try {
            await sound.pauseAsync();
            setIsPlaying(false);
        } catch (error) {
            console.log('Error al pausar la canción:', error);
        }
    };

    const handleStop = async () => {
        try {
            await sound.stopAsync();
            setIsPlaying(false);
            setPosition(0);
        } catch (error) {
            console.log('Error al detener la canción:', error);
        }
    };

    const onPlaybackStatusUpdate = (status) => {
        if (status.isLoaded) {
            setDuration(status.durationMillis);
            setPosition(status.positionMillis);
        }
        if (status.didJustFinish) {
            console.log('Canción terminada');
        }
    };

    const handleSliderChange = (value) => {
        sound.setPositionAsync(value);
        setPosition(value);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{song.filename}</Text>
            <Text style={styles.time}>{formatTime(position)} / {formatTime(duration)}</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={duration}
                value={position}
                onSlidingComplete={handleSliderChange}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#cccccc"
                thumbTintColor="#000000"
            />
            <View style={styles.controls}>
                <TouchableOpacity>
                    <Ionicons name="play-back" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={isPlaying ? handlePause : handlePlay}>
                    {
                        isPlaying
                            ? <Ionicons name="pause-circle" size={50} color="black" />
                            : <Ionicons name="play-circle" size={50} color="black" />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={handleStop}>
                    <Ionicons name="stop-circle" size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play-forward" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
