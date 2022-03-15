import { useEffect, useRef, useState } from 'react'
import { textColor } from '../../constants/colors';
import './Select.css'

interface Props {
  options: {
    displayed: string,
    value: string,
    selected?: boolean,
  }[];
  selected: Array<string>;
  defaultText?: string;
  setSelected: Function;
}

export default function Select({ options, selected, defaultText, setSelected } : Props) {
  
  const menuRef = useRef<any>();

  const [menuToggle,setMenuToggle] = useState(false);
  const [title,setTitle] = useState(defaultText)
  const [scrollPos,setScrollPos] = useState(0);
  const [hasCursor,setHasCursor] = useState(true);

  function toggleMenu() {
      setMenuToggle(!menuToggle);
  }

  useEffect(() => {
    setHasCursor(!(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(pointer: none)").matches))
  }, [])

  useEffect(() => {
    if (selected.length === 0) {
      setTitle(defaultText);
    } else if (selected.length === 1) {
      setTitle(options.filter(obj => { return obj.value === selected[0]})[0].displayed);
    } else if (selected.length > 1) {
      setTitle(`${selected.length} items selected`);
    }
    // eslint-disable-next-line
  }, [selected]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuToggle(false);
      }
    }
    function handleEnterKey(event:any) {
      if (event.keyCode === 13) {
        setMenuToggle(false);
      }
    }
    document.addEventListener("keyup", handleEnterKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("keyup", handleEnterKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, [menuRef])

  useEffect(() => {
    if (menuToggle && !hasCursor) {
      document.body.style.overflow = 'hidden';
      setScrollPos(window.scrollY)
    } 
    else if (!hasCursor) {
      document.body.style.overflow = 'visible';
      window.scrollTo(0,scrollPos);
    }  
    
    // eslint-disable-next-line
  }, [menuToggle])

  function selectItem(event: any) {
    if (!event.ctrlKey) {
      setMenuToggle(!menuToggle);
    }
    handleSelect(event);
  }

  function addItem(event: any) {
    event.ctrlKey = true;
    handleSelect(event);
  }

  function handleSelect  (event: any) {
    const selectionLimit = 0;
    const value = event.currentTarget.getAttribute("data-value");
    if (event.ctrlKey) {
      if (!selected.includes(value)) {
        if (selected[0] === '') {
          setSelected([value])
          // @ts-ignore
        } else if (selected.length < selectionLimit || selectionLimit === 0) {
          setSelected([...selected, value]);
        } 
      } else {
        setSelected(selected.filter(item => item !== value));
      }
    } else {
      setSelected([value]);
    }
  }

  return (
    <div className={` ${menuToggle ? 'SelectMenu' : 'Select'}`} ref={menuRef}>
      <p onClick={toggleMenu}>{ title }</p>
      {/* <img src="/icons/chevron.svg" alt="" onClick={toggleMenu}/> */}
      <div onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down" >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div>
        { options.map((option, index) => {
          return (
          <div key={index}>
            <div onClick={addItem} data-value={option.value} className={ selected.includes(option.value) ? 'Selected' : '' }>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <p onClick={selectItem} data-value={option.value} className={ selected.includes(option.value) ? 'Selected' : '' }>{ option.displayed }</p>
          </div>)
        })}
      </div>
    </div>
  )
}
