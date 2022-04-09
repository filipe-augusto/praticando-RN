import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


{
    //{
    /* function FuncaoApp() {
        const jsx = <Text>Olá Mundo. Mundo é da russia</Text>
        return jsx
    } */
    /* const FuncaoApp = function () {
        return <Text>USANDO FUNÇÃO ANONIMA</Text>
    }
    export default FuncaoApp */
    /* export default  ()=>{
        return <Text>Simplificando ainda mais!!</Text>
    } */
    //}
}

import Estilo from './components/estilo'
import MinMax from './components/MinMax'
import Aleatorio_resolucao from './components/Aleatorio_resolucao'
/* import CompPadrao, { Comp1, Comp2 } from './components/Mult'
import Primeiro from './components/Primeiro'
 */
export default () => (
    <View style={style.App}>
        <MinMax min="3" max="20"/>
        <MinMax min={1} max={5}/>
        <Aleatorio_resolucao max={50} min={10}/>
        <Aleatorio_resolucao max={10} min={0}/>
        <Aleatorio_resolucao max={100} min={0}/>
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20,

    }
})
