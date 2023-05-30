import { Box } from "@mui/material";
import { CardBox } from "../card/Index";

export const GestorMain = () => {
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
        <CardBox basis="24%"></CardBox>
        <CardBox basis="24%"></CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%"></CardBox>
        <CardBox basis="24%"></CardBox>
        <Box
          display="flex"
          width="100%"
          flexWrap="wrap"
          flexBasis="48%"
          justifyContent="space-between"
          gap="10px"
        >
          <CardBox basis="48%"></CardBox>
          <CardBox basis="48%"></CardBox>
          <CardBox basis="100%"></CardBox>
        </Box>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%"></CardBox>
        <CardBox basis="24%"></CardBox>
        <CardBox basis="24%"></CardBox>
        <CardBox basis="24%"></CardBox>
      </Box>
    </>
  );
};
