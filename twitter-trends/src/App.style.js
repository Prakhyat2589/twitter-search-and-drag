import { styled } from "./stiches.config";

const StyledColumns = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "10px auto",
  width: "80%",
  height: "80vh",
  gap: "8px",
});

const NoResults = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "5px 50px 0 auto",
  width: "80%",
  gap: "8px",
});

export { StyledColumns, NoResults };
