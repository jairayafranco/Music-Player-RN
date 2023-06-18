import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../views/Menu';
import Player from '../views/Player';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Menu'>
            <Stack.Screen
                name="Music App"
                component={Menu}
                options={screenOptionStyle}
            />
            <Stack.Screen
                name="Player"
                component={Player}
                options={screenOptionStyle}

            />
        </Stack.Navigator>
    );
}