import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
type Props = {};

const header = (props: Props) => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="border rounded-2xl w-[3em] h-[3em]"
            />
            <span className="ml-3 text-xl">Todo&apos;s</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <a
              href="https://iamahmadsaboor.vercel.app/"
              className="mr-5 hover:text-gray-900"
              target="_blank"
            >
              About
            </a>
            <Link href="/Todo" className="mr-5 hover:text-gray-900">
              My Todos
            </Link>
            <Link href="#" className="mr-5 hover:text-gray-900">
              Contact Me
            </Link>
          </nav>
          <a
            href="https://github.com/iamahmadsaboor"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            target="_blank"
          >
            GitHub{" "}
            <span className="hover:rotate-90 transition-all ease">
              &#x2192;
            </span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default header;
