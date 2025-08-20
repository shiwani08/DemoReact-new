import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#a1ebd5ff",
  },
  logoContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 20,
    padding: 20
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },

  sectionContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textContainer: {
    flex: 1, // take available space
    marginRight: 10,
  },

  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  sectionDesc: {
    fontSize: 14,
    color: "#555",
  },

  sectionImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});