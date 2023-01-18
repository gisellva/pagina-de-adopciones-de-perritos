import { Box, Stack } from "@mui/system";
import Typography from '@mui/material/Typography'
import Layout from "../components/layaut"
import styled from "../styles/form.module.css";

export default function Form() {
  return (
    
    <Layout>
      <Box sx={{ marginTop: 2 , margin:5}}>
        <Typography variant="h3" color="primary" sx={{marginBottom:3}}>formulario de adopcion</Typography>
        <Typography variant="h6" color="initial" sx={{marginBottom:3}}>¡Estamos felices de que estes pensando en adoptar! Debes diligenciar totalmente este formulario y cumplir con lo contemplado para realizar una adopción. Los peluditos en adopción son animales callejeros o abandonados; no son regalados, tampoco son comprados, los requisitos aquí contenidos contemplan lo dispuesto en la Ley 1774 del 6 de enero del 2016 del estatuto nacional de protección animal.
          Esperamos que cada peludito encuentre un hogar llenito de amor. </Typography>
         <Box sx={{marginTop:2 , background:"primary"}} >
            <Stack justifyContent="center" alignItems="center">
           
              <form className={styled.formg} action="https://formsubmit.co/depgisell@gmail.com" method="POST">
          <div className={styled.formcontainer}>
          <div className={styled.formgrup}>
            <input  className={styled.imput}   name="nombre" type="text" placeholder=" " />
            <label  for="name" className={styled.formlabel}> 
            <Typography variant="body1" color="primary">tu nombre</Typography>
            </label>
            <span className={styled.formspam}></span>
          </div>
          <div className={styled.formgrup}>
            <input   className={styled.imput}  type=" email" name="email" placeholder=" " />
            <label for="correo" className={styled.formlabel}>
            <Typography variant="body1" color="initial">tu correo</Typography>
            </label>
            <span className={styled.formspam}></span>
          </div>
          <div className={styled.formgrup}>
            <input  className={styled.imput} name="nombre del perrito" type="text" placeholder=" " />
            <label for="nameperrito" className={styled.formlabel}>
            <Typography variant="body1" color="initial">nombre del peludito</Typography>
              </label>
            <span className={styled.formspam}></span>
          </div>
          <input type="submit" className={styled.formsumnit} value="enviar"/>
        </div>
        </form>
        </Stack>
          </Box>
        
      </Box>

    </Layout>

  )
}