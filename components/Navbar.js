import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 left-0 bg-zinc-900/50 backdrop-blur-lg">
      <div className="max-w-screen-xl h-20 m-auto px-8 flex items-center justify-between">
        <h1 className="font-bold text-2xl text-white">Portfolio</h1>
        <div className="font-medium text-zinc-400 space-x-4">
          <Link className="transition-all hover:text-white hover:font-semibold border-b-white hover:border-b-2" href="/">About</Link>
          <Link className="transition-all hover:text-white hover:font-semibold border-b-white hover:border-b-2" href="/projects">Project</Link>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;