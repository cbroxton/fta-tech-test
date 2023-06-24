'use client';

import Link from "next/link";
import { MenuHelper } from "../../lib/menu-helper";
import { MenuItem } from "../../models/menu-item";
import { usePathname } from 'next/navigation';

export default function Menu({ handleClickLink }: { handleClickLink?: () => void }) {
    const pathName = usePathname();
    const menuItems: MenuItem[] = MenuHelper.getMenuItems();

    // styling of the menu is very basic but didn't want to spend too long on it.
    return (
        <div className="flex flex-col gap-2">
            {menuItems.map(({ title, url }: MenuItem) => (
                <Link
                    key={url}
                    href={url}
                    onClick={handleClickLink}
                    className={pathName === url
                        ? "text-blue-500"
                        : "text-gray-600 hover:text-black"
                    }
                >
                    {title}
                </Link>
            ))}
        </div>
    )
}