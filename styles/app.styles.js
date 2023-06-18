import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    songContainer: {
        width: '100%',
        height: 50,
        marginBottom: 10,
    },
    songInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    songName: {
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap'
    },
    inputSearch: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    }
});

export const playerStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    slider: {
        width: '80%',
        height: 40,
        marginBottom: 20
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        gap: 5
    },
    time: {
        fontSize: 16
    }
});