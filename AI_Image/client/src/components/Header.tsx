import logoImg from '../assets/logo.png.jpeg'



function Header() {
    return (
        <header>
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    
                        <img
                            src={logoImg}
                            className="mr-3 h-12 sm:h-14"
                            alt="Flowbite Logo"
                        />
                    
                    
                </div>
            </nav>
        </header>
    )
}

export default Header
