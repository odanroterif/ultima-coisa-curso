import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    comp_container:{
        width: '70%',        
        borderRadius: 4,
        padding: 11,        
        marginTop: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '60%',
    },
    normal_text: {
        color: '#2196F3',
        fontSize: 22,
        fontWeight: 'bold',
    },
    title:{
        color: 'white',
        fontSize: 25,        
        fontWeight: 'bold',        
        gap: 3,        
    },
    normal_input:{
        height: 40,
        width: '70%',
        backgroundColor: 'white',
        color: 'black',
        margin: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#2196F3',
        marginBottom: 15,
    },
    Sbutton:{
        height: 40,
    }
});