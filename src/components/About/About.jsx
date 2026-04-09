// About.jsx
import React from 'react'
import { Box, Chip, Button, Typography, Divider } from '@mui/material'
import style from './About.module.css'

const About = () => {
  return (
    <Box sx={{ background: '#f0f4ff', minHeight: '100vh' }}>

      {/* Hero */}
      <Box sx={{
        background: '#0a1628',
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 9 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""', position: 'absolute',
          right: -60, top: -60,
          width: 320, height: 320,
          borderRadius: '50%', background: '#1565c022',
        },
      }}>
        <Typography sx={{
          fontSize: 11, letterSpacing: 3,
          textTransform: 'uppercase', color: '#64b5f6',
          mb: 2, display: 'flex', alignItems: 'center', gap: 1.5,
          '&::before': { content: '""', width: 28, height: 1, background: '#64b5f6', display: 'block' },
        }}>
          About us
        </Typography>

        <Typography variant="h1" sx={{
          fontFamily: "'Playfair Display', serif",
          fontSize: { xs: 36, md: 58 },
          fontWeight: 700, color: '#fff', lineHeight: 1.15,
          mb: 2, maxWidth: 560,
          '& em': { fontStyle: 'italic', color: '#64b5f6' },
        }}>
          Welcome to our <em>Website</em>
        </Typography>

        <Typography sx={{ fontSize: 15, color: '#90a4ae', fontWeight: 300 }}>
          Wana see something cool?
        </Typography>

        <Chip
          label="Active since 2024"
          size="small"
          sx={{
            mt: 3.5, background: '#1565c033',
            border: '1px solid #1976d2',
            color: '#90caf9', fontSize: 12, letterSpacing: 1,
          }}
        />
      </Box>

      {/* Info */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.6fr' } }}>

        {/* Chap panel */}
        <Box sx={{
          background: '#1565c0', p: { xs: 4, md: '50px 40px' },
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', minHeight: 380,
          position: 'relative', overflow: 'hidden',
          '&::before': {
            content: '""', position: 'absolute',
            bottom: -40, right: -40,
            width: 180, height: 180,
            borderRadius: '50%', background: '#ffffff0d',
          },
        }}>
          <Box>
            <Typography sx={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#90caf9', mb: 1 }}>
              Founded
            </Typography>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: 58, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
              2024
            </Typography>
            <Typography sx={{ fontSize: 13, color: '#bbdefb', mt: 0.8, fontWeight: 300 }}>
              Built with passion
            </Typography>
          </Box>

          <Divider sx={{ borderColor: '#ffffff22', my: 3 }} />

          <Box>
            <Typography sx={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#90caf9', mb: 1 }}>
              Products
            </Typography>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
              200+
            </Typography>
            <Typography sx={{ fontSize: 13, color: '#bbdefb', mt: 0.8, fontWeight: 300 }}>
              Items available
            </Typography>
          </Box>
        </Box>

        {/* O'ng panel */}
        <Box sx={{
          background: '#fff', p: { xs: 4, md: '50px 52px' },
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          borderTop: '1px solid #e3eaf5',
        }}>
          <Typography variant="h2" sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 26, fontWeight: 700, color: '#0d1b3e', mb: 0.5,
          }}>
            Who we are
          </Typography>

          <Box sx={{ width: 36, height: 3, background: '#1976d2', borderRadius: 1, my: 1.8 }} />

          <Typography sx={{ fontSize: 14, lineHeight: 1.85, color: '#546e7a', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
            enim odio quae nihil, voluptatem fugiat sint similique quos earum alias
            hic eligendi facilis accusamus nemo labore ea cupiditate ipsum? Reiciendis
            reprehenderit assumenda, perspiciatis repudiandae quia quae exercitationem.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5, mt: 3.5, flexWrap: 'wrap' }}>
            <Button variant="contained" sx={{ background: '#1976d2', '&:hover': { background: '#1565c0' } }}>
              Learn more
            </Button>
            <Button variant="outlined" sx={{ borderColor: '#1976d2', color: '#1976d2' }}>
              Contact us
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About