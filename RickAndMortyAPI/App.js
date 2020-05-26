/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {


  constructor(props){
    super(props);
    
    this.state = {
     loading: false,
     characters: [],
     url: 'https://rickandmortyapi.com/api/character/'
    }

 }

  componentDidMount(){
    this.getPokemon();
 }

  getPokemon = ()=> {

    this.setState({loading:true})
    fetch(this.state.url)
    .then(data=>data.json())
    .then(data=>{
      console.log("\n\n");
      console.log(data.results);
        this.setState({
          characters:data.results,
          url: data.info.next,
          loading: false
        })
      console.log("\n\n");
      console.log(this.state.characters[0].name);    
    })



  };

  print
  render(){


    if (this.state.loading)
    {
      return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?
        <View style={{flex: 1}}>
          <Text>Descargando ...</Text>
        </View>
      );
    }

    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1, paddingTop:50, paddingLeft:5}}>

      <FlatList

      data={this.state.characters}
      renderItem={
          ({item}) => <Text> {item.name} </Text>
      }
      />  
      </View>
    );

  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

