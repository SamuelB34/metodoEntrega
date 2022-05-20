import {useState, useRef, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, Image } from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

export default function App() {
  const bottomSheet = useRef();
  const [ value, setValue ] = useState('')

  const opciones = [
    {title: 'Ventanilla'},
    {title: 'Domicilio'},
    {title: 'Banco'},
    {title: 'Debito'}
  ];


  return (
    <Pressable style={styles.container}>
      <StatusBar style="auto" />

      <Pressable>
        <Header />

        <Content 
          value = { value }
          bottomSheet = { bottomSheet }
        />
      </Pressable>


      <BottomSheet hasDraggableIcon ref={bottomSheet} height={400}>
        <Text style={styles.text}> Método de entrega </Text>
        <Text style={styles.text2}> Selecciona un método de entrega. </Text>

        <Pressable
          style={styles.pressable}
          onPress={() => {setValue('Pago en ventanilla')
                          bottomSheet.current?.close() }}
        >
          <Text style={styles.text3}> Pago en ventanilla </Text>
          <Image source={require('./images/Selector2.png')} style={ styles.img }/>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() => {setValue('Entrega a domicilio')
          bottomSheet.current?.close()
        }}
        >
          <Text style={styles.text3}> Entrega a domicilio </Text>
          <Image source={require('./images/Selector2.png')} style={ styles.img }/>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() => {setValue('Deposito bancario')
          bottomSheet.current?.close()
        }}
        >
          <Text style={styles.text3}> Deposito bancario </Text>
          <Image source={require('./images/Selector2.png')} style={ styles.img }/>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={()=>{setValue('Deposito en tarjeta de debito'); 
            bottomSheet.current?.close()}}
        >
          <Text style={styles.text3}> Deposito en tarjeta de debito </Text>
          <Image source={require('./images/Selector2.png')} style={ styles.img }/>
        </Pressable>

      </BottomSheet>
      <Footer />

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  modal:{
    height:200
  },
  close:{
    backgroundColor:'red',
  },
  text:{
    fontSize:23,
    color:'#2D559C',
    fontWeight:'700',
    marginLeft:10,
    marginTop:10,
  },
  text2:{
    fontWeight:'600',
    color:'#2D559C',
    marginLeft:13,
  },
  text3:{
    fontWeight:'500',
    fontSize:20,
    color:'#183363'
  },
  img:{
    marginTop:10
  },
  pressable:{
    display:'flex',
    flexDirection:'row',
    borderWidth:1.5,
    marginRight:10,
    borderRadius:5,
    marginTop:10,
    justifyContent: 'space-between',
    borderColor:'#0F3F8A',
    height:50,
    alignItems:'center',
    marginLeft:10
  },
  img:{
    width: 8,
    height: 12,
    alignSelf:'center',
    marginRight:10
},
});