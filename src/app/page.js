import Image from "next/image";
import Link from "next/link";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="isolate inline-flex rounded-md shadow-sm">
        <Link
          href="/login"
          className="relative inline-flex items-center rounded-l-md bg-blue-400 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          replace
        >
          Login{" "}
        </Link>
        <Link
          href="/dashboard"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-green-400 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          replace
        >
          Dashboard
        </Link>
      </div>
      <GetInTouch />
    </main>
  );
}
