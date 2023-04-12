import { Container } from "../Layout";

interface HeroProps {
  children: React.ReactNode;
}

export const HeroContainer: React.FC<HeroProps> = ({ children }) => {
  return (
    <section className={`py-20 bg-hero-image bg-cover bg-center`}>
      <Container>{children}</Container>
    </section>
  );
};
