import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CardBox } from "../card/Index";

export const TableList = (props) => {
  const { heads, rows } = props;

  const getColorByIndex = (index) => {
    if (index === 0) return "#ffffff";
    if (index >= 1 && index <= 3) return "#b2abf2";
    if (index >= 4 && index <= 6) return "#ee7b30";
    if (index >= 7 && index <= 9) return "#EDCE2F";
    if (index >= 10 && index <= 12) return "#D875DA";
    return ""; // Cor padrão caso o índice não corresponda a nenhum dos casos anteriores
  };

  return (
    <Box width="90%" marginTop="10px">
      <CardBox
        width="100%"
        title="01 jan - 31 dez 2023"
        subtitle="Você possui um total de 123.456 transações"
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#000000" }}>
              <TableRow>
                {heads.map((e, index) => (
                  <TableCell
                    key={index}
                    align="right"
                    sx={{ color: getColorByIndex(index)}}
                  >
                    {e}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#141414" }}>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.keys(row).map((key, index) => {
                    if (index === 0) {
                      return (
                        <TableCell
                          key={index}
                          component="th"
                          scope="row"
                          sx={{ color: "#ffffff" }}
                        >
                          {row.name}
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell
                          key={index}
                          align="right"
                          sx={{ color: index === 0 ? "#ffffff" : "#969696" }}
                        >
                          {row[key]}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardBox>
    </Box>
  );
};
