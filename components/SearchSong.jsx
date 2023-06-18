import { TextInput } from 'react-native';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import { styles } from '../styles/app.styles';

export default function SearchSong() {
    const { songs, setSongs, getMusic } = AppContext();
    const [search, setSearch] = useState('');

    const filterSongs = (text) => {
        setSearch(text);
        if (text === '') {
            getMusic();
            return;
        }

        const filteredSongs = songs.filter(song => song.filename.toLowerCase().includes(text.toLowerCase()));
        setSongs(filteredSongs);
    };

    return (
        <TextInput
            style={styles.inputSearch}
            placeholder="Buscar"
            value={search}
            onChangeText={filterSongs}
        />
    );
}
