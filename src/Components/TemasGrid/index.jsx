// import {
//   Table,
//   TableContainer,
//   TableRow, 
//   TableCell, 
//   TableBody,
//   IconButton,
//   Collapse,
//   Box,
//   Typography,
//   Paper
// } from "@material-ui/core";
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


// import { useState } from "react";
// import FormDialog from "../FormDialog";

// function  createData(nome, dataInicio, dataFim, requisitos) {
//   return {
//     nome,
//     dataInicio,
//     dataFim,
//     requisitos,
//   }
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = useState(false);
//   return(
//     <>
//       <TableRow>
//         <TableCell>
//           <IconButton size="small" onClick={() => setOpen(!open)}>
//             {
//               open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
//             }
//           </IconButton>
//         </TableCell>
//         <TableCell>{row.nome}</TableCell>
//         <TableCell align="right">{row.dataInicio}</TableCell>
//         <TableCell align="right">{row.dataFim}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>
//               <Typography variant="h6" gutterBottom>
//                 Requisitos
//               </Typography>
//               <Typography>
//                 {row.requisitos}
//               </Typography>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </>
//   )
// }

// const rows = [
//   createData('Cidades inteligentes', '20/03/2020', '17/06/2020', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'),
//   createData('Cidades inteligentes', '20/03/2020', '17/06/2020', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'),
//   createData('Cidades inteligentes', '20/03/2020', '17/06/2020', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'),
//   createData('Cidades inteligentes', '20/03/2020', '17/06/2020', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'),
//   createData('Cidades inteligentes', '20/03/2020', '17/06/2020', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'),
//   createData('Cidades inteligentes', '20/03/2020', '17/06/2020', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'),
// ]

// export function TemasGrid() {
//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableRow>
//             <TableCell />
//             <TableCell>Nome</TableCell>
//             <TableCell align="right">Data inicio</TableCell>
//             <TableCell align="right">Data Fim</TableCell>
//           </TableRow>
//           <TableBody>
//             {
//               rows.map((row) => (
//                 <Row key={row.nome} row={row} /> 
//               ))
//             }
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <FormDialog />
//     </>
//   )
// }


import React, { useState,useEffect, forwardRef } from 'react';

import MaterialTable, {MTableToolbar} from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn'
import axios from 'axios';
import { busca } from '../../pages/api/buscar';
import {
  Box,
  Typography,
} from '@material-ui/core';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

/**const empList = [
  { id: 1, tema: "Cidades inteligentes", subtema: "sustentabilidade", dataInicio: "21/03/2021", dataFim: "15/08/2021", requisitos: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don' },
  { id: 2, tema: "Cidades inteligentes", subtema: "envelhecimento", dataInicio: "21/03/2021", dataFim: "15/08/2021", requisitos: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don' },
  { id: 3, tema: "Cidades inteligentes", subtema: "", dataInicio: "21/03/2021", dataFim: "15/08/2021", requisitos: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don' },
]**/
// const empList = [
//   { id: '1', tema: 'Cidades inteligentres', subtema: "Evelhecimento", equipe: 'EquipeXYZ', responsavel: 'João da Silva', email: 'joao@gmail.com', membros: "1-3", quesito: 'Tenho uma solução para um problema', 
//   descricao: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don' },

// ]
export function TemasGrid() {
  

  function verificarLogin(){
    var userexist = localStorage.getItem('user');
    console.log("userexist: "+userexist);
    if(userexist == ""){
      location.href = "/login";
    }  
  }

  useEffect(() => {
    verificarLogin();
  }, [])
  // const [posts, setPosts] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    busca("/gettemas", setData)
  }, [])

  


  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Tema", field: "tema" },
    { title: "Subtema", field: "subtema" },
    { title: "Data Inicio", field: "dataInicio" },
    { title: "Data Fim", field: "dataFim", },
    { title: "Requistos", field: "requisitos" },
  ]

  return ( 
        <MaterialTable
        components={{
          Toolbar: props => (
              <div style={{display:"flex", flexDirection:"column" }}>
                  <MTableToolbar {...props} />
              </div>
          )
      }}
          icons={tableIcons}
          title="Gerenciamento de temas"
          data={data}
          columns={columns}
          // detailPanel={[
          //   {
          //     tooltip: 'Requisitos',
          //     render: rowData => {
          //       return (
          //         <Box margin={1}>
          //           <Typography variant="h6" gutterBottom>
          //             Requisitos
          //         </Typography>
          //           <Typography>
          //             {rowData.requisitos}
          //           </Typography>
          //         </Box>
          //       )
          //     },
          //   },
          // ]}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
              setTimeout(() => {
                axios.get(`http://localhost:8000/adicionartema?tema=${newRow.tema}&&subtema=${newRow.subtema}&&datainicio=${newRow.dataInicio}&&datafim=${newRow.dataFim}&&requisitos=${newRow.requisitos}&&admin=admin1`)
                .then(res => {
                  if(res.data.lastRowid != null && res.data.lastRowid != ''){
                    alert("inseriu: "+res.data.lastRowid);
                    location.reload();
                    //setData(updatedRows)
                  }
                  else{
                    alert("erro ao inserir: "+JSON.stringify(res));
                  }
                })
                
                resolve()
              }, 2000)
            }),
            onRowDelete: selectedRow => new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data]
              updatedRows.splice(index, 1)
              setTimeout(() => {
                console.log(selectedRow);
                axios.get(`http://localhost:8000/deletetema?tema=${selectedRow.tema}&&subtema=${selectedRow.subtema}`)
                .then(res => {
                  if(res.data.lastRowid != null && res.data.lastRowid != ''){
                    alert("deletou: "+res.data.lastRowid);
                    location.reload();
                    //setData(updatedRows)
                  }
                  else{
                    alert("erro ao deletar: "+JSON.stringify(res));
                  }
                })
                //setData(updatedRows)
                resolve()
              }, 2000)
            }),
            onRowUpdate: (updateRow, oldRow) => new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data]
              updatedRows[index] = updateRow
              console.log("Update row", updateRow)
              setTimeout(() => {
                axios.get(`http://localhost:8000/updatetema?tema=${updateRow.tema}&&subtema=${updateRow.subtema}&&datainicio=${updateRow.dataInicio}&&datafim=${updateRow.dataFim}&&requisitos=${updateRow.requisitos}`)
                  .then(res => {
                    if(res.data.lastRowid != null && res.data.lastRowid != ''){
                      alert("atualizou: "+res.data.lastRowid);
                      location.reload();
                      //setData(updatedRows)
                    }
                    else{
                      alert("erro ao atualizar: "+JSON.stringify(res));
                    }
                  })
                //setData(updatedRows)
                resolve()
              }, 2000)
            })
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
            // search: false
            // paging: false,
            // exportButton: true
          }}
          localization={{
            body: {
              emptyDataSourceMessage: 'Nenhum registro para exibir',
              editRow: {
                deleteText: 'Tem certeza que deseja excluir essa linha ?',
                cancelTooltip: 'Cancelar'
              }
            },
            header: {
              actions: 'Ações'
            },
            toolbar: {
              searchTooltip: 'Pesquisar',
              searchPlaceholder: 'Pesquisar'
            },
            pagination: {
              labelRowsSelect: 'linhas',
              labelDisplayedRows: 'Qualquer coisa',
              labelDisplayedRows: '{count} de {from}-{to}',
              firstTooltip: 'Primeira página',
              previousTooltip: 'Página anterior',
              nextTooltip: 'Próxima página',
              lastTooltip: 'Última página',
              labelRowsPerPage: 'Linhas por páginas',
            }
          }}
        />
  )

}
