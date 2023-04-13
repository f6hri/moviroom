import { Container } from "../Layout";

interface HeroProps {
  children: React.ReactNode;
  customStyle?:string;
}

export const HeroContainer: React.FC<HeroProps> = ({ children,customStyle }) => {
  return (
    <section className={`py-20 bg-hero-image bg-cover bg-center ${customStyle}`}>
      <Container>{children}</Container>
    </section>
  );
};
