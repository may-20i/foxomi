import styled from "styled-components";
import { FoxIcon } from "../components/FoxIcon";

export const Home: React.FC = () => {
  const Container = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    background: "#001220;",
    color: "white",
    flexDirection: "column",
  });

  return (
    <Container>
      <FoxIcon />
      <h1>Foxomi</h1>
      <p>Docs</p>
      <p>FAQ</p>
    </Container>
  );
};
