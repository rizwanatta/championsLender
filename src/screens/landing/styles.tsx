import { StyleSheet } from "react-native";
const secondaryColor = "#a78e50";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: "40%",
  },
  headerBgImage: {
    width: "100%",
    height: "100%",
  },
  headerOpacityContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "rgba(14, 96, 80, 0.85)",
  },
  logo: {},
  logoSaying: {
    color: secondaryColor,
    fontSize: 25,
    fontFamily: "default-medium",
    marginTop: 20,
  },
  tipContainer: {
    width: "100%",
    justifyContent: "center",
    height: "20%",
    paddingHorizontal: 15,
  },
  tipTitle: {
    fontSize: 25,
    color: "rgba(14, 96, 80, 1)",
    textAlign: "center",
    fontFamily: "default-bold",
    margin: 10,
  },
  tipSayingContainer: {
    borderColor: "rgba(14, 96, 80, 1)",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    padding: 10,
  },
  tipText: {
    color: secondaryColor,
    fontFamily: "default-regular",
  },

  menuIconContainer: {
    backgroundColor: secondaryColor,
    height: 100,
    width: 120,
    borderColor: "rgba(14, 96, 80, 1)",
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  menuIconLabel: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "default-medium",
  },
});

export default styles;
