import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : '#ffab00',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '3px solid rgba(128, 64, 0, .125)',
}));

export default function Preguntas() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>¿CUÁL ES EL PROCESO PARA ADOPTAR UN ANIMAL DE LA FUNDACIÓN?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Tenemos una gran cantidad de solicitudes y pocos recursos humanos para el estudio de estos, por eso te pedimos tener un poco de paciencia y respeto, leer con detalle y cuidado la información suministrada para empezar el proceso de adopción. <br/>
         1.Escoger el perrito que desees adoptar teniendo en cuenta el espacio que dispones, su edad y tamaño. <br/>
         2.Diligencia el Pre- Formulario de Adopción. Los datos ingresados serán verificados por funcionarios de la Fundación (esta verificación tarda 3 días calendario). Si no sigues en el proceso te enviaremos un correo electrónico informándote.<br/>
         3.Si tu formulario es aprobado, te llamaremos para darte todas las instrucciones para que grabes un video del lugar donde vivirá el peludo y nos lo envies, ya que por tema del Coronavirus no podemos hacer la visita domiciliaria.<br/>
         4.Revisaremos tu solicitud y si todo está en orden, nos contactaremos para coordinar el día en que el peludito que escogiste llegue a tu casa.<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>¿CUÁLES SON LOS BENEFICIOS DE ADOPTAR?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
           1.Enseña a niños valores como respeto a la vida, amistad y amor. Crea sentido de responsabilidad y promueve la comunicación entre padres e hijos.<br/>
           2.Disminuyen la soledad, la ansiedad, el estrés y subiendo el ánimo y la autoestima.<br/>
           3.Estimulan el contacto social y nos ayudan a estar en forma.<br/>
           4.Te entregamos un perro sano, vacunado y esterilizado. Costos que usualmente tu asumirías al comprarlo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>¿CUÁNTOS ANIMALES HAN SIDO DADOS EN ADOPCIÓN?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nos enorgullece y motiva el hecho de que, a la fecha, hemos rescatado más de 450 peludos. Sin duda, hemos cambiado el mundo de estas criaturas y ellos el nuestro. Muchos de nuestros rescatados han sido felizmente adoptados, otros nos han enseñado a no darnos por vencidos y son el vivo ejemplo de perseverancia y gratitud. Algunos ya no nos acompañan, pero nos queda la sensación de haberles permitido conocer la bondad humana, ahora son angelitos que iluminan nuestro camino y nos han llenado el espíritu de fuerza para continuar y, por último, están los que habitan el refugio y que siguen esperando allí una oportunidad para llenar hogares de alegría y amor.
          </Typography>
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
}