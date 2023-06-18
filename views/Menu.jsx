import SongsContainer from "../components/SongsContainer";
import SearchSong from "../components/SearchSong";
import { View } from "react-native";
import { styles } from "../styles/app.styles";

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <SearchSong />
            <SongsContainer navigation={navigation} />
        </View>
    );
}
