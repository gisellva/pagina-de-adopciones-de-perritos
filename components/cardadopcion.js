import Link from "next/link";
import { motion } from "framer-motion"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, blue, brown } from "@mui/material/colors";
import styled from "../styles/slider.module.css";

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

export default function CardAdopcion({per}) {
 
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
       <Link className={styled.s} href="/formulario">adoptar</Link>
     </Button>
      </CardActions>
      </Stack>
    </Card>
    </motion.div >
    </Stack>
    </ThemeProvider>
)
}