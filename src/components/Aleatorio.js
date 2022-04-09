import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'


export default () =>

<Text style={Estilo.txtGrande}>{Math.round(Math.random()*(100-1)+1)}
</Text>