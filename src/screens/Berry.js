import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

import Header from "../components/Berry/Header";
import Type from "../components/Berry/Type";

import Icon from "react-native-vector-icons/FontAwesome5";
import { getBerryDetailsApi } from "../api/berries";
import Abilities from "../components/Berry/Abilities";

//import useAuth from "../hooks/useAuth";

export default function Berry(props) {
  
  const {
    navigation,
    route: { params },
  } = props;
  const [berries, setBerries] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 5 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, berries]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getBerryDetailsApi(params.id);
        setBerries(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!berries) return null;

  return (
    <ScrollView>
      <Header
        name={berries.name }
        order={berries.id}
        image={berries.sprites.default}
      />
      <Type types={berries.category} />
      <Abilities abilities={berries.flavor_text_entries[13]} />
    </ScrollView>
  );
}
