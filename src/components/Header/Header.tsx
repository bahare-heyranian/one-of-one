import header from "../../assets/image/header.png"
import logo from "../../assets/image/download.png"

export const Header = () => {
  return (
    <header className="w-full">

      {/* Logo Area */}
      <div className="flex h-16 items-center justify-center bg-[#171713]">


          <img
            src={logo}
            alt="One of One Logo"
            className="h-full w-full object-contain"
          />

        </div>

      {/* Header Image */}
      <div className="relative h-56 w-full overflow-hidden">

        <img
          src={header}
          alt="Food Truck"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141713]/50" />

      </div>

    </header>
  )
}