import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({

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

export default styles;
