import { styled } from "../../stiches.config";

const StyledColumns = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "50px 50px 10px auto",
  width: "80%",
  gap: "8px",
});

const SearchBarWrapper = styled("div", {
  maxWidth: "250px",
  width: "100%",
});

const SearchInput = styled("input", {
  maxWidth: "250px",
  width: "100%",
  height: "30px",
});

export { StyledColumns, SearchInput, SearchBarWrapper };
