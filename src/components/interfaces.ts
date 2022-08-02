export interface HamburgerProps {
    toggleMenu(): void;
    windowWidth: number;
}
export interface MenuContent {
    features: string;
    pricing: string;
    resources: string;
    login: string;
    signup: string;
    isMenuOpened: boolean;
    windowWidth: number;
}
export interface DesktopMenuContent {
    features: string;
    pricing: string;
    resources: string;
    login: string;
    signup: string;
    windowWidth: number;
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