import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function PokemonList({ name, imageUrl }) {

    return (
        <Card sx={{ width: 150, height: 200, display: 'inline-block', margin: '0 6px 20px 0' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    style={{ objectFit: 'cover', width: '100%', height: 150 }}
                    image={imageUrl}
                    alt={name}
                />
                <CardContent>
                    {name}
                </CardContent>
            </CardActionArea>
        </Card>
  );
}

export default PokemonList;