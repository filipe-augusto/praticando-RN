import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'
import Aleatorio from './Aleatorio'
/* export default (props ) =>
{
    console.warn(props)
return (
<Text style={Estilo.txtGrande}>O valor {props.max} é maior que o valor {props.min}!
</Text>
)
} */

export default (props ) =>

<Text style={Estilo.txtGrande}>O valor {<Aleatorio/>} é maior que o valor {<Aleatorio/>}!
</Text>
