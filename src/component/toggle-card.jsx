import { useState } from 'react';

function ToggleCard() {
  const [toggle, setToggle] = useState(false); // boolean, not a string
 
  return (
    <div className="CardWrap">
      <div className="Title">
        <a
          href="#"
          className="link"
          onClick={(e) => {
            e.preventDefault();
            setToggle((prev) => !prev);
          }}
        >
          {toggle ? 'Hide Details' : 'Show Details'}
        </a>
      </div>

      <div className={`content ${toggle ? '' : 'collapsed'}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...
      </div>

 
    </div>
  );
}

export default ToggleCard;
