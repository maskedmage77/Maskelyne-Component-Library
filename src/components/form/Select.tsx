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
      setMenuToggle(!menuToggle);
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
      console.log(event.target)
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuToggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
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
    <div className={` ${menuToggle ? 'SelectMenu' : 'Select'}`} ref={menuRef}>
      <p onClick={toggleMenu}>{ title }</p>
      <img src="/icons/chevron.svg" alt="" onClick={toggleMenu}/>
      <div>
        { options.map((option, index) => {
          return <p onClick={selectItem} key={index} className={ selected.includes(option.displayed) ? 'Selected' : '' }>{ option.displayed }</p>
        })}
      </div>
    </div>
  )
}
