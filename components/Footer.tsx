"use client";
import Image from "next/image";
import Link from "next/link";

const socials = [
  { img: "/footer/rs_facebook.png", alt: "facebook" },
  { img: "/footer/rs_instagram.png", alt: "instagram" },
  { img: "/footer/rs_linkedin.png", alt: "linkedin" },
  { img: "/footer/rs_twitter-x.png", alt: "twitter" },
  { img: "/footer/rs_youtube.png", alt: "youtube" },
];

const footerLinks: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Particuliers",
    links: [
      {
        label: "Auto",
        href: "#",
      },
      {
        label: "Habitation",
        href: "#",
      },
      {
        label: "Santé",
        href: "#",
      },
      {
        label: "Accidents de la vie",
        href: "#",
      },
      {
        label: "Assurance enseignant",
        href: "#",
      },
      {
        label: "Assurance scolaire",
        href: "#",
      },
    ],
  },
  {
    title: "Associations & institutions",
    links: [
      {
        label: "Enseignement privé",
        href: "#",
      },
      {
        label: "Instituts religieux",
        href: "#",
      },
      {
        label: "Diocèses",
        href: "#",
      },
      {
        label: "Sanitaire et social",
        href: "#",
      },
      {
        label: "Associations humanitaires et caritatives",
        href: "#",
      },
    ],
  },
  {
    title: "Découvrir la mutuelle",
    links: [
      {
        label: "Qui sommes-nous ?",
        href: "#",
      },
      {
        label: "Organisation",
        href: "#",
      },
      {
        label: "Partenaires",
        href: "#",
      },
      {
        label: "Actualités",
        href: "#",
      },
    ],
  },
  {
    title: "Informations pratiques",
    links: [
      {
        label: "Déclarer un sinistre",
        href: "#",
      },
      {
        label: "Nous contacter",
        href: "#",
      },
      {
        label: "Réclamations",
        href: "#",
      },
      {
        label: "Vos questions, nos réponses",
        href: "#",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="min-h-60 w-full bg-[#EAEBE3]">
      <div className="flex min-h-[72px] w-full flex-col items-center justify-center space-y-3 bg-primary py-3 md:flex-row md:space-x-8 md:space-y-0 md:py-0">
        <span className="text-white">SUIVEZ-NOUS SUR :</span>
        <div className="flex space-x-4">
          {socials.map((social) => (
            <SocialItem key={social.img} img={social.img} alt={social.alt} />
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {footerLinks.map((footerLink) => (
          <LinkGroup
            key={footerLink.title}
            title={footerLink.title}
            links={footerLink.links}
          />
        ))}
      </div>
    </footer>
  );
};
export default Footer;

const SocialItem = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-white">
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

const LinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => {
  return (
    <div className="p-4">
      <h6 className="w-full text-xl font-semibold text-primary md:text-lg lg:text-base">
        {title}
      </h6>
      <ul className="w-full">
        {links.map((link) => (
          <li
            key={link?.label}
            className="flex w-full cursor-pointer items-center space-x-3 border-b border-b-[#B9CEDB] py-1 last:border-b-0 hover:bg-white"
          >
            <div className="size-2 rounded-full bg-primary"></div>
            <Link
              href={link?.href}
              className="text-lg text-[#213541] md:text-base lg:text-sm"
            >
              {link?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
