import React, { useState, useEffect } from "react";
import styles from "./style";
import api from "../../services/api"
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";


export default function Popup({isEditVisible, setIsEditVisible, nameEdit, priceEdit, weightEdit, id}){
  const editPurchase = (idEdit) => {
    api
      .put(`/editByID/${idEdit}`, {
        name: nameEdit,
        price: priceEdit,
        weight: weightEdit,
      })
      .then(() => {
        getList();
      }).catch((err) => {
        console.log(err);
      })
  }
    return(
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
          <TextInput placeholder="Ração" defaultValue={nameEdit} style={styles.Input}></TextInput>
          <Text>Peso</Text>
          <TextInput placeholder="Peso" value={weightEdit} style={styles.Input}></TextInput>
          <Text>Preço</Text>
          <TextInput placeholder="Valor" value={priceEdit} style={styles.Input}></TextInput>
          <View style={styles.ModalButtons}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                setIsEditVisible(!isEditVisible);
              }}
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
    </Modal>)
}