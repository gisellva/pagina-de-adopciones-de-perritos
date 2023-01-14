import { Box } from "@mui/system";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PetsIcon from '@mui/icons-material/Pets';
import style from "../styles/slider.module.css";
import { Stack } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion"

export default function adopcion() {
    return (
        <Box >
            <svg className={style.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#6d4c41" fill-opacity="0.4" d="M0,192L26.7,165.3C53.3,139,107,85,160,80C213.3,75,267,117,320,165.3C373.3,213,427,267,480,266.7C533.3,267,587,213,640,197.3C693.3,181,747,203,800,186.7C853.3,171,907,117,960,122.7C1013.3,128,1067,192,1120,197.3C1173.3,203,1227,149,1280,138.7C1333.3,128,1387,160,1413,176L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>
            <Stack direction={{ xs: "column", md: "row", lg: "row" }} justifyContent="center"
                alignItems="center">
                <div className={style.d}>
                    <Stack>
                        <Typography variant="h4" color="secondary">EN PATITAS TENEMOS A MUCHOS BUACANDO HOGAR </Typography>
                        <Typography variant="body1" color="initial">Nos alegra saber que estas pensando en adoptar, todos nuestros peludos están a la espera de una familia y son entregados en óptimas condiciones de salud y belleza a adoptantes responsables y amorosos. En esta página conocerás nuestro proceso de adopción y requisitos, pero lo primero es conocer al peludo que deseas adoptar, si ya tienes su nombre sigue leyendo nuestras condiciones, de lo contrario puedes conocer todos nuestro peluditos en los siguientes links</Typography>
                        <Stack justifyContent="center"
                            alignItems="center" >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button variant="contained" color="secondary" sx={{ marginTop: 3, marginBottom: 3 }} startIcon={<PetsIcon />} >
                                    <Link href="/requisitos" className={style.s}> adopta un peludito</Link>
                                </Button>
                            </motion.div>
                            <div className={style.con}>
                                <div className={style.vid}>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ipCgSlknb7c"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </div>
                <div className={style.i}>
                    <p>.</p>
                </div>

            </Stack>
        </Box>
    )
}