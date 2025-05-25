import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src={logo} alt="Edu-Nexus Logo" width={46} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <p>Home</p>
        <p>Companions </p>
        <p>My Journey </p>
      </div>
    </nav>
  );
};

export default Navbar;
