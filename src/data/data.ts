
import kotlet from "../assets/image/kotlet.jpeg"
import ash from "../assets/image/Ash Reshteh (Persian Herb, Bean, and Noodle Soup).jpeg"
import tea from "../assets/image/tea.jpeg"

export type TMenuData = {
  name: string
  image: string
  price: number
  detail: string
}

export const MenuData: TMenuData[] = [
  {
    name: "کتلت مامان‌پز",
    image: kotlet,
    price: 340,
    detail: "گوشت چرخ‌کرده، سیب‌زمینی، پیاز، تخم‌مرغ و ادویه مخصوص، همراه با خیارشور و گوجه"
  },
  {
    name: "آش کرمانشاهی",
    image: ash,
    price: 220,
    detail: "نخود، لوبیا، عدس، سبزی آش، رشته و پیازداغ و نعناع‌داغ"
  },
  {
    name: "چای و دمنوش",
    image: tea,
    price: 70,
    detail: "چای تازه‌دم و دمنوش‌های گیاهی با عطر و طعم طبیعی"
  },
]
