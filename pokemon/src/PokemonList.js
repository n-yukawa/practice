import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function PokemonList({ name, imageUrl }) {

    return (
        <div>
            <h2>List</h2>
            <Card sx={{ maxWidth: 150, maxHeight: 200 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        image={imageUrl}
                        alt={name}
                    />
                    <CardContent>
                        {name}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
  );
}

export default PokemonList;