import { useEffect, useRef, useState } from 'react'
import './Select.css'

interface Props {
  options: {
    displayed: string,
    value: string,
    selected?: boolean,
  }[];
  singleItem: Function;
  addItem: Function;
  selected: Array<string>;
  multiselect?: boolean;
  defaultText?: string;
}

export default function Select({ options, singleItem, addItem, selected, multiselect, defaultText } : Props) {
  
  const menuRef = useRef<any>();

  const [menuToggle,setMenuToggle] = useState(false);
  const [title,setTitle] = useState(defaultText)

  function toggleMenu() {
    if (menuToggle === false) {
      setMenuToggle(!menuToggle);
    }
  }

  useEffect(() => {
    if (selected.length === 1) {
      setTitle(selected[0]);
    } else if (selected.length > 1) {
      setTitle(`${selected.length} items selected`);
    }
  }, [selected]);

  useEffect(() => {

    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuToggle(!menuToggle);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef])

  function selectItem(event: any) {
    if (event.ctrlKey && multiselect) {
      addItem(event);
    }
    else {
      setMenuToggle(!menuToggle);
      singleItem(event);
    }
  }

  return (
    <div className={` ${menuToggle ? 'SelectMenu' : 'Select'}`} onClick={toggleMenu} ref={menuRef}>
      <p>{ title }</p>
      <img src="/icons/chevron.svg" alt="" />
      <div>
        { options.map((option, index) => {
          return <p onClick={selectItem} key={index}>{ option.displayed }</p>
        })}
      </div>
    </div>
  )
}
