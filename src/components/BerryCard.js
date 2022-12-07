import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function BerryCard(props) {
  const { berry } = props;
  const navigation = useNavigation();


  const bgStyles = { backgroundColor: "#a9a9a9", ...styles.bgStyles };

  const goToBerry = () => {
    navigation.navigate("Berry", { id: berry.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToBerry}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
          <Text style={styles.number}>
              #{`${berry.id}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(berry.name)}</Text>
            <Image source={{ uri: berry.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 70,
    height: 70,
  },
});
