import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import api from "../../services/api";
export default function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);

  const addPurchase = () => {
    api
      .post("/create", {
        name: name,
        price: price,
        weight: weight,
      })
      .then(() => {
        console.log("Compra feita");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View>
      <View>
        <Text>Qual ração você comprou?</Text>
        <TextInput
          autoCapitalize="sentences"
          onChangeText={(event) => {
            setName(event);
          }}
        />
        <Text>Quanto custou?</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(event) => {
            setPrice(event);
          }}
        />
        <Text>Quantos quilos?</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(event) => {
            setWeight(event);
          }}
        />
        <Button title="Submit" onPress={addPurchase} />
      </View>
    </View>
  );
}
