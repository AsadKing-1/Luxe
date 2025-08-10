import "./ham-menu.css";

type MenuProps = {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export function Menu({isOpen, setOpen}: MenuProps){
    return(
        <>
            <button className="menu-btn" onClick={() => setOpen(!isOpen)}>☰</button>
        </>
    )
}