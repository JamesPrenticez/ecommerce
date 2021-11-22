const navigation = [
  {name: "TOPS", href: "/"},
  {name: "DRESSES", href: "/"},
  {name: "BOTTOMS", href: "/"},
  {name: "JACKETS", href: "/"},
  {name: "NEW", href: "/"},
]

function Header() {
  return (
    <header className="flex items-center lg:justify-center h-16 bg-white sticky pl-4">

      <h1 className="font-racing text-5xl hover:text-[pink] hover:cursor-pointer">
        Poppins
      </h1>
    
      <nav className="inline-flex space-x-4 pl-4 mt-4 border-b hover:border-red-500">
        {navigation.map((item, index) => (
          <p
            key={index}
            className=""
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
