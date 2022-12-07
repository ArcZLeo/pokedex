import React, { useState, useEffect } from "react";
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
import BerryCard from "./BerryCard";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Button } from "react-native-web";
//import Icon from "react-native-vector-icons/FontAwesome5";
//import Select from 'react-select';

export default function BerryList(props) {
  const {
    berries,
    loadBerries,
    isNext,
    filterData,
    setFilterData,
    valor,
    load,
  } = props;

  const laodMore = () => {
    loadBerries();
  };

  const [search, setSearch] = useState("");
  const [berry, setBerry] = useState(false);


  useEffect(() => {}, [search]);

  const searchFilter = (text) => {
    setSearch(text);
    if (text) {
      setFilterData(berries);
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
        setBerry(true);
      } else {
        setBerry(false);
      }
    } else {
      setFilterData(berries);
      setSearch(search);
    }
  };


  const Reload = () => {
    setFilterData(berries);
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
          <Button title="Search" color="#6890f0" onPress={searchFilterDone} />
          <Button title="All" color="#6890f0" onPress={Reload} />
          
        </View>
      )}
      <FlatList
        data={filterData}
        numColumns={2}
        showsVerticalScrollIndicator={false} //Quita la bara de scroll
        keyExtractor={(berry) => String(berry.id)}
        renderItem={({ item }) => <BerryCard berry={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && laodMore} //Cuando llegas al final de la lista ejecuta esto
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <View style={styles.list}>
            {berry && (
              <View style={styles.aviso}>
                <Text style={styles.alertaText}>
                  No encontramos Vallas con ese nombre
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

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    //position : absolute,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    //position: 'absolute',
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const position='absolute';

    return { ...provided, opacity, transition,position };
  }
};

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
    padding: 10,
    borderRadius: 10,
    width: "60%",
  },
  pika:{
    width: 50, 
    height:50
  },
  search: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 0,
    height: 40,
    width: "100%",
    justifyContent: "space-evenly",
  },
  
  aviso: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
