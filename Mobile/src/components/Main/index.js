import React from "react";
import { StyleSheet, View, Text, Dimensions, Button } from "react-native";

export default function Main() {
  return (
    <View style={styles.mainPage}>
      <View style={styles.header}>
        <Text style={styles.name}>Zeus Pet Expenses</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoLabel}>Total de gastos:</Text>
        <View style={styles.sumBox}>
          <Text style={styles.sumText}>R$40000</Text>
        </View>
        <Text style={styles.infoLabel}>Total de ração:</Text>
        <View style={styles.sumBox}>
          <Text style={styles.sumText}>1000kg</Text>
        </View>
      </View>
      <View style={styles.botao}>
        <Button
          style={styles.aaa}
          title="Adicionar"
          color="red"
          onPress={() => {
            alert("aaaaa");
          }}
        ></Button>
      </View>
      <View style={styles.table}>
        <View>
          <Text> asdasdasdasd</Text>
        </View>
        <View>
          <Text>aasdadasdasd</Text>
        </View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#39BFA1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  name: {
    fontSize: 35,
  },
  info: {
    flex: 5,
    alignItems: "center",
    width: width,
    display: "flex",
    flexDirection: "column",
  },
  sumBox: {
    height: 220,
    width: 220,
    borderRadius: 110,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginBottom: 10,
  },
  sumText: {
    fontSize: 30,
  },
  infoLabel: {
    fontSize: 25,
  },
  botao: {
    width: 0.8 * width,
  },
  aaa: {
    color: "red",
  },
});
