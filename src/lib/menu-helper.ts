// Wasn't sure on the folder/file naming convention for these classes, seems to be mixed opinions. Some use util instead of lib.

import menuItems from '../../data/menu.json'
import { MenuItem } from "../models/menu-item";

export class MenuHelper {
    static getMenuItems(): MenuItem[] {
        return menuItems.data;
    }
}