import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useCallback, useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg';
import Telegram from '../../assets/telegram.svg';
import UserMenu from '@components/UserMenu';
import BandoButton from '@components/Button';

const NavbarContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '12px',
  display: 'flex',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  color: theme.palette.primary.main,
  transition: theme.transitions.create(['background-color']),
  '&.scrolled': {
    backgroundColor: theme.palette.primary.light,
  },
  '& .navbar-box': {
    width: '100%',
    maxWidth: theme.breakpoints.values.xl,
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&.full-width': {
      maxWidth: '100%',
    },
  },
  '& .navbar-brand': {
    height: '100%',
    paddingLeft: 0,
    textDecoration: 'none',
  },
  '& img': {
    width: '100%',
    maxWidth: '120px',
    height: 'auto',
    verticalAlign: 'middle',
    display: 'inline-block',
  },
  '& .navbar-menu': {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: 32,
      height: 32,
      marginLeft: theme.spacing(1),
    },
  },
}));

export default function Navbar({ fullWidth = false }) {
  const [isOnTop, setIsOnTop] = useState(true);

  const handleScroll = useCallback(() => {
    const isCurrentScropOnTop = window.scrollY === 0;
    setIsOnTop(isCurrentScropOnTop);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <NavbarContainer
      data-animation="default"
      data-collapse="none"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      className={isOnTop ? '' : 'scrolled'}
      aria-label={isOnTop ? 'scrollTop' : 'scrolled'}
    >
      <div className={fullWidth ? 'navbar-box full-width' : 'navbar-box'}>
        <a href="/" className="navbar-brand">
          <img src={Logo} loading="lazy" alt="" aria-label="Bando logo" />
        </a>
        <div className="telegram-logo-box">
          <nav role="navigation" className="navbar-menu">
            <UserMenu />
            <BandoButton
              component="a"
              variant="text"
              size="small"
              className="rounded"
              sx={{
                py: '0 !important',
                '&.MuiButton-root:hover': { bgcolor: 'transparent', backgroundImage: 'none' },
              }}
              onClick={() => window.open('https://t.me/+ZUfDxp78dwAwMDcx', '_blank')}
            >
              Únete
              <img src={Telegram} loading="lazy" alt="" aria-label="Telegram Logo" />
            </BandoButton>
          </nav>
        </div>
      </div>
    </NavbarContainer>
  );
}
