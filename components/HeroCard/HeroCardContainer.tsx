import { HeroCardProps } from "./interface";
import Badge from "../Shared/Badge";
import { DefaultLink } from "../Shared/Link";
import Image from "next/image";

export const HeroCardContainer: React.FC<HeroCardProps> = ({
  id,
  title,
  desc,
  imdb,
  backdrop
}) => {
  return (
    <section
      className={`rounded-lg overflow-hidden mb-10 h-[22em] relative`}
    >
      <Image className={`absolute z-10 left-0 right-0 top-0 bottom-0 object-cover w-full h-full`} src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop}`} alt={title} width={1920} height={1080} />
      <div
        className={`absolute z-20 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent`}
      >
        <div className={`absolute left-5 bottom-5 right-5`}>
          <DefaultLink href={`/series/${id}`}>
            <h3 className={`text-4xl font-semibold flex items-center gap-3`}>
              {title}{" "}
              <Badge title={imdb} color="bg-yellow-500" customStyle="text-xl" />
            </h3>
          </DefaultLink>
          <p className={`my-2 text-lg truncate`}>{desc}</p>
        </div>
      </div>
    </section>
  );
};

