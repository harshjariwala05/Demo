const Icon = ({ size = 100, color = "black", fill = "black" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            stroke={color}
        >
            <path d="M50 0C54 20 80 46 100 50C80 54 54 80 50 100C46 80 20 54 0 50C20 46 46 20 50 0Z" />
        </svg>
    );
};

export default Icon;