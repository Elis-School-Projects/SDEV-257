import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-around'
  },
  listName: {
    backgroundColor: '#e1e1e1',
    borderRadius: 15,
    padding: 8,
  }
});