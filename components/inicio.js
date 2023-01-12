import { IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  style  from "../styles/slider.module.css";

export default function Inicio() {
    return (
        <div >
            
            <Typography variant="h2" color="primary" >PATITAS</Typography>
            <Typography variant="h4" color="secondary">adopta un compañeo de por vida</Typography>
            <div className={style.icon}>
                <IconButton  aria-label="add an alarm" href="#adopcion"  >
                    <ExpandMoreIcon fontSize="large" color="primary"/>
                </IconButton>
            </div>
        </div>
    )
}