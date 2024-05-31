import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 1,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  collapsibleContent: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 1,
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  pickerContainer: {
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  nextButton: {
    marginTop: 12,
    paddingVertical: 12,
    backgroundColor: COLORS.green,
    borderRadius: 8,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  backButton: {
    marginTop: 12,
    paddingVertical: 12,
    backgroundColor: "#6c757d",
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  upperRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    // backgroundColor: COLORS.darkPurple,
  },
  radioLabel: {
    letterSpacing: 1,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  radioOption: {
    alignItems: "center",
  },
  delOps: {
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "medium",
  },
  picker: {
    borderWidth: 10,
    borderColor: COLORS.primary,
  },
  step3txt: {
    marginVertical: 10,
  },
});

export default styles;
