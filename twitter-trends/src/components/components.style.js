import { styled } from "../stiches.config";

const StyledItem = styled("div", {
  backgroundColor: "#eee",
  borderRadius: 4,
  padding: "4px 8px",
  transition: "background-color .8s ease-out",
  marginTop: 8,
  ":hover": {
    backgroundColor: "#fff",
    transition: "background-color .1s ease-in",
  },
  // width: "50px",
});

const StyledColumn = styled("div", {
  padding: "24px 16px",
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  width: "100%",
  marginTop: 8,

  h2: {
    margin: 0,
    padding: "0 16px",
  },
});

const StyledList = styled("div", {
  backgroundColor: "#ddd",
  borderRadius: 8,
  padding: 16,
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  width: "100%",
  flexGrow: 1,
  margin: 20,
  gap: 3,
});

export { StyledItem, StyledColumn, StyledList };
