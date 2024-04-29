export default function BaseButton({ variant, label, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`btn ${variant === 'secondary' && 'btn--secondary'}`}
        >
            {label}
        </button>
    );
}
