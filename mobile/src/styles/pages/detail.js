import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    marginTop: 24,
  },

  incidentProperty: {
    fontSize: 12,
    color: "#41414d",
    fontFamily: "Roboto_700Bold",
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 13,
    color: "#737380",
    fontFamily: "Roboto_400Regular",
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
  },

  heroTitle: {
    fontFamily: "Roboto_700Bold",
    fontSize: 18,
    color: "#13131a",
    lineHeight: 28,
  },

  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Roboto_700Bold",
  },
});

export default styles;
