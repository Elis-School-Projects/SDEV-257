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
  inputContainer: {
    width: '90%',
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    marginTop: 8,
    padding: 8,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
  },
  input: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    paddingVertical: 4,
    fontSize: 18,
  },
  hidden: {
    display: "none"
  },
  detailsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#dbdbdb",
    padding: 16,
  },
  closePage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsTitle: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "500",
    paddingVertical: 16,
  },
  detailsBody: {
    textAlign: "center",
    fontSize: 16,
  },
  detailsCrawl: {
    textAlign: "center",
    fontSize: 16,
    paddingTop: 18,
    marginTop: 18,
    borderTopColor: "#000",
    borderTopWidth: 1,
  },
});