import styled from "styled-components";

export const FoxIcon: React.FC = () => {
  const source = "/images/fox.png";

  const Icon = styled("img")({
    width: 68,
    height: 68,
  });

  const Container = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Number.MAX_VALUE,
    width: 95,
    height: 95,
    border: "4px solid black",
    background:
      "linear-gradient(180deg, #D02828 0%, #FF8934 0.01%, #DC3131 100%)",
  });

  return (
    <Container>
      <Icon src={source} />
    </Container>
  );
};
