export const baseTheme = {
  typography: {
    fontFamily: '"Be Vietnam Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          height: "100%",
          width: "100%",
        },
      },
    },
  },
};
