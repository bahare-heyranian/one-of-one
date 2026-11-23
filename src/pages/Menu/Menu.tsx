import { MenuCart } from "../../components/MenuCart"
import { MenuData } from "../../data/data"

export const Menu = () => {
  return (
    <div className="px-4 pt-2 ">
     <div className="flex items-center justify-center gap-3">
    <span className="h-px w-10 bg-amber-200/40" />

    <h1 className="text-sm font-bold tracking-wide text-amber-100">
     menu
    </h1>

    <span className="h-px w-10 bg-amber-200/40" />
  </div>

  <p className="mt-1 text-center text-[5px] tracking-widest text-white/40">
    TASTE THE HOMEMADE FLAVOR
  </p>

      <div className="grid grid-cols-3 justify-items-center gap-3 p-2">
        {MenuData.map((item, index) => (
          <MenuCart
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
            detail={item.detail}
          />
        ))}
      </div>
    </div>
  )
}