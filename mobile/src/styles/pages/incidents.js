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

  headerText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 13,
    color: "#737380",
  },

  headerTextBold: {
    fontFamily: "Roboto_700Bold",
  },

  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 28,
    marginBottom: 16,
    marginTop: 48,
    color: "#13131a",
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "Roboto_400Regular",
    color: "#737380",
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 12,
    fontFamily: "Roboto_700Bold",
    color: "#41414d",
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 13,
    fontFamily: "Roboto_400Regular",
    marginBottom: 24,
    color: "#737380",
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#e02041",
    fontSize: 13,
    fontFamily: "Roboto_700Bold",
  },
});

export default styles;
