import { StyleSheet, Text, Pressable, Image, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
        <Pressable
            style={styles.btn}
        > 
            <Text style={styles.btnText}>Siguiente</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    btn:{
        alignSelf:'center',
        backgroundColor:'#0F3F8A',
        width:'80%',
        padding:2,
        borderRadius:35,
    },
    btnText:{
        color:'#fff',
        textAlign:'center',
        padding:15,
        fontWeight:'600',
        fontSize:17 ,
    },
    container:{
        marginBottom:50
    }
})

export default Footer
