import Link from "next/link"
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Bir Rüya
        </Link>
        <h4 className="font-semibold text-[40px] py-6">İletişim</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>E-5 Beylikdüzü</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">codewithme</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">0553-013-7882</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">codewithme</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Bizim Hikayemiz</p>
            <p className="pb-4">Bizimle Temas Kurun</p>
            <p className="pb-4">Gizlilik Taahütümüz</p>
            <p className="pb-4">Kullanım Şartları</p>
            <p>Müşteri Hizmetleri</p>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Yemek Deneyimi</p>
            <p className="pb-4">Sağlık</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sporlar</p>
            <p>Etkinlikler</p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
}

export default Footer