import { useRouter } from "next/dist/client/router"

const navigation = [
  {name: "TOPS", href: "/"},
  {name: "DRESSES", href: "/"},
  {name: "BOTTOMS", href: "/"},
  {name: "JACKETS", href: "/"},
  {name: "SHOES", href: "/"},
  {name: "NEW", href: "/"},
  {name: "item", href: "/item"},
]

function Header() {
  const router = useRouter()

  return (
    <header className="flex items-center justify-center lg:inline-flex h-16 bg-white sticky pl-4">

      <h1
        onClick={() => router.push("/")} 
        className="font-racing text-5xl hover:text-[fuchsia] hover:cursor-pointer">
        Poppins
      </h1>
    
      <nav className="hidden lg:inline-flex space-x-4 ml-8">
        {navigation.map((item, index) => (
          <p
            key={index}
            onClick={() => router.push("/item")}
            className="hover:border-b-8 hover:border-[fuchsia] hover:cursor-pointer h-16 w-full pt-7"
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
