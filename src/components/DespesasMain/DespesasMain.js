import { Box } from "@mui/material";
import { CardBox } from "../card/Index";

export const DespesasMain = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%"></CardBox>
        <CardBox basis="24%"></CardBox>
        <CardBox basis="48%"></CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="48%"></CardBox>
        <CardBox basis="48%"></CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="48%"></CardBox>
        <CardBox basis="48%"></CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%"></CardBox>
        <CardBox basis="12%"></CardBox>
        <CardBox basis="12%"></CardBox>
        <CardBox basis="12%"></CardBox>
        <CardBox basis="12%"></CardBox>
        <CardBox basis="12%"></CardBox>
        <CardBox basis="12%"></CardBox>
      </Box>
    </>
  );
};
