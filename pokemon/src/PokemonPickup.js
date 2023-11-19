import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function PokemonPickup() {

    return (
      <div>
        <h2>Pickup</h2>
        <Container maxWidth="m">
          <Box sx={{ bgcolor: '#cfe8fc', height: '250px' }} />
        </Container>
      </div>
    );
}

export default PokemonPickup;