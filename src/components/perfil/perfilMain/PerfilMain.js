import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import LockIcon from "@mui/icons-material/Lock";
import CalculateIcon from "@mui/icons-material/Calculate";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupIcon from "@mui/icons-material/Group";
import WcIcon from "@mui/icons-material/Wc";
import JoinLeftIcon from "@mui/icons-material/JoinLeft";
import Man3Icon from "@mui/icons-material/Man3";
import Woman2Icon from "@mui/icons-material/Woman2";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import KeyIcon from "@mui/icons-material/Key";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WebhookIcon from "@mui/icons-material/Webhook";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { perfilBox, perfilTabs, perfilInputs } from "../../../utils/perfilBox";
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import { LineChart } from "../../charts/line/LineChart";

export const PerfilMain = () => {
  const [value, setValue] = useState("Renda");

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      width="90%"
      display="flex"
      justifyContent="space-between"
      marginTop="20px"
    >
      <Box flexBasis="23%">
        <Card style={{ borderRadius: "15px" }}>
          <Box padding="10px" style={{ background: "#141414" }}>
            <Typography color="#ffffff" style={{ fontSize: "18px" }}>
              Nós nascemos
            </Typography>
            <Typography style={{ fontSize: "10px", color: "#969696" }}>
              para mudar essa ideia equivocada de denunciar o prazer e elogiar a
              dor
            </Typography>
            <Box
              display="flex"
              gap="10px"
              marginTop="20px"
              borderBottom="1px solid #696969"
            >
              <DevicesIcon sx={{ color: "#ffffff" }} />
              <Typography color="#ffffff" style={{ fontSize: "20px" }}>
                Dados pessoais
              </Typography>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              marginTop="10px"
              gap="5px"
              justifyContent="space-between"
            >
              <Box flexBasis="45%" display="flex">
                <BadgeIcon fontSize="large" sx={{ color: "#696969" }} />
                <Box>
                  <Typography color="#696969" style={{ fontSize: "10px" }}>
                    CPF:
                  </Typography>
                  <Typography color="#ffffff" style={{ fontSize: "14px" }}>
                    123.456.789-00
                  </Typography>
                </Box>
              </Box>
              <Box flexBasis="45%" display="flex">
                <GroupIcon fontSize="large" sx={{ color: "#696969" }} />
                <Box>
                  <Typography color="#696969" style={{ fontSize: "10px" }}>
                    RG:
                  </Typography>
                  <Typography color="#ffffff" style={{ fontSize: "14px" }}>
                    12.345.678-9 | SSP-SP
                  </Typography>
                </Box>
              </Box>
              <Box flexBasis="45%" display="flex">
                <WcIcon fontSize="large" sx={{ color: "#696969" }} />
                <Box>
                  <Typography color="#696969" style={{ fontSize: "10px" }}>
                    Sexo:
                  </Typography>
                  <Typography color="#ffffff" style={{ fontSize: "14px" }}>
                    Masculino
                  </Typography>
                </Box>
              </Box>
              <Box flexBasis="45%" display="flex">
                <JoinLeftIcon fontSize="large" sx={{ color: "#696969" }} />
                <Box>
                  <Typography color="#696969" style={{ fontSize: "10px" }}>
                    Estado civil:
                  </Typography>
                  <Typography color="#ffffff" style={{ fontSize: "14px" }}>
                    Solteiro
                  </Typography>
                </Box>
              </Box>
              <Box flexBasis="45%" display="flex">
                <Man3Icon fontSize="large" sx={{ color: "#696969" }} />
                <Box>
                  <Typography color="#696969" style={{ fontSize: "10px" }}>
                    Nome do pai:
                  </Typography>
                  <Typography color="#ffffff" style={{ fontSize: "14px" }}>
                    Lorem ipsum
                  </Typography>
                </Box>
              </Box>
              <Box flexBasis="45%" display="flex">
                <Woman2Icon fontSize="large" sx={{ color: "#696969" }} />
                <Box>
                  <Typography color="#696969" style={{ fontSize: "10px" }}>
                    Nome da mãe:
                  </Typography>
                  <Typography color="#ffffff" style={{ fontSize: "14px" }}>
                    lorem ipsum
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card style={{ marginTop: "15px", borderRadius: "15px" }}>
          <Box padding="10px" style={{ background: "#141414" }}>
            <Typography color="#ffffff" style={{ fontSize: "18px" }}>
              Nós vamos
            </Typography>
            <Typography style={{ fontSize: "10px", color: "#969696" }}>
              te oferecer aqui uma experiência completa do que chamamos de{" "}
              {"'portal'"}
            </Typography>
            <Box
              display="flex"
              gap="10px"
              marginTop="20px"
              borderBottom="1px solid #696969"
            >
              <LockIcon sx={{ color: "#ffffff" }} />
              <Typography color="#ffffff" style={{ fontSize: "20px" }}>
                Dados de pagamento
              </Typography>
            </Box>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CreditCardIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      Mastercard
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      **** **** **** 1234
                    </Typography>
                  }
                />
                <ListItemAvatar
                  sx={{
                    background: "#000000",
                    display: "flex",
                    borderRadius: "10px",
                    justifyContent: "space-around",
                  }}
                >
                  <KeyIcon fontSize="smal" sx={{ color: "#ffffff" }} />
                  <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    CVC
                  </Typography>
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CreditCardIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      Mastercard
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      **** **** **** 1234
                    </Typography>
                  }
                />
                <ListItemAvatar
                  sx={{
                    background: "#000000",
                    display: "flex",
                    borderRadius: "10px",
                    justifyContent: "space-around",
                  }}
                >
                  <KeyIcon fontSize="smal" sx={{ color: "#ffffff" }} />
                  <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    CVC
                  </Typography>
                </ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CreditCardIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      Mastercard
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      **** **** **** 1234
                    </Typography>
                  }
                />
                <ListItemAvatar
                  sx={{
                    background: "#000000",
                    display: "flex",
                    borderRadius: "10px",
                    justifyContent: "space-around",
                  }}
                >
                  <KeyIcon fontSize="smal" sx={{ color: "#ffffff" }} />
                  <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    CVC
                  </Typography>
                </ListItemAvatar>
              </ListItem>
            </List>
            <Button
              variant="outlined"
              style={{
                background:
                  "linear-gradient(129deg, rgba(2,0,36,1) 0%, rgba(90,36,105,1) 41%)",
                color: "#ffffff",
                width: "100%",
                height: "20px",
                fontSize: "10px",
                borderRadius: "5px",
              }}
            >
              Cadastrar novo
            </Button>
          </Box>
        </Card>
        <Card style={{ marginTop: "15px", borderRadius: "15px" }}>
          <Box padding="10px" style={{ background: "#141414" }}>
            <Typography color="#ffffff" style={{ fontSize: "18px" }}>
              Será bem vindo
            </Typography>
            <Typography style={{ fontSize: "10px", color: "#969696" }}>
              aqueles quiserem descobrir como buscar prazer racionalmente
            </Typography>
            <Box
              display="flex"
              gap="10px"
              marginTop="20px"
              borderBottom="1px solid #696969"
            >
              <CalculateIcon sx={{ color: "#ffffff" }} />
              <Typography color="#ffffff" style={{ fontSize: "20px" }}>
                Dados financeiros
              </Typography>
            </Box>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountBalanceIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      Bradesco
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      saldo atual
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountBalanceIcon sx={{ color: "#ffffff" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      BTG
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      saldo atual
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Button
              variant="outlined"
              style={{
                background:
                  "linear-gradient(129deg, rgba(2,0,36,1) 0%, rgba(90,36,105,1) 41%)",
                color: "#ffffff",
                width: "100%",
                height: "20px",
                fontSize: "10px",
                borderRadius: "5px",
              }}
            >
              Cadastrar novo
            </Button>
          </Box>
        </Card>
      </Box>
      <Box flexBasis="23%">
        <Card style={{ borderRadius: "10px", borderRadius: "15px" }}>
          <Box padding="10px" style={{ background: "#141414" }}>
            <Typography color="#ffffff" style={{ fontSize: "18px" }}>
              Vamos encontrar
            </Typography>
            <Typography style={{ fontSize: "10px", color: "#969696" }}>
              seus amores e desejos mais profundos... Hey Ho, {"Let's"} go!
            </Typography>
            <Box
              display="flex"
              gap="10px"
              marginTop="20px"
              borderBottom="1px solid #696969"
            >
              <WebhookIcon sx={{ color: "#ffffff" }} />
              <Typography color="#ffffff" style={{ fontSize: "20px" }}>
                Suas atividades
              </Typography>
            </Box>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#b34dc7" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#ffffff" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#b34dc7" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#ffffff" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#b34dc7" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#4c8eab" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#dd4f4f" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#ffffff" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#4c8eab" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>{" "}
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#ffffff" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#4c8eab" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <RadioButtonCheckedIcon sx={{ color: "#b34dc7" }} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      123.456.789-00
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      #004 lorem ipsum
                    </Typography>
                  }
                />
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#4BB543" }}>
                      + 123%
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" style={{ color: "#696969" }}>
                      123.456.789-00
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Card>
      </Box>
      <Box flexBasis="50%">
        <Card style={{ borderRadius: "10px", borderRadius: "15px" }}>
          <Box padding="10px" style={{ background: "#141414" }}>
            <Typography color="#ffffff" style={{ fontSize: "18px" }}>
              Seus números:
            </Typography>
            <Typography style={{ fontSize: "10px", color: "#969696" }}>
              Tempo total (horas): 3.397.994
            </Typography>
          </Box>
          <Box
            display="flex"
            padding="10px"
            justifyContent="space-between"
            style={{ background: "#141414" }}
          >
            {perfilBox.map((e, index) => (
              <Box key={index} display="flex">
                {e.icon}
                <Box>
                  <Typography style={{ fontSize: "10px", color: "#969696" }}>
                    {e.name}
                  </Typography>
                  <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                    {e.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Card>
        <Card
          sx={{
            width: "100%",
            mx: "auto",
            mt: 2,
          }}
          style={{
            backgroundColor: "#141414",
            display: "flex",
            flexDirection: "row",
            borderRadius: "10px",
          }}
        >
          <TabContext value={value}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleTabsChange}
              TabIndicatorProps={{
                sx: { backgroundColor: "#5A2469" },
              }}
              sx={{
                width: "30%",
                height: "100%",
                "& div": { justifyContent: "space-around" },
                "& button": { color: "#969696" },
                "& button.Mui-selected": { color: "#ffffff" },
              }}
            >
              {perfilTabs.map((e, index) => (
                <Tab
                  key={index}
                  value={e.value}
                  label={e.label}
                  sx={{ marginRight: 2, textAlign: "center", height: "60px" }}
                />
              ))}
            </Tabs>
            <CardContent style={{ width: "100%" }}>
              <TabPanel value="Renda">
                <Box width="100%" display="flex" flexDirection="column">
                  <Box style={{ background: "#141414" }}>
                    <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                      Vamos começar...
                    </Typography>
                    <Typography style={{ fontSize: "10px", color: "#969696" }}>
                      Compartilhe conosco seus sonhos e desejos :
                    </Typography>
                  </Box>
                  <Box marginTop="20px">
                    {perfilInputs.map((e, index) => (
                      <TextField
                        key={index}
                        InputProps={{
                          style: {
                            background: "#000000",
                            color: "#ffffff",
                            borderRadius: "10px",
                            marginTop: "10px",
                          },
                        }}
                        InputLabelProps={{ style: { color: "#969696" } }}
                        color="secondary"
                        fullWidth
                        label={e.name}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    style={{
                      background:
                        "linear-gradient(129deg, rgba(2,0,36,1) 0%, rgba(90,36,105,1) 41%)",
                      color: "#ffffff",
                      width: "100%",
                      height: "30px",
                      fontSize: "10px",
                      borderRadius: "5px",
                      marginTop: "30px",
                    }}
                  >
                    Salvar meu desejo
                  </Button>
                </Box>
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
        <LineChart
            name={"Suas projeções financeiras"}
            description={"O grafico abaixo apresenta a evolução de suas receitas X histórico e projeções de suas despesas"}
            labels={["2022.1","2022.2","2022.3","2022.4","2023","2024","2025","2026","2027"]}
            data={[110123,90054,85126,40565,35564,35469,36546,40216,42666]}
            borderColor={'#14248a'}
            backgroundColor={'#5365D8'}
          />
      </Box>
    </Box>
  );
};
