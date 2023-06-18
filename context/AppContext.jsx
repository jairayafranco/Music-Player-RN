import { useContext, createContext, useState, useEffect } from "react";
import * as MediaLibrary from 'expo-media-library';

export const Context = createContext({});

export const AppContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
};

export const AppContextProvider = ({ children }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getPermission();
    }, []);

    const getPermission = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission not granted!');
            return;
        }
        getMusic();
    };

    const getMusic = async () => {
        const albums = await MediaLibrary.getAlbumsAsync();
        const albumName = 'AnimeMusic';
        const album = albums.find(album => album.title === albumName);

        if (!album) {
            alert(`No se encontró la carpeta ${albumName}`);
            return;
        }

        const media = await MediaLibrary.getAssetsAsync({
            mediaType: MediaLibrary.MediaType.audio,
            album: album.id,
            first: 200,
            sortBy: MediaLibrary.SortBy.modificationTime
        });

        const songs = media.assets;
        setSongs(songs);
    };

    return (
        <Context.Provider value={{ songs, setSongs, getMusic }}>
            {children}
        </Context.Provider>
    );
}