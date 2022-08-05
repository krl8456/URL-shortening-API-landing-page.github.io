import Background from "../images/illustration-working.svg";
import Form from "./Form";
import Note from "./Note";
import StartingButton from "./StartingButton";
import Recognition from "../images/icon-brand-recognition.svg";
import Records from "../images/icon-detailed-records.svg";
import Customizable from "../images/icon-fully-customizable.svg";
import Summary from "./Summary";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useRef, useEffect } from "react";
import Link from "./Link";

interface DataShape {
  ok: boolean;
  // error_code: number | undefined;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    short_link3: string;
    full_short_link3: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
  // error: string;
}
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

function Main() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [inputContent, setInputContent] = useState("");
  const [error, setError] = useState(false);
  const [links, setLinks] = useState<Array<DataShape>>(
    JSON.parse(localStorage.getItem("links") || "[]") || []
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(event.target.value);
  };
  const focus = () => {
    inputRef.current?.focus();
  };
  
  
  const handleInput = () => {
    
    if (inputContent === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    // if (true) {
    //   setError(true);
    //   return;
    // }
    // setError(false);
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputContent}/`)
      .then((res) => {
        if (res.ok) {
          setError(false)
          return res.json()
        } else throw res
      })
      .then((data) => setLinks((prevLinks) => [data, ...prevLinks]))
      .catch((err) => setError(true))
    setInputContent("");
  };

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
          <StartingButton focus={focus} />
        </div>
      </div>
      <Form
        inputContent={inputContent}
        changeInput={changeInput}
        isEmpty={isEmpty}
        handleInput={handleInput}
        inputRef={inputRef}
        error={error}
      />
      {links.map((link) => (
        <Link
          key={uuidv4()}
          link={link.result.original_link}
          shortened_link={link.result.short_link}
        />
      ))}
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
      <Summary focus={focus} />
    </>
  );
}

export default Main;
