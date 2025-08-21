import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  appbarTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#343A40",
    letterSpacing: 0.5,
  },
  logoContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 20,
    padding: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 20,
    // padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#c6f0e3ff",
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
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});