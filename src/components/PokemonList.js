import React,{ useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  TextInput,
  Text,
  Button,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { 
    pokemons, 
    loadPokemons, 
    isNext, 
    filterData,
    setFilterData,
    valor,
    load, 
  } = props;

  const laodMore = () => {
    loadPokemons();
  };

  const [search, setSearch] = useState("");
  const [poke, setPoke] = useState(false);

  useEffect(() => {}, [search]);

  const searchFilter = (text) => {
    setSearch(text);
    if (text) {
      setFilterData(pokemons);
    }
  };

  const searchFilterDone = () => {
    if (search) {
      const newData = filterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilterData(newData);
      setSearch("");
      if (Object.keys(newData).length == 0) {
        setPoke(true);
      } else {
        setPoke(false);
      }
      console.log(`aqui ${Object.keys(newData).length}`);
    } else {
      setFilterData(pokemons);
      setSearch(search);
    }
  };

  const searchFilterName = () => {
    const list= pokemons.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    setFilterData(list);
  };

  const Reload = () => {
    const list= pokemons.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    setFilterData(list);
  };

  return (
    
    <SafeAreaView>
      {valor && (
        <View style={styles.search}>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="  Nombre de la valla  "
            onChangeText={(text) => searchFilter(text)}
          />
          <Button title="Search" color="#1e90ff"  onPress={searchFilterDone} />
          <Button title="All" color="#1e90ff" onPress={Reload} />
         
          
        </View>   
      )}
      <View style={styles.ordenar}>
        <Text style={styles.orden}>Ordenar por:       <Button title="Nombre" color="#1e90ff" onPress={searchFilterName} />
        </Text>
        
      </View>

      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && laodMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <View>
          {poke  && (
            <View style={styles.aviso}>
              <Text style={styles.alertaText}>
                No encontramos Pokemons con ese nombre
              </Text>
            </View>
          )}
          {!load && (
            <View style={styles.alerta}>
              <Image 
                  source={require('.././assets/pickachu.gif')}  
                  style={styles.pika}
              />
              <Text style={styles.alertaText}>Cargando...</Text>

              <ActivityIndicator
                size="large"
                style={styles.spinner}
                color="#6b57ff"
              />
            </View>
          )}
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
    marginTop: Platform.OS === "web"? 20:0,
  },
  list: {
    marginBottom: 100,
  },
  alerta: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  alertaText: {
    fontSize: 17,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
  textInputStyle: {
    height: 40,
    margin: 12,
    marginLeft: 0,
    marginTop: 0,
    borderWidth: 1,
    backgroundColor:"#ffffff",
    padding: 10,
    borderRadius: 10,
    width: "60%",
  },
  orden:{
    color:"#ffffff",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  search: {
    flexDirection: "row",
    marginBottom: 1,
    marginTop: 0,
    height: 40,
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor:"#000000",
  },
  ordenar:{
    marginEnd:"2",
    backgroundColor:"#000000",
    marginBottom: "3",
    width: "100%",
  },
  pika:{
    width: 50, 
    height:50
  },
  aviso: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
