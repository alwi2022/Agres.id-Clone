import Link from "next/link";

export default function NavbarLoginRegisPage() {
  return (
    <nav className=  "text-white shadow-md py-4" style={{backgroundColor:'#EC1C24'}}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
      

        <div className="flex-grow text-center">
          <Link href="/">
            <img
              src="https://www.agres.id/assets/images/logo-white.svg" 
              alt="Agres.id Logo"
              className="h-16 mx-auto"
            />
          </Link>
        </div>

       
      </div>
    </nav>
  );
}
