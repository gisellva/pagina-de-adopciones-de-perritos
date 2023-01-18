import {  Typography, Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import styled from "../styles/requisitos.module.css"
import { motion } from "framer-motion"
import Preguntas from './preguntas';
import Peluditos from './peluditos';

export default function Requisitos() {


  return (
    <Box sx={{margin:4}}>
      <Stack>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
        <Typography variant="h3" color="initial">
        REQUISITOS
       </Typography>
        </motion.div>
      </Stack>
    <Box sx={{margin:5 ,marginTop:2 ,marginBottom:2}}>
     <div className={styled.box}>
      <Stack justifyContent="center">
         <Typography variant="body1" color="initial">
        Nos encantaría poder entregar un peludito a cada persona que desee adoptar, pero la gran responsabilidad que sentimos con nuestros ángeles nos obliga a tener unos requisitos mínimos que nos permitan tener cierta seguridad en que los hogares donde llegarán serán los definitivos.
        </Typography>
        <Typography variant="body1" color="initial">
        🐶La persona responsable del peludito debe ser mayor de 25 años.<br/> 
        </Typography>
        <Typography variant="body1" color="initial">
        🐶 Este o esta pequeñita será miembro de la familia alrededor de 15 años
        </Typography>
        <Typography variant="body1" color="initial">
        🐶 Es importante tener el tiempo y el espacio para que tú y ellos estén muy bien
        </Typography>
        <Typography variant="body1" color="initial">
        🐶 Este o esta pequeñita será miembro de la familia alrededor de 15 años
        </Typography>
        <Typography variant="body1" color="initial">
        🐶 Se deben cumplir los compromisos y obligaciones que figuran en el Contrato de Adopción
        </Typography>
        <Stack   alignItems="center">
        <motion.button 
        className={styled.boton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} >
        <Link className={styled.link} href="/adopciodepeluditos">Adota un peludito</Link>
        </motion.button>
        </Stack>
       
        </Stack>
        </div>
    </Box>
    <Box sx={{margin:5 ,marginTop:2}}>
      <Typography variant="h4" color="initial" sx={{marginBottom:2 ,marginTop:1}}>¿Preguntas más frecuntes?</Typography>
     <Preguntas/>
     <Peluditos/>
    </Box>
   

     

    </Box>
  );
}