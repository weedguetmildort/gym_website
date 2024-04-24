import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SlctdPage } from "./types"


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SlctdPage) => void;
}

const ActionButton = ( { children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-secondary-500 px-10 py-2 
                    hover:bg-primary-500 hover:text-white"
        onClick={() => setSelectedPage(SlctdPage.ContactUs)}
        href={`#${SlctdPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton