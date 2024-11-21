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
        href: "https://www.saint-christophe-assurances.fr/particuliers/assurance-auto",
      },
      {
        label: "Habitation",
        href: "https://www.saint-christophe-assurances.fr/particuliers/habitation/assurance-habitation",
      },
      {
        label: "Santé",
        href: "https://www.saint-christophe-assurances.fr/particuliers/assurance-sante/complementaires-sante",
      },
      {
        label: "Accidents de la vie",
        href: "https://www.saint-christophe-assurances.fr/particuliers/assurance-accident",
      },
      {
        label: "Assurance enseignant",
        href: "https://www.saint-christophe-assurances.fr/particuliers/assurance-enseignant",
      },
      {
        label: "Assurance scolaire",
        href: "https://www.saint-christophe-assurances.fr/informations-pratiques/espace-parents/assurance-scolaire",
      },
    ],
  },
  {
    title: "Associations & institutions",
    links: [
      {
        label: "Enseignement privé",
        href: "https://www.saint-christophe-assurances.fr/associations-institutions/enseignement-prive/mutuelle-enseignement-prive",
      },
      {
        label: "Instituts religieux",
        href: "https://www.saint-christophe-assurances.fr/associations-institutions/instituts-religieux/mutuelle-institut-religieux",
      },
      {
        label: "Diocèses",
        href: "https://www.saint-christophe-assurances.fr/associations-institutions/dioceses/mutuelle-diocese",
      },
      {
        label: "Sanitaire et social",
        href: "https://www.saint-christophe-assurances.fr/associations-institutions/sanitaire-social/etablissement-medico-social",
      },
      {
        label: "Associations humanitaires et caritatives",
        href: "https://www.saint-christophe-assurances.fr/associations-institutions/associations-humanitaires-et-caritatives/mutuelle-association",
      },
    ],
  },
  {
    title: "Découvrir la mutuelle",
    links: [
      {
        label: "Qui sommes-nous ?",
        href: "https://www.saint-christophe-assurances.fr/saint-christophe/identite/qui-sommes-nous",
      },
      {
        label: "Organisation",
        href: "https://www.saint-christophe-assurances.fr/saint-christophe/organisation/organisation-mutualiste",
      },
      {
        label: "Partenaires",
        href: "https://www.saint-christophe-assurances.fr/saint-christophe/partenaires",
      },
      {
        label: "Actualités",
        href: "https://www.saint-christophe-assurances.fr/saint-christophe/actualites",
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
        href: "https://www.saint-christophe-assurances.fr/page-contact",
      },
      {
        label: "Réclamations",
        href: "https://www.saint-christophe-assurances.fr/informations-pratiques/reclamations",
      },
      {
        label: "Vos questions, nos réponses",
        href: "https://www.saint-christophe-assurances.fr/informations-pratiques/FAQ",
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
