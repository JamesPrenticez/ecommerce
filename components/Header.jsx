const navigation = [
  {name: "TOPS", href: "/"},
  {name: "DRESSES", href: "/"},
  {name: "BOTTOMS", href: "/"},
  {name: "JACKETS", href: "/"},
  {name: "NEW", href: "/"},
]

function Header() {
  return (
    <header className="flex items-center justify-center lg:inline-flex h-16 bg-white sticky pl-4">

      <h1 className="font-racing text-5xl hover:text-[pink] hover:cursor-pointer">
        Poppins
      </h1>
    
      <nav className="hidden lg:inline-flex space-x-4 ml-8">
        {navigation.map((item, index) => (
          <p
            key={index}
            className="hover:border-b-8 hover:border-red-500 hover:cursor-pointer h-16 w-full pt-7"
          >
            {item.name}
          </p>
          )
        )

        }
      </nav>
    </header>
  )
}

export default Header
