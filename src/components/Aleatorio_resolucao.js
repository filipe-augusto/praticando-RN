import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default ({min, max}) =>{
    //export default (props) =>{
    //  const delta = props.max - props.min + 1
    //const {min, max} = props
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta)
    
return (
    <Text style={Estilo.txtGrande}>O Valor Aleatorio é {aleatorio}
</Text>
)
}