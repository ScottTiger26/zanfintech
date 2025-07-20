// src/components/Header.jsx
import { Button } from "@/components/ui/button"; // if using shadcn
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10">
      <h1 className="text-xl font-bold">Fintech</h1>
      <nav className="space-x-6 hidden md:block">
        <Link to="/">Demos</Link>
        <Link to="/">About</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Pages</Link>
        <Link to="/">Contact</Link>
      </nav>
      <div className="space-x-4">
        <button className="text-sm">Sign in</button>
        <button className="bg-black text-white px-4 py-2 rounded-md">Get your card</button>
      </div>
    </header>
  );
};

export default Header;
