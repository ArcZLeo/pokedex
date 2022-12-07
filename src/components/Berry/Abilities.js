import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Abilities(props) {
  const { abilities } = props;

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Información: </Text>
        <Text style={styles.statName}>{abilities.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 80,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 16,
    color: "#6b6b6b",
  },

});
