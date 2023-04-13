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
        src={poster}
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
    responsive: `sm:w-[145px] md:w-[170px] w-[130px] `,
  },
};
