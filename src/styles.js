import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "B3E5BE",
    padding: "20px",
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardgrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardmedia: {
    paddingTop: "56.25%", //16:9
  },
  cardcontent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#fff",
    padding: "50px 0",
  },
}));

export default useStyles;
