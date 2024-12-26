import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {
	Alert,
	CheckBox,
	Image,
	Modal,
	Pressable,
	Text,
	TextInput,
	View,
} from 'react-native'
import Clock from '../../components/Clock/Clock'
import styles from './style'

export default function User() {
	const [tasks, setTasks] = useState([])
	const [modalVisible, setModalVisible] = useState(false)
	const [addTaskValue, setAddTaskValue] = useState('')
	const [taskDescription, setTaskDescription] = useState('')
	const [taskDate, setTaskDate] = useState('')
	const [taskLocation, setTaskLocation] = useState('')
	const [selectedTask, setSelectedTask] = useState(null)

	useEffect(() => {
		const loadTasks = async () => {
			const storedTasks = await AsyncStorage.getItem('tasks')
			if (storedTasks) {
				setTasks(JSON.parse(storedTasks))
			}
		}
		loadTasks()
	}, [])

	const saveTasks = async newTasks => {
		await AsyncStorage.setItem('tasks', JSON.stringify(newTasks))
	}

	const addTask = () => {
		const newTask = {
			id: Math.floor(Math.random() * 100000000000) + 1,
			title: addTaskValue,
			description: taskDescription,
			date: taskDate,
			location: taskLocation,
			flag: false,
		}
		const updatedTasks = [newTask, ...tasks]
		setTasks(updatedTasks)
		saveTasks(updatedTasks)
		setAddTaskValue('')
		setTaskDescription('')
		setTaskDate('')
		setTaskLocation('')
		setModalVisible(!modalVisible)
	}

	const changeData = el => {
		const updatedTasks = tasks.map(task =>
			el.id !== task.id ? task : { ...task, flag: !task.flag }
		)
		setTasks(updatedTasks)
		saveTasks(updatedTasks)
	}
	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	const updateTaskStatus = (id, status) => {
		const updatedTasks = tasks.map(task =>
			task.id === id ? { ...task, status } : task
		)
		setTasks(updatedTasks)
	}

	const sortTasks = criteria => {
		const sortedTasks = [...tasks].sort((a, b) => {
			if (criteria === 'date') {
				return a.id - b.id
			} else if (criteria === 'status') {
				return (a.status || '').localeCompare(b.status || '')
			}
			return 0
		})
		setTasks(sortedTasks)
	}

	const viewTaskDetails = task => {
		setSelectedTask(task)
		setModalVisible(true)
	}

	return (
		<View style={styles.container}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.')
					setModalVisible(!modalVisible)
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Please Add Name Task</Text>
						<TextInput
							placeholder='Title'
							onChangeText={setAddTaskValue}
							value={addTaskValue}
							style={styles.input}
						/>
						<TextInput
							placeholder='Description'
							onChangeText={setTaskDescription}
							value={taskDescription}
							style={styles.input}
						/>
						<TextInput
							placeholder='Date and Time'
							onChangeText={setTaskDate}
							value={taskDate}
							style={styles.input}
						/>
						<TextInput
							placeholder='Location'
							onChangeText={setTaskLocation}
							value={taskLocation}
							style={styles.input}
						/>
						<View style={styles.wrapperBtnModal}>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={addTask}
							>
								<Text style={styles.textStyle}>Add Task</Text>
							</Pressable>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Close</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>

			<View style={styles.blocAvatar}>
				<Image
					style={styles.imgAvatar}
					source={require('../../assets/avatar.png')}
				/>
				<Text style={styles.textAvatar}>Welcome Jeegar goyani</Text>
			</View>

			<View style={styles.wrapperTextGood}>
				<Text style={styles.textGood}>Good Afternoon</Text>
			</View>
			<Clock />
			<View style={styles.wrapperTextList}>
				<Text style={styles.textList}>Task list</Text>
			</View>

			<View style={styles.wrapperTask}>
				<View style={styles.wrapperAdd}>
					<Text style={styles.textDaily}>Daily Task</Text>
					<Pressable onPress={() => setModalVisible(true)}>
						<Image
							style={styles.imgAdd}
							source={require('../../assets/add.png')}
						/>
					</Pressable>
				</View>

				<View style={styles.check}>
					{tasks.map((el, index) => (
						<View style={styles.wrapperCheckbox} key={index}>
							<CheckBox
								value={el.flag}
								onValueChange={() => changeData(el)}
								style={styles.checkbox}
							/>
							<Text style={styles.label} onPress={() => viewTaskDetails(el)}>
								{el.title}
							</Text>
							<Pressable onPress={() => deleteTask(el.id)}>
								<Text style={styles.deleteButton}>Удалить</Text>
							</Pressable>
						</View>
					))}
				</View>

				<Pressable onPress={() => sortTasks('date')}>
					<Text>Сортировать по дате</Text>
				</Pressable>
				<Pressable onPress={() => sortTasks('status')}>
					<Text>Сортировать по статусу</Text>
				</Pressable>
			</View>

			<Modal
				animationType='slide'
				transparent={true}
				visible={selectedTask !== null}
				onRequestClose={() => setSelectedTask(null)}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Детали задачи</Text>
						<Text>Название: {selectedTask?.title}</Text>
						<Text>Статус: {selectedTask?.status || 'Не задан'}</Text>

						<Pressable
							onPress={() => updateTaskStatus(selectedTask.id, 'В процессе')}
						>
							<Text>Отметить как "В процессе"</Text>
						</Pressable>
						<Pressable
							onPress={() => updateTaskStatus(selectedTask.id, 'Завершено')}
						>
							<Text>Отметить как "Завершено"</Text>
						</Pressable>
						<Pressable
							onPress={() => updateTaskStatus(selectedTask.id, 'Отменено')}
						>
							<Text>Отметить как "Отменено"</Text>
						</Pressable>
						<Pressable onPress={() => setSelectedTask(null)}>
							<Text>Закрыть</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	)
}
