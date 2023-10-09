import Link from "next/link";
import Counter from "./counter";

export default function Navbar() {
  return (
    <div className="bg-purple-500 flex items-center justify-center mb-5">
      <div className="text-white flex items-baseline justify-between w-full py-3 px-20">
        <h1 className="font-bold">RSC DEMO</h1>
        <Counter />
        <Link href={"/"} className="underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
