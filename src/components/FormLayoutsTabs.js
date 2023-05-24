// ** React Imports
import { forwardRef, useState } from "react";

// ** MUI Imports
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TabContext from "@mui/lab/TabContext";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import CardActions from "@mui/material/CardActions";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import CreditCardInfoBox from "./CreditCardInfoBox";
import AccumulatedVolumeBox from "./AccumulatedVolumeBox";

const FormLayoutsTabs = () => {
  const [value, setValue] = useState("Dados conta");
  const [personalData, setPersonalData] = useState({
    cep: "",
    complement: "",
    city: "",
    country: "",
    address: "",
    number: "",
    neighborhood: "",
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
    >
      <TabContext value={value}>
        <TabList
          variant="scrollable"
          scrollButtons={false}
          onChange={handleTabsChange}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value="Dados conta"
            label="Dados conta"
            sx={{ marginRight: 2, textAlign: "center" }}
          />
          <Tab
            value="Dados pessoais"
            label="Dados pessoais"
            sx={{ marginRight: 2, textAlign: "center" }}
          />
          <Tab
            value="Cartão de crédito"
            label="Cartão de crédito"
            sx={{ marginRight: 2, textAlign: "center" }}
          />
          <Tab
            value="Dados Bancários"
            label="Dados Bancários"
            sx={{ marginRight: 2, textAlign: "center" }}
          />
        </TabList>

        <form onSubmit={(e) => e.preventDefault()}>
          <CardContent>
            <TabPanel value="Dados conta">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome Completo"
                    placeholder="Nome Completo"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="CPF" placeholder="CPF" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="RG" placeholder="RG" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Sexo" placeholder="Sexo" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nacionalidade"
                    placeholder="Nacionalidade"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome Completo do Pai"
                    placeholder="Nome Completo do Pai"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome Completo da Mãe"
                    placeholder="Nome Completo da Mãe"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefone Celular"
                    placeholder="Telefone Celular"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Data de Nascimento"
                    placeholder="Data de Nascimento"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Orgão Emissor"
                    placeholder="Orgão Emissor"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Profissão"
                    placeholder="Profissão"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Estado Civil"
                    placeholder="Estado Civil"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    disabled
                    label="Email: clientalien@dashboard.com"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    disabled
                    label="Cliente desde: 10/06/2023"
                  />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value="Dados pessoais">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CEP"
                    value={personalData.cep}
                    onChange={handlePersonalDataChange("cep")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Complemento"
                    value={personalData.complement}
                    onChange={handlePersonalDataChange("complement")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Cidade"
                    value={personalData.city}
                    onChange={handlePersonalDataChange("city")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="País"
                    value={personalData.country}
                    onChange={handlePersonalDataChange("country")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Endereço"
                    value={personalData.address}
                    onChange={handlePersonalDataChange("address")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Número"
                    value={personalData.number}
                    onChange={handlePersonalDataChange("number")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Bairro"
                    value={personalData.neighborhood}
                    onChange={handlePersonalDataChange("neighborhood")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="UF"
                    value={personalData.state}
                    onChange={handlePersonalDataChange("state")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    disabled
                    label="IP"
                    value={personalData.ip}
                  />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value="Cartão de crédito">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Número do cartão"
                    value={creditCardData.cardNumber}
                    onChange={handleCreditCardDataChange("cardNumber")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CPF do titular"
                    value={creditCardData.cpf}
                    onChange={handleCreditCardDataChange("cpf")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Limite de crédito"
                    value={creditCardData.creditLimit}
                    onChange={handleCreditCardDataChange("creditLimit")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome completo titular"
                    value={creditCardData.fullName}
                    onChange={handleCreditCardDataChange("fullName")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Data de validade"
                    value={creditCardData.expiryDate}
                    onChange={handleCreditCardDataChange("expiryDate")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Bandeira"
                    value={creditCardData.cardFlag}
                    onChange={handleCreditCardDataChange("cardFlag")}
                  />
                </Grid>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Banco"
                    value={bankData.bank}
                    onChange={handleBankDataChange("bank")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Tipo de conta"
                    value={bankData.accountType}
                    onChange={handleBankDataChange("accountType")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Saldo atual"
                    value={bankData.currentBalance}
                    onChange={handleBankDataChange("currentBalance")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Agência"
                    value={bankData.agency}
                    onChange={handleBankDataChange("agency")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Titular"
                    value={bankData.accountHolder}
                    onChange={handleBankDataChange("accountHolder")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Código do banco"
                    value={bankData.bankCode}
                    onChange={handleBankDataChange("bankCode")}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>
          
          <Divider sx={{ m: "0 !important" }} />
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button
              size="large"
              type="reset"
              variant="outlined"
              color="secondary"
            >
              Resetar
            </Button>
            <Button size="large" type="submit" variant="contained">
              Salvar
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
  );
};

export default FormLayoutsTabs;
