import styled from "../styles/card.module.css"
import { perritos } from "../services/services"
import CardAdopcion from "../components/cardadopcion"
import Typography from '@mui/material/Typography'
import { Box } from "@mui/system"
export default function login({perritospagina}) {
    return(
      <div>
        <Box sx={{margin:4}}>
        <Typography variant="h3" color="initial" sx={{marginBottom:3}}>LISTA DE PELUDITOS EN ADOPCIÓN</Typography>
        <Typography>Estos son nuestros ángeles que buscan poder encontrar su hogar para siempre. Una vez escojas al peludito que quieras adoptar, vuelve a la página de adopción, lee cuidadosamente nuestros requisitos, proceso de adopción y por último, rellena el formulario de adopción.</Typography>
        </Box>
         <div className={styled.card}>
         {
            perritospagina && perritospagina.map((per)=>
            
              <CardAdopcion per={per} showAS="dafault" key={per.id} />
              
              )
          }
        
       </div>
      </div>
       
    )
}
export async function  getStaticProps(){
  const res =await perritos()

  return{
    props:{
      perritospagina:res,
    }
  }
}