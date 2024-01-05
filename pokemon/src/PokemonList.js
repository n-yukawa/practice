import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import sample from './sample.png';

function PokemonList() {
  return (
    <div>
        <h2>List</h2>
        <Card sx={{ maxWidth: 150 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    image={sample}
                    alt="sampleimage"
                />
                <CardContent>
                    name
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}

export default PokemonList;