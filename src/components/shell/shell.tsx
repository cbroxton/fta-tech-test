'use client';

import Image from "next/image";
import Menu from "../menu/menu";
import { ReactNode, RefObject, createRef, useState } from "react";

export default function Shell({ children }: { children: ReactNode }) {
    const menuRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

    const [menuHidden, setMenuHidden] = useState(true);

    function handleHamburgerClick(): void {
        setMenuHidden(!menuHidden);
    }

    return (
        <div className="flex flex-wrap p-4">
            <div className="w-full mb-4">
              <div className="flex items-center">
                {/* Hamburger menu for smaller screens. Using the tailwind group/group-hover classes here to toggle classes on children
                when parent is hovered. Playing with TailWind so thought I'd give it a go but not sure I like it over just making a custom
                css selector. */}
                <div className="lg:hidden space-y-2 mr-4 cursor-pointer group/hamburger" onClick={handleHamburgerClick}>
                  <div className="w-8 h-0.5 bg-gray-600 group-hover/hamburger:bg-black"></div>
                  <div className="w-8 h-0.5 bg-gray-600 group-hover/hamburger:bg-black"></div>
                  <div className="w-8 h-0.5 bg-gray-600 group-hover/hamburger:bg-black"></div>
                </div>
                <div>
                  <Image
                    src="/logo.png"
                    alt="Logistics UK Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto max-h-24"
                  />
                </div>
              </div>
            </div>
            <div ref={menuRef} className={`${menuHidden ? 'hidden' : 'block'} lg:block w-full lg:w-2/12 h-full pt-2`}>
              {/* handleClickLink used here to close menu on clicking link. It's a bit incomplete, we should probably close when clicking anywhere outside the
              menu too. */}
              <Menu handleClickLink={() => !menuHidden && handleHamburgerClick()}></Menu>
            </div>
            {menuHidden && <div className="flex-1 p-2">{children}</div>}
        </div>
    )
}