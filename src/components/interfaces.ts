export interface HamburgerProps {
    toggleMenu(): void
}
export interface OneNote {
    id: string;
    imageSrc: string;
    title: string;
    content: string;
}
export interface MenuContent {
    features: string;
    pricing: string;
    resources: string;
    login: string;
    signup: string;
    isMenuOpened: boolean;
}
export interface NoteContent {
    imageSrc: string;
    title: string;
    content: string;
}
export interface FooterDetailLink {
    id: string;
    link: string;
}
export interface FooterDetail {
    id: string;
    title: string;
    links: FooterDetailLink[];
}