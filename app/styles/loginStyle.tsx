import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20, // padding for the whole page
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20, // padding inside container
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5fa193ff",
    padding: 12,
  },
  icon: {
    marginRight: 10,
    padding: 10,
    color: "#5fa193ff",
  },
  input: {
    height: 40,
    borderColor: "#5fa193ff",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#5fa193ff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff", // white text
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007AFF",
  },
});