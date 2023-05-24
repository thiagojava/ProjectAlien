// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TabContext from "@mui/lab/TabContext";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CreditCardInfoBox from "../CreditCardInfoBox";
import AccumulatedVolumeBox from "../AccumulatedVolumeBox";
import { card } from "../style";
import { formTab } from "../../utils/formTab";
import { Box, Tabs, Typography } from "@mui/material";

const FormLayoutsTabs = () => {
  const [value, setValue] = useState("Dados conta");
  const [description, setDescription] = useState(
    "os informe um pouco mais sobre você"
  );
  const [personalData, setPersonalData] = useState({
    zipCode: "",
    city: "",
    country: "",
    addressLine1: "",
    addresLine2: "",
    number: "",
    district: "",
    state: "",
    ip: "",
  });

  const [creditCardData, setCreditCardData] = useState({
    cardNumber: "",
    cpf: "",
    creditLimit: "",
    fullName: "",
    expiryDate: "",
    cardFlag: "",
  });

  const [bankData, setBankData] = useState({
    bank: "",
    accountType: "",
    currentBalance: "",
    agency: "",
    accountHolder: "",
    bankCode: "",
  });

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "Dados conta") {
      setDescription("os informe um pouco mais sobre você");
    } else if (newValue === "Dados pessoais") {
      setDescription("Onde você mora atualmente?");
    } else if (newValue === "Cartão de crédito") {
      setDescription("Você pode cadastrar todos que quiser acompanhar :)");
    } else setDescription("Você pode administrar quantas contas desejar:)");
  };

  const handlePersonalDataChange = (prop) => (event) => {
    setPersonalData({ ...personalData, [prop]: event.target.value });
  };

  const handleCreditCardDataChange = (prop) => (event) => {
    setCreditCardData({ ...creditCardData, [prop]: event.target.value });
  };

  const handleBankDataChange = (prop) => (event) => {
    setBankData({ ...bankData, [prop]: event.target.value });
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "90%" },
        mx: "auto",
        mt: 2,
      }}
      style={card}
    >
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleTabsChange}
          TabIndicatorProps={{
            sx: { background: "#5A2469" },
          }}
          sx={{
            "& div": { justifyContent: "space-around" },
            "& button": { color: "#969696" },
            "& button.Mui-selected": { color: "#ffffff" },
          }}
        >
          {formTab.map((e) => (
            <Tab
              key={e.index}
              value={e.value}
              label={e.label}
              sx={{ marginRight: 2, textAlign: "center" }}
            />
          ))}
        </Tabs>
        <Box
          display="flex"
          flexDirection="column"
          color="#ffffff"
          justifyContent="start"
          padding={5}
        >
          <Typography style={{ fontSize: "25px" }}>{value}</Typography>
          <Typography style={{ fontSize: "14px", color: "#969696" }}>
            {description}
          </Typography>
        </Box>
        <form onSubmit={(e) => e.preventDefault()}>
          <CardContent>
            <TabPanel value="Dados conta">
              <Grid container spacing={5}>
                {formTab[0].fields.map((e) => (
                  <Grid key={e.index} item xs={12} sm={6}>
                    <TextField
                      InputProps={{
                        style: {
                          background: "#000000",
                          color: "#ffffff",
                        },
                      }}
                      InputLabelProps={{ style: { color: "#969696" } }}
                      color="secondary"
                      fullWidth
                      disabled={e.disable}
                      label={e.value ? e.value : null}
                      placeholder={e.value}
                    />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value="Dados pessoais">
              <Grid container spacing={5}>
                {formTab[1].fields.map((e, index) => (
                  <Grid key={index} item xs={12} sm={6}>
                    <TextField
                      InputProps={{
                        style: {
                          background: "#000000",
                          color: "#ffffff",
                        },
                      }}
                      InputLabelProps={{ style: { color: "#969696" } }}
                      color="secondary"
                      fullWidth
                      disabled={e.disable}
                      label={e.value ? e.value : null}
                      onChange={handlePersonalDataChange(e.set)}
                    />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value="Cartão de crédito">
              <Grid container spacing={5}>
                {formTab[2].fields.map((e) => (
                  <Grid key={e.index} item xs={12} sm={6}>
                    <TextField
                      InputProps={{
                        style: {
                          background: "#000000",
                          color: "#ffffff",
                        },
                      }}
                      InputLabelProps={{ style: { color: "#969696" } }}
                      color="secondary"
                      fullWidth
                      disabled={e.disable}
                      label={e.value ? e.value : null}
                      value={creditCardData[e.index]}
                      onChange={handleCreditCardDataChange(e.set)}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} mt={3}>
                  <CreditCardInfoBox creditCardData={creditCardData} />
                </Grid>
                <Grid item xs={12} sm={6} mt={3}>
                  <AccumulatedVolumeBox
                    creditCardData={creditCardData}
                    totalAccumulated={200}
                  />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value="Dados Bancários">
              <Grid container spacing={5}>
                {formTab[3].fields.map((e) => (
                  <Grid key={e.index} item xs={12} sm={6}>
                    <TextField
                      InputProps={{
                        style: {
                          background: "#000000",
                          color: "#ffffff",
                        },
                      }}
                      InputLabelProps={{ style: { color: "#969696" } }}
                      color="secondary"
                      fullWidth
                      disabled={e.disable}
                      label={e.value ? e.value : null}
                      value={personalData[e.index]}
                      onChange={handleBankDataChange(e.set)}
                    />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </CardContent>

          <Divider sx={{ m: "0 !important" }} />
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
        </form>
      </TabContext>
    </Card>
  );
};

export default FormLayoutsTabs;
