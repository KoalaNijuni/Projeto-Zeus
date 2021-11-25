import React, { useState, useEffect } from "react";
import styles from "./style";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";


export default function Popup({isModalVisible, setIsModalVisible}){
    return(
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
              <TextInput
                placeholder="Ração"
                onChangeText={(value) => {
                  setName(value);
                }}
                style={styles.Input}
              ></TextInput>
              <Text>Quantos quilos?</Text>
              <TextInput
                placeholder="Preço"
                onfalseyboardType="numeric"
                style={styles.Input}
              ></TextInput>
              <Text>Quanto custou?</Text>
              <TextInput
                placeholder="Valor"
                onChangeText={(value) => {
                  setPrice(value);
                }}
                keyboardType="numeric"
                style={styles.Input}
              ></TextInput>
              <View style={styles.ModalButtons}>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => {
                    addPurchase();
                    setIsModalVisible(!isModalVisible);
                  }}
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
        </Modal>)
}