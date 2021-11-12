import Link from 'next/link';
import Navigation from './Navigation';

export default function Header(props) {
  return (
    <header>
      <Navigation structure={props.structure} />
    </header>
  );
}
