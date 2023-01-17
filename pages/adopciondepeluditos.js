import { Box, Typography } from "@mui/material";
import CardAdopcion from "../components/cardadopcion";
import styled from "../styles/card.module.css"
export async function getServerSideProps() {
const url="https://pagina-empresa-recreaciones.vercel.app/api/hello"
 const res=await fetch(url)
 const data =await res.json()
 console.log(data)
  return {
    props: {
      data,
    },
  };
}


export default function MiPagina({ data }) {
   console.log(data) 
  return(
    <div>
        <Box sx={{margin:4}}>
        <Typography variant="h3" color="initial" sx={{marginBottom:3}}>LISTA DE PELUDITOS EN ADOPCIÓN</Typography>
        <Typography>Estos son nuestros ángeles que buscan poder encontrar su hogar para siempre. Una vez escojas al peludito que quieras adoptar, vuelve a la página de adopción, lee cuidadosamente nuestros requisitos, proceso de adopción y por último, rellena el formulario de adopción.</Typography>
        </Box>
         <div className={styled.card}>
         
             {
                data && data.map((per)=>
                
                <CardAdopcion per={per} showAS="dafault" key={per.id} />
                  
                  )
              }
         
       </div>
      </div>
    
  );
}