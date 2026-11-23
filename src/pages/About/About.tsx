import { FaPhone, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export const About = () => {
  return (
    <section dir="rtl" className="mx-4 my-2">
      <div className="rounded-xl border border-[#806344]/40 bg-[#191914] p-3">

        {/* Title */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-4 w-0.5 rounded-full bg-[#78805A]" />
          <h2 className="text-xs font-semibold text-[#F1E7D5]">
            ارتباط با ما
          </h2>
          <span className="mr-auto text-[8px] text-[#9A805F]">
            CONTACT US
          </span>
        </div>

        {/* Contact */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-white/20 pb-2">

          <a
            href="tel:09362835703"
            className="flex items-center gap-2 text-xs text-[#E9DDCA]"
          >
            <FaPhone className="text-[#9A805F]" />
            <span dir="ltr" className="text-[10px]">09362835703</span>
          </a>

          <a
            href="https://instagram.com/beniamiir"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-[#E9DDCA]"
          >
            <FaInstagram className="text-[#9A805F]" />
            <span dir="ltr" className="text-[10px]">@beniamiir</span>
          </a>

        </div>

        {/* Address */}
        <div className="flex items-start gap-2 py-1 text-xs leading-6 text-[#D5C5A8]">
          <IoLocationOutline className="mt-1 shrink-0 text-sm text-[#9A805F]" />
          <span className="text-[10px]">
            شهرک غرب، بلوار ایران زمین، جنب مجتمع گلستان
          </span>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-lg border border-[#806344]/30">
<iframe
  title="موقعیت مکانی ما"
  src="https://www.google.com/maps?q=35.752667,51.375417&output=embed"
  className="block h-36 w-full grayscale-[70%]"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>        </div>

      </div>
    </section>
  );
};