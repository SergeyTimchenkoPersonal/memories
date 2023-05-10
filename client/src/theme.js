import { createTheme } from "@mui/system";

// export default createTheme(() => ({
//   appBar: {
// borderRadius: 15,
// margin: "30px 0",
// display: "flex",
// flexDirection: "row",
// justifyContent: "center",
// alignItems: "center",
//   },
//   heading: {
//     color: "rgba(0,183,255, 1)",
//   },
//   image: {
//     marginLeft: "15px",
//   },
// }));

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
      primary: "rgba(0, 0, 0, 0.5)",
    },
    text: {
      primary: "rgba(0,183,255, 1)",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default theme;
