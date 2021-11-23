import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
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
