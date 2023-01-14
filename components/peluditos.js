import { Box } from "@mui/system";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { motion } from "framer-motion"

export default function Peluditos() {
    return(
        <Box sx={{marginTop:2}}>
            <Typography variant="h4" color="initial" >Peluditos Adoptados </Typography>
            <Typography sx={{marginBottom:2 , marginTop:2}} variant="body1" color="initial">Estos son los peludos que han encontrado humanos con un corazón enorme y que ahora disfrutan de la vida que se merecen.</Typography>
            <Grid container spacing={0}>
            <Grid container spacing={2}>
        <Grid item xs={7} md={4}>
         <motion.img 
          whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkTPhA4RK9SfPZS0OSLMg8bBcw0VtLHnCOpjOTXIjq2EMIOnT3prIenPCubl4HfIuTLc&usqp=CAU" alt="m" width={200}/>
        </Grid>
        <Grid item xs={7} md={4}>
        <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
         src="https://www.consumer.es/app/uploads/2019/07/img_adoptar-perros-extranjeros.jpg" alt="m" width={200}/>
        </Grid>
        <Grid item xs={7} md={4}>
        <motion.img
         whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlet3USCmFBOk38MLcosJe23eW1Y_VR1x438ORSbLnMIio0lmd1lZsTlzdqUmLWxhVu_g&usqp=CAU" alt="m" width={200}/>
        </Grid>
        <Grid item xs={7} md={4}>
        <motion.img 
         whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src="https://www.elcolombiano.com/binrepository/834x562/0c0/0d0/none/11101/QJHI/pmascotas-25-jpg_39243650_20220105205818.jpg" alt="m" width={200}/>
        </Grid>
        <Grid item xs={7} md={4}>
        <motion.img 
         whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurS-mrEulCcpkHo2R_Jd4o_hF_MZxFrztkL_qyw6hcmc-kQNLUfofMeczt9mEpvtxx2c&usqp=CAU" alt="m" width={200}/>
        </Grid>
        <Grid item xs={7} md={4}>
        <motion.img 
         whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src="https://www.consumer.es/wp-content/uploads/2019/07/img_bancos-alimentos-mascotas-art.jpg" alt="m" width={200}/>
        </Grid>
        
      </Grid>
            </Grid>
        </Box>
    )
}