import Typography from '@mui/material/Typography'
import { Box, Stack, style } from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton'
import styled from "../styles/footer.module.css"




export default function Footer() {
    return(
        <Box>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2} >
           <Typography variant="subtitle1" color="primary">TE INVITAMOS A NUESTRA FUNDACIÓN</Typography>
           <Typography variant="h3" color="secondary">Ven a visitarnos</Typography>
           <Typography variant="h6" color="initial">VEREDA SAN VICENTE, SUESCA HORARIO DE VISITAS: 10:30AM A 3:30PM</Typography>
           <Typography variant="body1" color="initial">Te invitamos todos los fines de semana a visitarnos y darle amor a nuestros peluditos. Ven a pasearlos, bañarlos y jugar con ellos.</Typography>
           
           <img className={styled.im} src='https://www.fundaciontepa.org/wp-content/uploads/2020/03/40-980x573.jpg'alt='fundacion' width={400} />
           
           </Stack>
           
         
      
    <footer className={styled.foot}>
            <Typography variant="body1" color="secondary"> © 2023 Patitas. Todos los derechos reservados. | hecho por Heidy gisell vaneas roa.</Typography>
<Stack  direction="row"  spacing={{ xs: 1, sm: 2, md: 4 }}  justifyContent="center"
  alignItems="center">
            <IconButton aria-label="GitHubIcon">
            <GitHubIcon color='secondary'/>
            </IconButton>
            <IconButton aria-label="LinkedInIcon" color='secondary'>
            <LinkedInIcon />
            </IconButton>
           </Stack>
            </footer>
        </Box>
    )
}