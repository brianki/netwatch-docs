import Link from 'next/link';
import "@/public/custom.css";
export const metadata = {
  title: 'Netwatch.ai',
};

export default function HomePage() {
  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        Netwach docs
      </h1>
      <p>
        You can open{' '}
        <Link
          href="/docs"
          style={{
            fontWeight: '600',
            textDecoration: 'underline',
          }}
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
