import { FooterDetail } from "./interfaces"

function FooterDetails({ title, links }: FooterDetail) {
  return (
    <>
        <h4 className="Footer-Details--title">{title}</h4>
        {links.map(el => <p key={el.id} className="Footer--link">{el.link}</p>)}
    </>
  )
}

export default FooterDetails