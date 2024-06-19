import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  padding: 1% 7%;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  .logo_wrapper {
    min-width: 150px;
    img {
      cursor: pointer;
      position: relative !important;
    }
  }
  .login-signup-wrapper {
    span {
      padding: 0 5px;
    }
    span::before {
      content: '|';
      font-size: 11px;
      color: #ccc;
      padding: 0 5px 0 5px;
      vertical-align: 1px;
    }
    a {
      color: #000000;
      text-decoration: none;
      font-size: 1.6rem;
    }
    a:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 2% 5%;
  }
`;

const Header = () => {
  return (
    <HeaderLayout>
      <div className='logo_wrapper'>
        <Link href='/'>
          <Image src='/imgs/logo.png' fill alt='logo_img' />
        </Link>
      </div>
      <div className='login-signup-wrapper'>
        <Link href='/intro'>회사 소개</Link>
        <span></span>
        <Link href='/patent'>특허 리스트</Link>
      </div>
    </HeaderLayout>
  );
};

export default Header;
