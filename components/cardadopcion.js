import Link from "next/link";
import { motion } from "framer-motion"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from "../styles/card.module.css";
import Typography from '@mui/material/Typography';
import { Stack, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, blue, brown } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main:brown[800],
    },
   secondary:{
    main:amber["A700"],
   },
   info:{
    main:blue[300]
   }
  },
});

export default function CardAdopcion({per,showAS}) {
    if (showAS === "page") {
        return(
            <div>page</div>
        )
    }
    if (showAS === "Listparritos") {
        return(
            <div>page</div>
        )
    }
return(
  <ThemeProvider theme={theme}>
    <Stack 
    justifyContent="center"
    alignItems="center"
    spacing={0}>
      <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 1 }} >  
        <Card sx={{ maxWidth: 200 }} color="priamry">
      <CardMedia
        sx={{ height: 150, width:180, backgroundColor:"priamry"}}
        image={per.foto}
        title={per.nombre}
        
      />
      <Stack 
       justifyContent="center"
       alignItems="center">
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="primary" sx={{marginBottom:-3}}>
        {per.nombre}
        </Typography>
       
      </CardContent>
     </Stack>
     <Stack
    
     justifyContent="center"
     alignItems="center">
      <CardActions  >
      <Button variant="contained" color="secondary" >
       adoptar
     </Button>
      </CardActions>
      </Stack>
    </Card>
    </motion.div >
    </Stack>
    </ThemeProvider>
)
}