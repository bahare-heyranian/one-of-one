
import { useState } from "react"
import type { TMenuData } from "../../data/data"
import { FiMoreVertical } from "react-icons/fi";

export const MenuCart = ({ name, image, price, detail }: TMenuData) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Menu Card */}

{/* Menu Card */}
<div
onClick={() => setIsOpen(true)}

className=" overflow-hidden rounded-2xl border border-white/10 bg-[#171916] shadow-lg">

  <div className="relative h-28 w-28">

    {/* Image */}
    <img
      src={image}
      alt={name}
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />

    {/* Dark Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

    {/* Name & Info Icon */}
    <div className="absolute bottom-0 right-0 flex w-full items-center justify-between gap-1 p-2.5">

      <h3 className="text-xs font-semibold whitespace-nowrap text-white drop-shadow-lg">
        {name}
      </h3>

      <button
        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-amber-100/40 bg-black/60 text-amber-200 transition hover:bg-amber-200 hover:text-black"
        aria-label={`جزئیات ${name}`}
      >
        <FiMoreVertical/>
      </button>

    </div>
  </div>
</div>

      {/* Details Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >

          <div
            className="w-full max-w-sm overflow-hidden rounded-2xl border border-amber-100/20 bg-[#171916] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`جزئیات ${name}`}
          >

            {/* Modal Image */}
            <div className="relative h-48">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white"
                aria-label="بستن"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 p-4 text-right">

              <h2 className="text-lg font-bold text-amber-50">
                {name}
              </h2>

              <div>
                <p className="mb-2 text-xs font-semibold text-amber-200">
                  ترکیبات و جزئیات
                </p>

                <p className="text-sm leading-7 text-gray-300">
                  {detail}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-sm text-gray-400">
                  قیمت
                </span>

                <span className="text-base font-bold text-amber-300">
                  {price.toLocaleString("fa-IR")} تومان
                </span>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}
