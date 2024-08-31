'use client'
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material'
import { Container, Box, Typography, AppBar, Toolbar, Button, Paper } from '@mui/material';
import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5', // Blue
    },
    secondary: {
      main: '#f50057', // Pink
    },
    third: {
      main: '#f50057', // Pink
    },
  },
  typography: {
    h2: {
      fontWeight: 600,
      color: '#1e88e5',
    },
    h4: {
      fontSize: '32px',
      fontWeight: 600,
      color: '#000000',
    },
    h5: {
      fontWeight: 500,
      color: '#424242',
    },
    body1: {
      fontSize: '1rem',
      color: '#616161',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
  },
});

export default function SignUpPage() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="100vw">
          <AppBar position="static" sx={{ mb: 4, borderRadius: '16px'}}>
          <Toolbar>
          <Typography href="/sign-in" variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
            FlashPass
          </Typography>
          <Button color="inherit" href="/">Home</Button>
              <Button color="inherit" href="/sign-up">Sign Up</Button>
          </Toolbar>
        </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: 'center', my: 8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1e88e5' }}>
          Welcome Back
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 4, color: '#64b5f6' }}>
          Sign in to begin flashcard generation
        </Typography>

        <SignIn />
      </Box>
    </Container>
    </ThemeProvider>
  );
}
