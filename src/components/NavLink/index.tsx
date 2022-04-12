import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container } from './styles';

interface NavLinkProps {
  title: string;
  path: string;
}

const NavLink = ({ title, path }: NavLinkProps) => {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <Container isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </Container>
  );
};

export default NavLink;
