import Logo from './Logo';
import Counter from './Counter';

export default function Header({ total, totalPacked }) {
    return (
        <header>
            <Logo />
            <Counter total={total} totalPacked={totalPacked} />
        </header>
    );
}
