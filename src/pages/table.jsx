
import React, { useState, forwardRef } from 'react';

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
import ViewColumn from '@material-ui/icons/ViewColumn';
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

const empList = [
  { id: 1, name: "Daniel", email: "daniel@gmail.com", phone: 19987413940, city: "Bangalore", requisitos: 'bababababababababababababababababababab' },
  { id: 2, name: "Daniel", email: "daniel@gmail.com", phone: 19987413940, city: "Bangalore", requisitos: 'bababababababababababababababababababab' },
  { id: 3, name: "Daniel", email: "daniel@gmail.com", phone: 19987413940, city: "Bangalore", requisitos: 'ccccccccccccccccccccccccccccccccccccccccccc' },
  { id: 4, name: "Daniel", email: "daniel@gmail.com", phone: 19987413940, city: "Bangalore", requisitos: 'dddIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ' },
]

export default function Table() {
  const [data, setData] = useState(empList)

  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phone", },
    { title: "City", field: "city" },
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
          detailPanel={[
            {
              tooltip: 'Requisitos',
              render: rowData => {
                return (
                  <Box margin={1}>
                    <Typography variant="h6" gutterBottom>
                      Requisitos
                  </Typography>
                    <Typography>
                      {rowData.requisitos}
                    </Typography>
                  </Box>
                )
              },
            },
          ]}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
              setTimeout(() => {
                setData(updatedRows)
                resolve()
              }, 2000)
            }),
            onRowDelete: selectedRow => new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data]
              updatedRows.splice(index, 1)
              setTimeout(() => {
                setData(updatedRows)
                resolve()
              }, 2000)
            }),
            onRowUpdate: (updateRow, oldRow) => new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data]
              updatedRows[index] = updateRow
              console.log("Update row", updateRow)
              setTimeout(() => {
                setData(updatedRows)
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



