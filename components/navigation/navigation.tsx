import Image from "next/image"
import Link from "next/link"
import '../../app/globals.css'
import Themebutton from "../ThemeButton"


 
const Navigation = () => {
  return (
  <header>
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-black bg-white dark:bg-black dark:text-white border- border-2 sticky top-0 z-50">       <div className="border-r-2	">
          <a href="/">
          <Image
            src="/app/favicon.ico"
            width={50}
            height={50}
            alt="K&K RECORDS Logotyp"
          />
          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto border-x" id="menu">
          <ul
            className="
              pt-4
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:underline" href="#"> Features</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:underline" href="#"
                >Pricing</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:underline" href="#"
                >Customers</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:underline" href="#"
                >Blog</a>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:underline"
                href="#"
                >
                  Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:flex md:items-center md:w-auto border-l" id="menu">
          <ul
            className="
              pt-4
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link
                className="md:p-4 py-2 block hover:underline"
                href="#">
                  Logga in
                </Link>
            </li>
          </ul>
          <Themebutton/>
        </div>
    </nav>
  </header>

  )
}

export default Navigation
