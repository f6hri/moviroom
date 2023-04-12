import { ButtonProps } from "./interface";

export const DefaultButton: React.FC<ButtonProps> = ({ title, icon, onClick, customStyle }) => (
    <button onClick={onClick} className={`flex items-center gap-1 bg-primary hover:bg-red-800 transition ease-in p-2 px-6 rounded-lg ${customStyle}`}>
        {icon}{title}
    </button>
);
