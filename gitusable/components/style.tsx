import { StyleSheet } from "react-native";

//tendo um arquivo próprio, stylesheet pode ser usando globalmente mediante import
export default StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",//elementos que não cabem na linha e estavam indo para fora do container, agora em vez de ir para fora se posicionaram abaixo
    //width: "100%",
    //height: "100%",        
    alignItems: 'center',
    justifyContent: 'center',
  },
  error_container: {
    flex: 1,    
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  god: {
    //flexGrow: 1, ajusta o tamanho em relação aos outros elementos
    color: "darkgreen",
    fontSize: 30,
    fontFamily: "AmericanTypewriter-Bold",
    fontWeight: "bold",
  },
  usopp: {    
    padding: 10,
    color: "yellow",
    fontSize: 50,
    fontWeight: "bold",
  },
  img: {
    width: 350,        
    resizeMode: "contain", //ajusta a imagem com base na largura
    //resizeMode: "center", //centraliza a imagem dentro do componente
    position: "absolute",
    bottom: 550,    
  },
  back_img:{
    flex: 1,
    width: "100%",    
    resizeMode: "cover",
  },
  Bstyle: {
    color: "yellow",
  }
});