import React, { Fragment } from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <Fragment>
      <span className='font-size-md'>
        <Link to='/' className='white-color margin-10 fatwitter'>
          <FaTwitter className='fatwitter' />
        </Link>
      </span>
      <span className='font-size-md'>
        <Link to='/' className='white-color margin-10'>
          <FaFacebook className='fafb' />
        </Link>
      </span>
      <span className='font-size-md'>
        <Link to='/' className='white-color margin-10'>
          <FaLinkedin className='falinkedin' />
        </Link>
      </span>
    </Fragment>
  );
}
