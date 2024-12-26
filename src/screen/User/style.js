import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#F0F4F3',
		alignItems: 'center',
		gap: 20,
	},
	blocAvatar: {
		width: '100%',
		height: '25%',
		backgroundColor: '#50C2C9',
		alignItems: 'center',
		paddingTop: 50,
		gap: 10,
	},
	imgAvatar: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	textAvatar: {
		fontWeight: '700',
		fontSize: 18,
		color: '#FFFFFF',
	},
	wrapperTextGood: {
		width: '80%',
		alignItems: 'flex-end',
	},
	textGood: {
		fontWeight: '600',
		fontSize: 12,
		color: '#000000',
	},
	wrapperTextList: {
		width: '80%',
	},
	textList: {
		fontWeight: '600',
		fontSize: 12,
		color: '#000000',
	},
	wrapperTask: {
		width: '80%',
		backgroundColor: 'white',
		borderRadius: 10,
		gap: 20,
	},
	wrapperAdd: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingTop: 20,
		alignItems: 'center',
	},
	textDaily: {
		color: 'grey',
		fontWeight: '600',
		fontSize: 12,
	},
	wrapperCheckbox: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingVertical: 15,
	},
	label: {
		color: 'grey',
		fontWeight: '600',
		fontSize: 12,
		marginLeft: 10,
	},

	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
	},
	modalView: {
		margin: 50,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	wrapperBtnModal: {
		flexDirection: 'row',
		gap: 10,
	},
	button: {
		marginTop: 10,
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: '#50C2C9',
	},
	textStyle: {
		color: 'white',
		fontWeight: '600',
		fontSize: 12,
		textAlign: 'center',
	},
	modalText: {
		color: 'grey',
		fontWeight: '600',
		fontSize: 18,
		marginBottom: 15,
		textAlign: 'center',
	},
	input: {
		width: '80%',
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 5,
	},
})
export default styles
