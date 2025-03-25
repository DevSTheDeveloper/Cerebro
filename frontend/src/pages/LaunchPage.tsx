import React from 'react'
import { Container, Box, Typography, Stack, Button, Link } from '@mui/material'
import { Add as AddIcon, FolderOpen as FolderOpenIcon, GitHub as GitHubIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const LaunchPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 2,
          }}
        >
          Welcome to Cerebro
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          V0.1
        </Typography>

        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 300, mx: 'auto' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<AddIcon />}
            onClick={() => navigate('/new')}
            fullWidth
          >
            Create New Document
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<FolderOpenIcon />}
            onClick={() => navigate('/open')}
            fullWidth
          >
            Open Document
          </Button>
        </Stack>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Link
            href="https://github.com/yourusername/cerebro"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <GitHubIcon />
            Fork on GitHub
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default LaunchPage 