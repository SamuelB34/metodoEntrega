import { StyleSheet, Text, Pressable, Image, View } from 'react-native';

const Content = ({bottomSheet, value}) => {
  return (
    <View style={styles.contenedor}>
        <Text style={styles.paragraph}> ¿Cómo quieres que se reciba el dinero? </Text>

        <Pressable
            style={styles.btn}
            onPress={() => bottomSheet.current.show()}
        >
            { value ? <Text style={styles.btnText}> {value} </Text> :
                <Text style={styles.btnText}> Pago en ventanilla </Text>
            }

            <Image source={require('../images/Selector.png')} style={ styles.img }/>
        </Pressable>


        <Text style={styles.paragraph}> Seleccione una opción de pago </Text>

        <Pressable
            style={styles.btn}
        >
            <View style={styles.cont2}>
                <Image source={require('../images/bancoppel.png')} style={ styles.bancoppel }/>
                <Text style={styles.btnText2}> Caribe Express </Text>
            </View>
            <Image source={require('../images/Selector.png')} style={ styles.img }/>
        </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({
    contenedor:{
        marginTop:15,
        marginLeft:10
    },
    paragraph:{
        textAlign:'justify',
        fontWeight:'500',
        color:'#0F3F8A',
        fontSize:16,
    },
    btn:{
        display:'flex',
        flexDirection:'row',
        borderWidth:1.5,
        marginRight:10,
        borderRadius:5,
        marginTop:10,
        justifyContent: 'space-between',
        borderColor:'#0F3F8A',
        marginBottom:30
    },
    btnText:{
        fontSize:20,
        padding: 5,
        marginVertical:5,
        fontWeight:'500',
        alignSelf:'center',
        color:'#183363'
    },
    btnText2:{
        marginVertical:12,
        fontWeight:'500',
        fontSize:20,
        color:'#183363'
    },
    img:{
        width: 12,
        height: 8,
        alignSelf:'center',
        marginRight:10
    },
    bancoppel:{
        width:'37%',
        height:'80%',
        alignSelf:'center',
        marginLeft:5
    },
    cont2:{
        display:'flex',
        flexDirection:'row',
        height:50,
        alignSelf:'center',
        marginTop:2
    }

})


export default Content
