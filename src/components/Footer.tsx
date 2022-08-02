import FooterDetails from "./FooterDetails";
import { v4 as uuidv4 } from "uuid";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

function Footer() {
  const footerInformations = [
    {
      id: uuidv4(),
      title: "Features",
      links: [
        {
          id: uuidv4(),
          link: "Link Shortening",
        },
        {
          id: uuidv4(),
          link: "Branded Links",
        },
        {
          id: uuidv4(),
          link: "Analytics",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Resources",
      links: [
        {
          id: uuidv4(),
          link: "Blog",
        },
        {
          id: uuidv4(),
          link: "Developers",
        },
        {
          id: uuidv4(),
          link: "Support",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Company",
      links: [
        {
          id: uuidv4(),
          link: "About",
        },
        {
          id: uuidv4(),
          link: "Our team",
        },
        {
          id: uuidv4(),
          link: "Careers",
        },
        {
          id: uuidv4(),
          link: "Contact",
        },
      ],
    },
  ];
  return (
    <div className="Footer">
      <h3 className="Footer--title">Shortly</h3>
      <div className="Footer--informations">
        {footerInformations.map((el) => (
          <FooterDetails
            key={el.id}
            id={el.id}
            title={el.title}
            links={el.links}
          />
        ))}
        <div className="Footer--socials">
          <img src={Facebook} alt="" className="Footer--social" />
          <img src={Twitter} alt="" className="Footer--social" />
          <img src={Pinterest} alt="" className="Footer--social" />
          <img src={Instagram} alt="" className="Footer--social" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
