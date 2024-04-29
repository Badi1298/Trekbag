export default function Counter({ total, totalPacked }) {
    return (
        <p>
            <b>{totalPacked}</b> / {total} packed
        </p>
    );
}
