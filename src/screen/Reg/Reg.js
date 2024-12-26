import { Pressable, Text, TextInput, View } from 'react-native'
import styles from './style'

export default function Reg({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text>Welcome to Onboard! </Text>
				<Text style={styles.lastText}>Let’s help to meet up your tasks.</Text>
				<TextInput style={styles.input} placeholder='Enter your full name' />
				<TextInput style={styles.input} placeholder='Enter your Email' />
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					placeholder='Enter Password'
				/>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					placeholder='Confirm password'
				/>
				<Pressable
					style={styles.btn}
					onPress={() => navigation.navigate('User')}
				>
					<Text style={styles.text}>Register</Text>
				</Pressable>
				<Text>
					Already have an account ?
					<Text
						style={styles.textUrl}
						onPress={() => navigation.navigate('Auth')}
					>
						{' '}
						Sign In
					</Text>{' '}
				</Text>
			</View>
		</View>
	)
}
