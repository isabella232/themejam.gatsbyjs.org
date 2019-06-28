import React from 'react';
import { Link } from 'gatsby';
/** @jsx jsx */
import { Header, jsx, Styled } from 'theme-ui';

import Monogram from './logo/monogram';
import Button from './Button';

const CustomHeader = () => {
  return (
    <Header
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        color: 'primary',
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div sx={{ height: 25, marginRight: '2' }}>
          <Monogram height={25} />
        </div>
        <span
          sx={{
            color: 'gray.3',
            marginRight: '1',
            display: ['none', 'inherit'],
          }}
        >
          Gatsby
        </span>
        <span>Theme Jam</span>
      </div>
      <nav
        sx={{
          display: 'grid',
        }}
      >
        <Styled.ul
          sx={{
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
          }}
        >
          <li
            sx={{
              fontWeight: 400,
              marginRight: '2',
              display: ['none', 'inherit'],
            }}
          >
            <Link to="#rules">Contest Rules</Link>
          </li>
          <li>
            <Link to="/submit">
              <Button radius={1}>Submit your Theme</Button>
            </Link>
          </li>
        </Styled.ul>
      </nav>
    </Header>
  );
};

export default CustomHeader;
