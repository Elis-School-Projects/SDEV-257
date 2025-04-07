import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "20%",
  },
  title: {
    fontSize: 24,
    marginTop: 8,
  },
  inputContainer: {
    width: '90%',
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    marginTop: 8,
  },
  input: {
    width: "80%",
    textAlign: "center",
    backgroundColor: "#fff",
    paddingVertical: 4,
    fontSize: 18,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingVertical: 6,
  },
  currentSearch: {
    position: 'absolute',
    top: '50%',
  },
  bold: {
    fontWeight: 'bold',
  }
});