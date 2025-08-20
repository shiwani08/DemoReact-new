import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#5fa193",
  },
  input: {
    borderWidth: 1,
    borderColor: "#5fa193",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#5fa193",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    width: 120,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchBox: {
    position: "absolute",
    top: 10,           // Moves below status bar
    left: 15,
    right: 15,
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  map: {
    flex: 1,
  },
});
