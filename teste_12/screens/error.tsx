import { StatusBar, View, Text } from "react-native";
import Tester from "../components/tester";
import styles from "../components/style";
import { Colors } from "react-native/Libraries/NewAppScreen";





export default function Error() {
    return (        
        <View style={styles.error_container}>
            <StatusBar barStyle={"default"}/>
            <Tester colo="black" />            
            <Text style={[styles.god,{color:"white"}]}>você perdeu a benção de</Text>
            <Text style={[styles.god,{color:"white"}]}>god usopp</Text>
            <Tester colo="black" />
        </View>        
    );
}