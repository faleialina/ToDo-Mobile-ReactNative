import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Auth from './src/screen/Auth/Auth'
import Home from './src/screen/Home/Home'
import Reg from './src/screen/Reg/Reg'
import User from './src/screen/User/User'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Auth' component={Auth} />
				<Stack.Screen name='Reg' component={Reg} />
				<Stack.Screen name='User' component={User} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
