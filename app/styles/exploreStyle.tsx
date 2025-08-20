import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  map: {
    flex: 1,
  },
});