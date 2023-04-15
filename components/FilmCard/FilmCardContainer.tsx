import Image from "next/image";
import Link from "next/link";

interface FilmCardProps {
  id: string;
  poster: string;
}

export const FilmCardContainer: React.FC<FilmCardProps> = ({ id, poster }) => {
  return (
    <Link href={`/series/${id}`}>
      <Image
        className={`${styles.posterImage.style} ${styles.posterImage.responsive}`}
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
        width={170}
        height={300}
        alt="poster"
      />
    </Link>
  );
};

const styles = {
  posterImage: {
    style: `rounded-lg `,
    responsive: ` md:w-[140px] w-[130px] `,
  },
};
