import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import React, { useState } from "react";
import './Menu.scss';




const columns = [
  { id: "name", label: "Tên Món", minWidth: 300 },
  {
    id: "price",
    label: "Giá Tiền",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("vi-VN"),
  },
];


function Menu(props) {
  const { onSelectFood, data } = props;
  const classes = useStyles()


  const [page, setPage] = useState(0);

  const rowsPerPage = 10;
  
  const handleRowClick = (event, row) => {
    onSelectFood(row);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper classes={{rounded:classes.rounded,root:classes.root}} className = "menu">
      <TableContainer className="menu__container">
        <Table stickyHeader aria-label="sticky table">
          {/*render header  */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* map data to table */}
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    className="table-row"
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row._id}
                    onClick={(event) => handleRowClick(event, row)}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* pagination  */}
      <TablePagination
        classes ={{root:classes.pagination__root}}
        rowsPerPageOptions={[]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </Paper>
  );
}

Menu.propTypes = {
  onSelectFood: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default Menu;



const useStyles = makeStyles({
  rounded:{
    borderRadius:20,
  },
  root:{
    padding:5,
    display:"flex",
    flexDirection:"column",
  },
  pagination__root:{
    overflow:"hidden"
  }
})