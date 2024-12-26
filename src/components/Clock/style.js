import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    clock: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
    },
    center: {
        width: 10,
        height: 10,
        backgroundColor: '#C8C8C8',
        position: 'absolute',
        zIndex: 100,
        left:55,
        top:55,
        borderRadius:100
    },
    image: {
        width: 120,
        height: 120,
    },
    hour: {
        width: 120,
        height: 120,
        alignItems: 'center',
        position: 'absolute'
    },
    min: {
        width: 120,
        height: 120,
        alignItems: 'center',
        position: 'absolute'
    },
    sec: {
        width: 120,
        height: 120,
        alignItems: 'center',
        position: 'absolute'
    },
    hr: {
        width: 4,
        height: 40,
        backgroundColor: '#2E8F95',
        top: 20,
        borderRadius: 10,
        zIndex: 5,
    },
    mn: {
        width: 4,
        height: 50,
        backgroundColor: '#7DC9CE',
        top: 10,
        borderRadius: 10,
        zIndex: 6
    },
    sc: {
        width: 2,
        height: 55,
        backgroundColor: '#C8C8C8',
        top: 5,
        borderRadius: 10,
        zIndex: 6
    }
})

export default styles