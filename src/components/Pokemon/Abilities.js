import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Abilities(props) {
  const { abilities } = props;

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Ataques iniciales: </Text>
      {map(abilities, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.ability.name)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
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
    fontSize: 12,
    color: "#6b6b6b",
  },

});
