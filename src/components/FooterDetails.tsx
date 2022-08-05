export interface FooterDetailLink {
  id: string;
  link: string;
}
export interface FooterDetail {
  id: string;
  title: string;
  links: FooterDetailLink[];
}


function FooterDetails({ title, links }: FooterDetail) {
  return (
    <div className="FooterDetails">
        <h4 className="Footer-Details--title">{title}</h4>
        {links.map(el => <p key={el.id} className="Footer--link">{el.link}</p>)}
    </div>
  )
}

export default FooterDetails