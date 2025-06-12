import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Hub as NetworkIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  const navItems = [
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Experience', action: () => scrollToSection('experience') },
    { label: 'Contact', action: () => scrollToSection('contact') },
    { label: 'Blog', action: () => {}, to: '/blog' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}
        sx={{
          backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: isTransparent ? 'none' : 'blur(10px)',
          boxShadow: isTransparent ? 'none' : theme.shadows[4],
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box className={`logo ${isTransparent ? 'light' : ''}`} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <NetworkIcon 
                    className="logo-icon"
                    sx={{ 
                      fontSize: 32,
                      color: isTransparent ? 'white' : 'primary.main',
                      transition: 'color 0.3s ease'
                    }} 
                  />
                  <Box>
                    <Typography
                      className="logo-text"
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: isTransparent ? 'white' : 'text.primary',
                        transition: 'color 0.3s ease',
                        lineHeight: 1,
                      }}
                    >
                      IFLEON
                    </Typography>
                    <Typography
                      className="logo-subtitle"
                      variant="caption"
                      sx={{
                        color: isTransparent ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                        transition: 'color 0.3s ease',
                        fontSize: '0.7rem',
                        lineHeight: 1,
                      }}
                    >
                      Infinite Logical Elements of Network
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </motion.div>

            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box className="nav-menu" sx={{ display: 'flex', gap: 3 }}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.to ? (
                        <Button
                          component={Link}
                          to={item.to}
                          className={`nav-link ${isTransparent ? 'light' : ''}`}
                          sx={{
                            color: isTransparent ? 'white' : 'text.primary',
                            fontWeight: 500,
                            textTransform: 'none',
                            '&:hover': {
                              color: isTransparent ? 'primary.light' : 'primary.main',
                              backgroundColor: 'transparent',
                            },
                          }}
                        >
                          {item.label}
                        </Button>
                      ) : (
                        <Button
                          onClick={item.action}
                          className={`nav-link ${isTransparent ? 'light' : ''}`}
                          sx={{
                            color: isTransparent ? 'white' : 'text.primary',
                            fontWeight: 500,
                            textTransform: 'none',
                            '&:hover': {
                              color: isTransparent ? 'primary.light' : 'primary.main',
                              backgroundColor: 'transparent',
                            },
                          }}
                        >
                          {item.label}
                        </Button>
                      )}
                    </motion.div>
                  ))}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      href="https://ifleon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)',
                        color: 'white',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: 2,
                        px: 3,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #1d4ed8 0%, #0f766e 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: theme.shadows[8],
                        },
                      }}
                    >
                      Portal
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            )}

            {isMobile && (
              <IconButton
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                sx={{
                  color: isTransparent ? 'white' : 'text.primary',
                }}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <AnimatePresence>
        {isMobile && (
          <Drawer
            anchor="right"
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            PaperProps={{
              sx: {
                width: 280,
                background: 'linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)',
                color: 'white',
              },
            }}
          >
            <motion.div
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <Box sx={{ p: 2, pt: 10 }}>
                <List>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={item.to ? undefined : item.action}
                          component={item.to ? Link : 'button'}
                          to={item.to}
                          sx={{
                            borderRadius: 2,
                            mb: 1,
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            sx={{
                              '& .MuiTypography-root': {
                                fontWeight: 500,
                                fontSize: '1.1rem',
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <ListItem disablePadding sx={{ mt: 2 }}>
                      <ListItemButton
                        href="https://ifleon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: 2,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          },
                        }}
                      >
                        <ListItemText
                          primary="Visit Portal"
                          sx={{
                            '& .MuiTypography-root': {
                              fontWeight: 600,
                              fontSize: '1.1rem',
                              textAlign: 'center',
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                </List>
              </Box>
            </motion.div>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};