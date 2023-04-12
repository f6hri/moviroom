import Image from "next/image";
import Link from "next/link";

interface FilmCardProps {
    id: string;
    poster: string;
}

const FilmCardContainer: React.FC<FilmCardProps> = ({ id, poster }) => {
    return (
        <Link href={`/series/${id}`}>
            <Image className={`rounded-md`} src={poster} width={150} height={180} alt="poster" />
        </Link>
    );
}

export { FilmCardContainer }