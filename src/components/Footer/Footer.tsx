import logo from "../../assets/image/download.png"

export const Footer = () => {
  return (
    <div dir="rtl" className="relative mt-8 h-16 bg-[#171713]">

      {/* محوشدگی مرز بالایی */}
      <div className="bg-gradient-to-b from-transparent to-[#141713]/50" />

      <div className="flex h-full items-center justify-between px-5">

        {/* لوگو سمت راست */}
        <img
          src={logo}
          alt="One of One Logo"
          className="h-12 w-12 object-contain"
        />

        {/* شعار سمت چپ */}
        <p className="text-[11px] font-light tracking-wide text-[#C9B99A]">
          طعم خوب، خاطره ماندگار
        </p>

      </div>
    </div>
  )
}