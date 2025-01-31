import React from 'react';
import clsx from 'clsx';
import MechaIcon from "../../../../static/img/landing/mecha-icon.svg"

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx(`footer`, {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        <div className="margin-bottom--sm"><MechaIcon/></div>
        <div style={{width:"100%", display:"flex", flexDirection:"row"}}>
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--right">
            {copyright}
          </div>
        )}
        </div>
      </div>
    </footer>
  );
}
