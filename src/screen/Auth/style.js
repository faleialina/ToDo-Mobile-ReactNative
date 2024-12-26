import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#F0F4F3',
		alignItems: 'center',
	},
	card: {
		width: '80%',
		height: '80%',
		flex: 1,
		flexDirection: 'column',
		gap: '20px',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		width: 170,
		resizeMode: 'contain',
	},
	input: {
		width: '70%',
		backgroundColor: '#FFFFFF',
		borderRadius: '100px',
		paddingVertical: '15px',
		paddingHorizontal: '25px',
	},
	btn: {
		width: '70%',
		paddingVertical: 10,
		backgroundColor: '#50C2C9',
		borderRadius: 20,
	},
	text: {
		textAlign: 'center',
	},
	textUrl: {
		color: '#50C2C9',
	},
})
export default styles
