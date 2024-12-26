import { View, ImageBackground } from 'react-native'
import styles from './style'
import { useState } from 'react'
import img from '../../../assets/clock.png'

export default function Clock() {
	const [date, setDate] = useState()

	setInterval(() => {
		setDate(new Date())
	}, 0.1)


	return (
		<View style={styles.container}>
			<View style={styles.clock}>
				<ImageBackground source={img} resizeMode="cover" style={styles.image}>
					<View style={styles.center} />
					<View style={[styles.hour, {
						transform: [{ rotateZ: `${date?.getHours() * 30}deg` }],
					}]}>
						<View style={styles.hr}></View>
					</View>
					<View style={[styles.min, {
						transform: [{ rotateZ: `${date?.getMinutes() * 6}deg` }],
					}]}>
						<View style={styles.mn}></View>
					</View>
					<View style={[styles.sec, {
						transform: [{ rotateZ: `${date?.getSeconds() * 6}deg` }],
					}]}>
						<View style={styles.sc}></View>
					</View>
				</ImageBackground>
			</View >
		</View >
	)
}

