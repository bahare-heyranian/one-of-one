export const Users = () => {
  return (
    <section dir="rtl" className="mx-4 my-4">
      <div className="overflow-hidden rounded-xl border border-[#806344]/40 bg-[#191914] p-3 shadow-lg">

        {/* Header */}
        <div className="mb-2 flex items-center gap-2">
          <span className="h-4 w-0.5 rounded-full bg-[#78805A]" />

          <h2 className="text-xs font-semibold text-[#F1E7D5]">
            باشگاه مشتریان
          </h2>

          <span className="mr-auto text-[7px] tracking-widest text-[#9A805F]">
            CLUB MEMBERSHIP
          </span>
        </div>

        {/* Description */}
        <p className="mb-2 text-[8px] leading-5 text-[#BEB19B]">
          عضو خانواده ما شو و از پیشنهادهای ویژه و خبرهای جدید باخبر باش!
        </p>

        {/* Form */}
<form className="flex flex-col items-center gap-2">

  <input
    type="tel"
    placeholder="شماره همراه"
    dir="ltr"
    className="w-2/3 rounded-2xl border border-[#806344]/40 bg-[#24231D] px-3 py-2 text-[9px] text-center text-white outline-none placeholder:text-[#918675] transition focus:border-[#78805A]"
  />

  <button
    type="submit"
    className="group relative w-2/3 overflow-hidden rounded-2xl border border-[#C4A477]/70 bg-gradient-to-br from-[#A18A5D] via-[#78805A] to-[#414B32] px-3 py-1.5 text-[10px] font-extrabold text-[#FFF8E9] shadow-[0_3px_12px_rgba(154,128,95,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E4C99A] hover:shadow-[0_5px_18px_rgba(196,154,108,0.4)] active:translate-y-0 active:scale-95"
  >
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative flex items-center justify-center gap-2">
      ✦ عضویت در باشگاه
      <span className="transition-transform duration-300 group-hover:-translate-x-1">
        ←
      </span>
    </span>
  </button>

</form>        {/* Footer note */}
        <p className="mt-3 text-center text-[9px] text-[#8F806B]">
          ✦ همراهی شما، دلگرمی ماست
        </p>

      </div>
    </section>
  );
};