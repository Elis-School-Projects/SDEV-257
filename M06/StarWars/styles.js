import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 16
  },
  itemContainer: {
    flexDirection: 'row',
  },
  listName: {
    backgroundColor: '#e1e1e1',
    borderRadius: 15,
    textAlign: "center",
  },
  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 40,
    marginTop: 10,
    marginHorizontal: 'auto',
  },
  swipeItem: {
    width: 200,
    height: 40,
    backgroundColor: "#e1e1e1",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey",
  },
  swipeItemText: {
    textAlign: "center",
    color: "#000",
  },
  swipeBlank: {
    width: 200,
    height: 30,
  },
});