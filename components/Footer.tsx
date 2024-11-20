"use client";
import Image from "next/image";

const socials = [
  { img: "/footer/rs_facebook.png", alt: "facebook" },
  { img: "/footer/rs_instagram.png", alt: "instagram" },
  { img: "/footer/rs_linkedin.png", alt: "linkedin" },
  { img: "/footer/rs_twitter-x.png", alt: "twitter" },
  { img: "/footer/rs_youtube.png", alt: "youtube" },
];

const Footer = () => {
  return (
    <footer className="min-h-60 w-full">
      <div className="flex min-h-[72px] w-full flex-col items-center justify-center space-y-3 bg-primary py-3 md:flex-row md:space-x-8 md:space-y-0 md:py-0">
        <span className="text-white">SUIVEZ-NOUS SUR :</span>
        <div className="flex space-x-4">
          {socials.map((social) => (
            <SocialItem key={social.img} img={social.img} alt={social.alt} />
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const SocialItem = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className="relative flex size-10 items-center justify-center rounded-full bg-white">
      <Image
        src={img}
        alt={alt}
        width={28}
        height={28}
        className="object-contain"
      />
    </div>
  );
};
