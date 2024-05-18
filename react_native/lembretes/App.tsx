import { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput, 
  ToastAndroid, 
  View 
} from 'react-native';
import IconesRedesSociais from './IconesRedesSociais';
import IconesEdicaoRemocao from './IconesEdicaoRemocao';

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

  const remover = (id: string) => {
    //usar um alert para confirmar se o usuário quer mesmo apagar
    Alert.alert(
      'Remover lembrete',
      `Deseja remover esse lembrete: ${lembretes.find(l => l.id === id)?.texto}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            setLembretes(lembretesAtuais => lembretesAtuais.filter(l => l.id !== id))
            ToastAndroid.show(
              'Lembrete removido com sucesso',
              ToastAndroid.LONG
            )
          }
        }
      ]
    )
    //se ele quiser, atualizar o estado que armazena a lista removendo o lembrete cujo id seja igual àquele recebido como parâmetro

    //talvez você queira usar a função filter

    //mostre um Toast confirmando que a remoção aconteceu
  }

  const atualizar = (id: string) => {
    // Copiar o texto do lembrete clicado para o campo em que lembretes são digitados

    //trocar o texto do botão de salvar lembrete para atualizar lembrete

    //ajustar o evento de clique no botão para que ele chame a função adicinoar ou a função atualizar de acordo com as interações do usuário

    //confirmar a atualização com um Toast

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
        keyExtractor={item => item.id} 
        data={lembretes}
        renderItem={lembrete => (
          <View
            style={styles.listItem}>
            <Text
              style={styles.listItemText}>
              {lembrete.item.texto}
            </Text>
            <View
              style={styles.listItemButtons}>
              <IconesEdicaoRemocao 
                remover={() => remover(lembrete.item.id)} 
                atualizar={() => atualizar(lembrete.item.id)}/>
            </View>
          </View>
        )}
      />
      {/* componente que exibe lista de ícones de redes sociais */}
      <IconesRedesSociais />
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
    textAlign: 'center',
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
    borderRadius: 4,
    marginBottom: 8
  },
  listItem:{
    padding: 12,
    borderBottomWidth: 1,
    borderBlockColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText:{
    textAlign: 'center',
    width: '70%'
  },
  listItemButtons: {
    width: '30%'
  }
});
