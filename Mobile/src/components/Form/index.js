import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);

  const addPurchase = () => {
    Axios.post("https://localhost:3002/create", {
      name: name,
      price: price,
      weight: weight,
    }).then(() => {
      console.log("yayyy");
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
