import styles from '../css/requerimientosspeech.module.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import DoneIcon from '@mui/icons-material/Done';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RestoreFromTrash } from '@mui/icons-material';
import {} from '@mui/material/styles';
import { create } from '@mui/material/styles/createTransitions';

function createRequirement(tipo, requerimiento){
  return {tipo, requerimiento};
}

/*const rows = [
  createRequirement('cambio', 'cambio de color'),
  createRequirement('cambio', 'cambio de tamaño logo de la empresa'),
];*/

export const RequerimientosSpeech = () => {
  
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [rows, setRows] = useState([]);
  const commands = [
    {
      command: "levantar requerimiento *",
      callback: (requerimiento) => {
        setMessage(`El requerimiento es: ${requerimiento}`);
        setType('Requerimiento');
        //rows.push(createRequirement('Requerimiento', requerimiento));
      }
    },
    {
      command: "cambio *",
      callback: (cambio) => {
        setMessage(`El cambio solicitado es: ${cambio}`);
        setType('Cambio');
        //rows.push(createRequirement('Cambio', cambio));
      }
    }
  ];

const {
  transcript,
  listening,
  resetTranscript,
  browserSupportsSpeechRecognition
} = useSpeechRecognition({
  commands
});

const addRequirement = () => {
  setRows([...rows, createRequirement(type, transcript)]);
  console.log(rows
  );
}

const startListening = () => {
  resetTranscript();
  setMessage();
  SpeechRecognition.startListening({
    continuous: false,
    language: 'es-MX'
  });
}

const stopListening = () =>{
  SpeechRecognition.stopListening();
}

if(!browserSupportsSpeechRecognition){
  return <span>Browser don't support speech recoginition.</span>
}

const Icon = listening ? MicIcon : MicOffIcon;


  return (
    <div className={styles.App}>
      <header className={styles.App-header}>
        <div className={styles.container}>
        <h1>Bienvenido</h1>
        <p>Para levantar requerimientos con respecto a una entrega, solo pulsa el 
          botón en forma de micrófono que se encuentra justo debajo y comienza a hablar!</p>
        <p><em>Nota: Para solcitar un nuevo requerimiento di "levantar requerimiento (tu requerimiento)", en caso de que desees solictar un cambio dí lo siguiente "cambio de (tu cambio)"</em></p>
        <IconButton color='primary' size='large' onMouseUp={startListening} onMouseDown={stopListening}>
          <Icon fontSize='large'/>
        </IconButton>
        <TextField
          className={styles.message}
          color='warning'
          id="standard-multiline-flexible"
          label="Requerimiento / cambio "
          multiline
          maxRows={4}
          variant="standard"
          placeholder='Aquí se mostrar la transcripción del requerimiento / o cambio solicitado'
          value={transcript}
        />
        <IconButton color="primary" size="large" onMouseUp={addRequirement}>
          <DoneIcon fontSize='large'/>
        </IconButton>
        <p>{transcript}</p>
        <p>{message}</p>
        <p>{type}</p>
        <TableContainer component={Paper} >
          <Table sx={{minWidth: 400}} aria-label="simple table">
            <TableHead sx={{bgcolor: "red"}}>
              <TableRow>
                <TableCell>N°</TableCell>
                <TableCell>Tipo Requerimiento</TableCell>
                <TableCell>Requerimiento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rows.map((row) => (
                  <TableRow key={row.requerimiento} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{1}</TableCell>
                    <TableCell>{row.tipo}</TableCell>
                    <TableCell>{row.requerimiento}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        </div>

      </header>
    </div>
  );
}

export default RequerimientosSpeech;