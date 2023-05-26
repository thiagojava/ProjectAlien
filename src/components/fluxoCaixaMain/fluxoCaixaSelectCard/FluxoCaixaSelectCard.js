import { Box, Button, Card, CardActions, FormControl, TextField, Typography } from "@mui/material";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import CollectionsIcon from "@mui/icons-material/Collections";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { fluxoCaixaSelect } from "../../../utils/fluxoCaixaCards";
import { InputLabel } from "@material-ui/core";

export const FluxoCaixaSelectCard = () => {
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: "90%" },
          mx: "auto",
          mt: 2,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#141414",
          justifyContent: "flex-start",
        }}
      >
        <Box marginBottom="10px" padding="10px">
          <Typography color="#ffffff" style={{ fontSize: "20px" }}>
            Inserir transações
          </Typography>
          <Typography style={{ fontSize: "14px", color: "#969696" }}>
            Hoje é: Segunda-feira, 10 de maio de 2023
          </Typography>
        </Box>
        <FormControl
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "5px",
          }}
        >
          {fluxoCaixaSelect.map((e, index) => (
            <Box key={index} flexBasis="12%" display="flex" flexDirection="column">
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "#ffffff" }}
              >
                {e.label}
              </InputLabel>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{
                  width: "100%",
                  color: "#969696",
                  background: "#000000",
                  borderRadius: "10px",
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          ))}
        </FormControl>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          width="100%"
          marginTop="15px"
          marginBottom="15px"
        >
          <Box flexBasis="33%">
            <TextField
              InputProps={{
                style: {
                  background: "#000000",
                  color: "#ffffff",
                  width: "400px",
                },
              }}
              InputLabelProps={{ style: { color: "#969696" } }}
              color="secondary"
              label="Observação"
              placeholder="Observação"
            />
          </Box>
          <Box flexBasis="33%">
            <TextField
              InputProps={{
                style: {
                  background: "#000000",
                  color: "#ffffff",
                  width: "400px",
                },
              }}
              InputLabelProps={{ style: { color: "#969696" } }}
              color="secondary"
              label="Centro de custo"
              placeholder="Centro de custo"
            />
          </Box>
          <Box flexBasis="25%" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <QrCode2Icon
              fontSize="large"
              sx={{
                color: "#5A2469",
                border: "1px solid #5A2469",
                width: "20px",
                borderRadius: "5px",
              }}
            />
            <CloudUploadIcon
              fontSize="large"
              sx={{
                color: "#F15555",
                border: "1px solid #F15555",
                width: "20px",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
            <ContentCutIcon
              fontSize="large"
              sx={{
                color: "#fc7500",
                border: "1px solid #fc7500",
                width: "20px",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
            <CollectionsIcon
              fontSize="large"
              sx={{
                color: "#4DBA44",
                border: "1px solid #4DBA44",
                width: "20px",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
            <LightbulbOutlinedIcon
              fontSize="large"
              sx={{
                color: "#ECE216",
                border: "1px solid #ECE216",
                width: "20px",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
            <PsychologyOutlinedIcon
              fontSize="large"
              sx={{
                color: "#9181D5",
                border: "1px solid #9181D5",
                width: "20px",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
          </Box>
        </Box>
        <CardActions sx={{ justifyContent: "space-between" }}>
            <Button
              size="large"
              type="reset"
              variant="outlined"
              style={{
                backgroundColor: "#000000",
                borderColor: "#969696",
                color: "#969696",
              }}
            >
              voltar
            </Button>
            <Button size="large" type="submit" variant="contained" style={{
                backgroundColor: "#5A2469",
                color: "#ffffff",
              }}>
              Salvar
            </Button>
          </CardActions>
      </Card>
    </>
  );
};
