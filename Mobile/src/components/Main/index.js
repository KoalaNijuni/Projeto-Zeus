import React, { useState, useEffect } from "react";
import api from "../../services/api";
import styles from "./style";
import { format } from "date-fns";
// import Popup from "../Modal/index";
// import PopupEdit from "../ModalEdit/index";

import { useFonts } from "expo-font";

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);

  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState(0);
  const [weightEdit, setWeightEdit] = useState(0);
  const [idEdit, setIdEdit] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState("");

  const [db, setDb] = useState([]);
  const [priceSum, setPriceSum] = useState(0);
  const [weightSum, setWeightSum] = useState(0);

  const addPurchase = () => {
    api
      .post("/create", {
        name: name,
        price: price,
        weight: weight,
      })
      .then((res) => {
        getList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editPurchase = (id) => {
    api
      .put(`/editByID/${id}`, {
        name: nameEdit,
        price: priceEdit,
        weight: weightEdit,
      })
      .then(() => {
        getList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .get("/getAll")
      .then((res) => {
        setDb(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .get("/sum")
      .then((res) => {
        setPriceSum(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .get("/weightSum")
      .then((res) => {
        setWeightSum(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [db]);

  const getList = () => {
    api
      .get("/getAll")
      .then((res) => {
        setDb(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .get("/sum")
      .then((res) => {
        setPriceSum(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .get("/weightSum")
      .then((res) => {
        setWeightSum(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [loaded] = useFonts({
    DancingScript_Regular: require("../../assets/fonts/DancingScript-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../../assets/background2.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <ScrollView>
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
                keyboardType="numeric"
                onChangeText={(value) => {
                  setWeight(value);
                }}
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
              <TextInput
                placeholder="Ração"
                defaultValue={nameEdit}
                style={styles.Input}
                onChangeText={(value) => {
                  setNameEdit(value);
                }}
              ></TextInput>
              <Text>Peso</Text>
              <TextInput
                placeholder="Peso"
                defaultValue={`${weightEdit}`}
                style={styles.Input}
                onChangeText={(value) => {
                  setWeightEdit(value);
                }}
              ></TextInput>
              <Text>Preço</Text>
              <TextInput
                placeholder="Valor"
                defaultValue={`${priceEdit}`}
                style={styles.Input}
                onChangeText={(value) => {
                  setPriceEdit(value);
                }}
              ></TextInput>
              <View style={styles.ModalButtons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    editPurchase(idEdit);
                    setIsEditVisible(!isEditVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setIsEditVisible(!isEditVisible)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => {
                  api
                    .delete(`/deleteID/${idEdit}`)
                    .then(() => {
                      getList();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  setIsEditVisible(!isEditVisible);
                }}
              >
                <Text style={styles.textStyle}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.mainPage}>
          <View style={styles.header}>
            <Text
              style={{ ...styles.name, fontFamily: "DancingScript_Regular" }}
            >
              Zeus Pet Expenses
            </Text>
          </View>
          <View style={styles.info}>
            <View style={styles.sumBox}>
              <Text style={styles.infoLabel}>Total de gastos:</Text>
              <Text style={styles.priceText}>R${priceSum}</Text>
            </View>
            <View style={styles.sumBox}>
              <Text style={styles.infoLabel}>Total de ração:</Text>
              <Text style={styles.sumText}>{weightSum}kg</Text>
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
            <View style={styles.row}>
              <View style={({ backgroundColor: "white" }, styles.rowBox)}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Ração</Text>
              </View>
              <View style={styles.rowBox}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Preço</Text>
              </View>
              <View style={styles.rowBox}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Peso</Text>
              </View>
              <View style={styles.rowBox}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Data</Text>
              </View>
            </View>
            {db.map((purchase) => {
              return (
                <TouchableOpacity
                  key={purchase._id}
                  style={styles.row}
                  onPress={() => {
                    setIsEditVisible(true);
                    setIdEdit(purchase._id);
                    setNameEdit(purchase.name);
                    setPriceEdit(purchase.price);
                    setWeightEdit(purchase.weight);
                  }}
                >
                  <View style={styles.rowBox}>
                    <Text>{purchase.name}</Text>
                  </View>
                  <View style={styles.rowBox}>
                    <Text>R${purchase.price}</Text>
                  </View>
                  <View style={styles.rowBox}>
                    <Text>{purchase.weight}kg</Text>
                  </View>
                  <View style={styles.rowBox}>
                    <Text>
                      {format(Date.parse(purchase.createdAt), "dd/MM/yyyy")}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
