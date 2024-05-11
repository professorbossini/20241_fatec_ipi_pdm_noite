import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput, 
  View 
} from 'react-native';

interface Lembrete {
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState <string>('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () => {
    //1. construir um novo lembrete com id igual à data atual e texto igual àquilo que existe na variável de estado
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete
    }
    //2. atualizar a lista de lembretes, adicionando o novo lembrete (use a função apropriada). OBS: O último lembrete digitado deve ser o primeiro a ser exibido (ele aparece no topo da lista)
    setLembretes(lembretesAtual => [
      novoLembrete,
      ...lembretesAtual
    ])
    //3. atualizar a variável lembrete, limpando o campo para o usuário
    setLembrete('')
    //4. Vincular essa função ao Pressable
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete...'
        onChangeText={setLembrete}
        value={lembrete}
      />
      <Pressable
        style={styles.button}
        onPress={adicionar}>
        <Text
          style={styles.buttonText}>
            Salvar lembrete
        </Text>
      </Pressable>
      <FlatList
        style={styles.list} 
        data={lembretes}
        renderItem={lembrete => (
          <View>
            <Text>{lembrete.item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center'
  },
  button:{
    width: '80%',
    backgroundColor: '#0096F3', //material design blue 500
    padding: 8,
    borderRadius: 4,
    marginBottom: 4
  },
  buttonText:{
    color: 'white',
    textAlign: 'center'
  },
  list: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '80%',
    borderRadius: 4
  }
});
