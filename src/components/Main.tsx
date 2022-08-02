import Background from "../images/illustration-working.svg";
import Form from "./Form";
import Note from "./Note";
import StartingButton from "./StartingButton";
import Recognition from "../images/icon-brand-recognition.svg";
import Records from "../images/icon-detailed-records.svg";
import Customizable from "../images/icon-fully-customizable.svg";
import Summary from "./Summary";
import Footer from "./Footer";
import { v4 as uuidv4 } from "uuid";

function Main() {
  const notes = [
    {
      id: uuidv4(),
      imageSrc: Recognition,
      title: "Brand Recognition",
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    },
    {
      id: uuidv4(),
      imageSrc: Records,
      title: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: uuidv4(),
      imageSrc: Customizable,
      title: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
    },
  ];
  return (
    <>
      <div className="Main--main-informations">
        <img
          src={Background}
          alt="A person in front of computer"
          className="Main--background"
        />
        <div className="Main--text-content">
          <h1 className="Main--header">More than just shorter links</h1>
          <p className="Main--description">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <StartingButton />
        </div>
      </div>
      <Form />
      <h3 className="Main--subheader">Advanced statistics</h3>
      <p className="Main--subdescription">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <div className="Main--notes">
        {notes.map((el) => (
          <Note
            key={el.id}
            imageSrc={el.imageSrc}
            title={el.title}
            content={el.content}
          />
        ))}
        <div className="Main--notes-line"></div>
      </div>

      <Summary />
      <Footer />
    </>
  );
}

export default Main;
