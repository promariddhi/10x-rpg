import Link from "next/link";

export default function Home() {
  return (
    <main className="absolute inset-0 flex flex-col h-full bg-blue-100">
      <h1> 10x RPG </h1>
      <nav>
        <Link href="/dashboard"> Dashboard </Link>
        <Link href="/component-test"> Test </Link>
      </nav>
    </main>
  );
}
