import { FaCalendarAlt, FaCheck, FaChevronDown, FaChevronRight, FaWindowClose, FaMoneyBillWave, FaLock, FaMapSigns, FaHourglassHalf, FaTrashAlt, FaUser, FaLink} from "react-icons/fa";
import { LuScrollText } from "react-icons/lu";
import { MdEmail, MdOutlineFileDownload, MdLogin, MdLogout } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";

export const ICONS = {
    burger: GiHamburgerMenu,
    calendar: FaCalendarAlt,
    check: FaCheck,
    chevronDown: FaChevronDown,
    chevronRight: FaChevronRight,
    close: FaWindowClose,
    description: LuScrollText,
    email: MdEmail,
    euro: FaMoneyBillWave,
    file: MdOutlineFileDownload,
    glass: HiMagnifyingGlass,
    lock: FaLock,
    map: FaMapSigns,
    login: MdLogin,
    logout: MdLogout,
    time: FaHourglassHalf,
    trash: FaTrashAlt,
    user: FaUser,
    website: FaLink
}