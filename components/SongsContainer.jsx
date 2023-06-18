import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/app.styles';
import { formatDuration } from '../helpers/functions'
import { AppContext } from '../context/AppContext';

export default function SongsContainer({ navigation }) {
    const { songs } = AppContext();

    return (
        <ScrollView
            style={{
                width: '100%'
            }}
        >
            {
                songs.map((song, i) => (
                    <TouchableOpacity key={i} style={styles.songContainer} onPress={() => navigation.navigate('Player', { song })}>
                        <View
                            style={styles.songInfo}
                        >
                            <Text
                                style={styles.songName}
                            >{song.filename}</Text>
                            <Text>{formatDuration(song.duration)}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    );
}
