import Image from "next/image";
import { Container } from "../Layout";

interface HeroProps {
  children: React.ReactNode;
  customStyle?: string;
  backdrop?: string;
}

export const HeroContainer: React.FC<HeroProps> = ({ children, backdrop, customStyle }) => {
  return (
    <section className={`py-20 relative ${customStyle}`}>
      <Image className={`absolute z-10 left-0 right-0 top-0 bottom-0 object-cover w-full h-full`} src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop}`} alt="backdrop" width={1920} height={1080} />
      <div className={`z-20 bg-black/75 absolute z-10 left-0 right-0 top-0 bottom-0`}></div>
      <Container customStyle={`z-[21]`}>{children}</Container>
    </section>
  );
};
