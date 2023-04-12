import { HeroCardProps } from "./interface";
import Badge from "../Shared/Badge";

export const HeroCardContainer: React.FC<HeroCardProps> = ({
  id,
  title,
  desc,
  imdb,
}) => {
  return (
    <section
      className={`rounded-lg overflow-hidden mb-10 md:mx-10 bg-[url('https://www.themoviedb.org/t/p/original/84XPpjGvxNyExjSuLQe0SzioErt.jpg')] bg-cover bg-center h-[22em] relative`}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent`}
      >
        <div className={`absolute left-5 bottom-5 right-5`}>
          <h3 className={`text-4xl font-semibold flex items-center gap-3`}>
            {title}{" "}
            <Badge title={imdb} color="bg-yellow-500" customStyle="text-xl" />
          </h3>
          <p className={`my-2 text-lg truncate`}>{desc}</p>
        </div>
      </div>
    </section>
  );
};
