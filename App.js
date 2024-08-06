import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import List from './src/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          name: 'Lucas Silva',
          description: 'Mais um dia de muitos bugs :)',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          postImg: 'https://sujeitoprogramador.com/instareact/foto1.png',
          liked: false,
          likes: 0,
        },
        {
          id: '2',
          name: 'Matheus',
          description: 'Isso sim é ser raiz!!!!!',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          postImg: 'https://sujeitoprogramador.com/instareact/foto2.png',
          liked: false,
          likes: 0,
        },
        {
          id: '3',
          name: 'Jose Augusto',
          description: 'Bora trabalhar Haha',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          postImg: 'https://sujeitoprogramador.com/instareact/foto3.png',
          liked: false,
          likes: 3,
        },
        {
          id: '4',
          name: 'Gustavo Henrique',
          description: 'Isso sim que é TI!',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          postImg: 'https://sujeitoprogramador.com/instareact/foto4.png',
          liked: false,
          likes: 1,
        },
        {
          id: '5',
          name: 'Guilherme',
          description: 'Boa tarde galera do insta...',
          profileImg:
            'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          postImg: 'https://sujeitoprogramador.com/instareact/foto5.png',
          liked: false,
          likes: 32,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('./src/img/logo.png')} style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./src/img/send.png')} style={styles.send} />
          </TouchableOpacity>
        </View>

        <FlatList
        showsVerticalScrollIndicator={false}
        data={this.state.feed}
        renderItem={({item}) => <List data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {},
  send: {
    width: 23,
    height: 23,
  },
});

export default App;
