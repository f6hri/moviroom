interface BadgeProps {
    title: string | number;
    color: string;
    customStyle?:string;
}

const Badge: React.FC<BadgeProps> = ({ title, color,customStyle }) => (
    <div className={`${color} text-sm p-1 px-3 rounded-lg ${customStyle}`}>{title}</div>
)

export default Badge;