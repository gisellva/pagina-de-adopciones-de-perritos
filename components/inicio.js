import { IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  style  from "../styles/slider.module.css";
import { motion } from "framer-motion"
export default function Inicio() {
    return (
        <div >
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            >
            <Typography variant="h2" color="primary" >PATITAS</Typography>
            <Typography variant="h4" color="secondary">adopta un compañeo de por vida</Typography>

            </motion.div>
            <div className={style.icon}>
                <IconButton  aria-label="add an alarm" href="#adopcion"  >
                    <ExpandMoreIcon fontSize="large" color="primary"/>
                </IconButton>
            </div>
        </div>
    )
}