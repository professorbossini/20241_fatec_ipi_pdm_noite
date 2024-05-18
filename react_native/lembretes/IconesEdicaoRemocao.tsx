import React from 'react'
import { 
  Pressable,
  View, 
  Text 
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const IconesEdicaoRemocao = (props: {remover: Function, atualizar: Function}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <Pressable
          onPress={() => props.remover()}>
          <Ionicons name='trash' size={24}/>
        </Pressable>
        <Pressable
          onPress={() => props.atualizar()}>
          <Ionicons name='create-outline' size={24} />
        </Pressable>

    </View>
  )
}

export default IconesEdicaoRemocao