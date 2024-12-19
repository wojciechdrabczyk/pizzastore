export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="32" cy="32" r="30" fill="#F4A460" /> {/* Pizza base */}
            <path
                d="M32 2 A30 30 0 1 1 2 32 L32 32 Z"
                fill="#F08080"
            /> {/* Pizza slice */}
            <circle cx="22" cy="22" r="3" fill="#800000" /> {/* Topping */}
            <circle cx="28" cy="38" r="3" fill="#800000" /> {/* Topping */}
            <circle cx="40" cy="30" r="3" fill="#800000" /> {/* Topping */}
        </svg>
    );
}
