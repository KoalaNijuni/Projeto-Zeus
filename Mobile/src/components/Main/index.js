import React, { useState } from "react";
import api from "../../services/api";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  ImageBackground,
} from "react-native";

export default function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(true);

  return (
    <ImageBackground
      source={require("../../assets/background2.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.mainPage}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Qual ração você comprou?</Text>
              <TextInput placeholder="Ração" style={styles.Input}></TextInput>
              <Text>Quantos quilos?</Text>
              <TextInput placeholder="Preço" style={styles.Input}></TextInput>
              <Text>Quanto custou?</Text>
              <TextInput placeholder="Valor" style={styles.Input}></TextInput>
              <View style={styles.ModalButtons}>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => setIsModalVisible(!isModalVisible)}
                >
                  <Text style={styles.textStyle}>Adicionar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => setIsModalVisible(!isModalVisible)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isEditVisible}
          onRequestClose={() => {
            setIsEditVisible(!isEditVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Ração</Text>
              <TextInput placeholder="Ração" style={styles.Input}></TextInput>
              <Text>Peso</Text>
              <TextInput placeholder="Peso" style={styles.Input}></TextInput>
              <Text>Preço</Text>
              <TextInput placeholder="Valor" style={styles.Input}></TextInput>
              <View style={styles.ModalButtons}>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => setIsEditVisible(!isEditVisible)}
                >
                  <Text style={styles.textStyle}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => setIsEditVisible(!isEditVisible)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <Text style={styles.name}>Zeus Pet Expenses</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.sumBox}>
            <Text style={styles.infoLabel}>Total de gastos:</Text>
            <Text style={styles.priceText}>R$20,00</Text>
          </View>
          <View style={styles.sumBox}>
            <Text style={styles.infoLabel}>Total de ração:</Text>
            <Text style={styles.sumText}>1000kg</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(true);
          }}
        >
          <View style={styles.botao}>
            <Text style={styles.textoBotao}>ADICIONAR COMPRA</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.table}>
          <View>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  header: {
    backgroundColor: "#EF7C8E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: 120,
    paddingTop: 20,
  },
  name: {
    fontSize: 35,
    color: "white",
  },
  info: {
    alignItems: "center",
    width: width,
    display: "flex",
    flexDirection: "column",
  },
  sumBox: {
    height: 220,
    width: width * 0.8,
    borderRadius: 60,
    backgroundColor: "#FAE8E0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  priceText: {
    color: "#94C973",
    fontSize: 30,
    marginTop: 40,
  },
  sumText: {
    fontSize: 30,
    marginTop: 40,
    color: "#4F4347",
  },
  infoLabel: {
    fontSize: 30,
    marginTop: 10,
    color: "#4F4347",
  },
  botao: {
    width: width * 0.8,
    height: 50,
    borderRadius: 20,
    marginVertical: 20,
    backgroundColor: "#B6E2D3",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    fontSize: 17,
    color: "white",
  },
  table: {},

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 15,
    elevation: 2,
    backgroundColor: "#8FDDE7",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  ModalButtons: {
    flexDirection: "row",
  },
  Input: {
    textAlign: "center",
    width: 250,
    marginVertical: 10,
    padding: 5,
    height: 50,
    backgroundColor: "#FAE8E0",
    borderRadius: 250,
  },
});
