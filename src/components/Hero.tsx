import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ArrowForward as ArrowRightIcon,
  CheckCircle as CheckCircleIcon,
  Launch as ExternalLinkIcon,
  GitHub as GitHubIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import '../styles/components.scss';

export const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box className="hero" sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background */}
      <Box
        className="hero-background"
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #312e81 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <Box
          component="img"
          src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
          alt="AI and DevOps technology workspace"
          className="hero-image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            mixBlendMode: 'overlay',
            opacity: 0.6,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <Box textAlign="center" color="white">
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                className="hero-title"
                sx={{
                  fontSize: { xs: '3rem', md: '4rem', lg: '5rem' },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                IFLEON
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                className="hero-subtitle"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  mb: 3,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                }}
              >
                Infinite Logical Elements of Network
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                <Box component="span" sx={{ color: '#5eead4' }}>
                  Infinite Possibilities,
                </Box>
                <br />
                Logical Solutions
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                className="hero-description"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Empowering individuals and businesses across India with innovative AI solutions,
                DevOps automation, cloud migration, cybersecurity, and digital transformation.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                className="hero-buttons"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  justifyContent: 'center',
                  mb: 4,
                }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={scrollToContact}
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRightIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)',
                      color: 'white',
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1d4ed8 0%, #0f766e 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[12],
                      },
                    }}
                  >
                    Get Free Consultation
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    href="https://ifleon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="large"
                    endIcon={<ExternalLinkIcon />}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      borderWidth: 2,
                      '&:hover': {
                        backgroundColor: 'white',
                        color: '#1e3a8a',
                        borderColor: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    Visit ifleon.com
                  </Button>
                </motion.div>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Grid container spacing={2} className="hero-features" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
                {[
                  'AI Solutions & Analytics',
                  'DevOps & CI/CD Automation',
                  'Cloud Migration & Security',
                ].map((service, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="feature-item"
                    >
                      <Chip
                        icon={<CheckCircleIcon sx={{ color: '#5eead4 !important' }} />}
                        label={service}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          py: 2,
                          px: 1,
                          height: 'auto',
                          '& .MuiChip-label': {
                            px: 1,
                            py: 0.5,
                          },
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 4 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    component={Link}
                    to="/blog"
                    variant="contained"
                    endIcon={<ArrowRightIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
                      color: 'white',
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: 2,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #0f766e 0%, #0d5d56 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    Read Our Blog
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    href="https://github.com/mahiprime2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    sx={{
                      borderColor: '#5eead4',
                      color: '#5eead4',
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: '#5eead4',
                        color: '#1e3a8a',
                        borderColor: '#5eead4',
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    View Source Code
                  </Button>
                </motion.div>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box textAlign="center">
                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 1 }}>
                  Founded by S. Mahendra Reddy • Based in Nellore, Andhra Pradesh • Serving Pan-India
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Founded April 5, 2022 • AI Generalist & DevOps Expert • Targeting ₹75 Lakh Revenue in 2025
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          opacity: 0.8,
        }}
      >
        <ArrowDownIcon sx={{ fontSize: 40 }} />
      </motion.div>
    </Box>
  );
};