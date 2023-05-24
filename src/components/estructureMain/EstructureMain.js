import { TabContext, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { estructureTab } from "../../utils/estructureTab";
import { useState } from "react";
import { estructureCard } from "../../utils/estructureCard";
import { estructureInput } from "../../utils/estructureInput";

export const EstructureMain = () => {
  const [value, setValue] = useState("Faturamento");
  const [valueCard, setValueCard] = useState("Receita");

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: "90%" },
          mx: "auto",
          mt: 2,
        }}
        style={{
          backgroundColor: "#141414",
          display: "flex",
          flexDirection: "row",
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
            {estructureTab.map((e, index) => (
              <Tab
                key={index}
                value={e.value}
                label={e.label}
                sx={{ marginRight: 2, textAlign: "center", height: "60px" }}
              />
            ))}
          </Tabs>
          <CardContent style={{ width: "100%" }}>
            <TabPanel value="Faturamento">
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Box width="100%" display="flex" justifyContent="space-around">
                  {estructureCard.map((e, index) => {
                    const borderColor = e.value;
                    return (
                      <Card
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#000000",
                          width: "30%",
                          height: "120px",
                          padding: "8px",
                          cursor: "pointer",
                          borderRadius: "15px",
                          border:
                            borderColor === valueCard
                              ? "1px solid #5A2469"
                              : "1px solid #969696",
                        }}
                        onClick={() => setValueCard(e.value)}
                      >
                        <Typography
                          style={{ fontSize: "20px", fontWeight: "bold" }}
                          color={e.label === valueCard ? "#5A2469" : "#969696"}
                        >
                          {e.label}
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          color={e.label === valueCard ? "#ffffff" : "#969696"}
                        >
                          {e.description}
                        </Typography>
                      </Card>
                    );
                  })}
                </Box>
                {valueCard === "Receita" ? (
                  <Box padding="8px" marginTop="50px">
                    {estructureInput.map((e, index) => (
                      <Box key={index} marginTop="20px">
                        <Typography
                          style={{ fontSize: "25px" }}
                          color="#ffffff"
                        >
                          {e.name}
                        </Typography>
                        <Typography
                          style={{ fontSize: "15px" }}
                          color="#969696"
                        >
                          {e.description}
                        </Typography>
                        <Box
                          display="flex"
                          flexDirection="row"
                          flexWrap="wrap"
                          width="100%"
                          marginTop="20px"
                        >
                          {e.fields.map((e, index) => (
                            <Box key={index} flexBasis="50%">
                              <TextField
                                InputProps={{
                                  style: {
                                    background: "#000000",
                                    color: "#ffffff",
                                    width: "90%",
                                    borderRadius: "10px",
                                    margin: "4px",
                                  },
                                }}
                                InputLabelProps={{
                                  style: { color: "#969696" },
                                }}
                                color="secondary"
                                fullWidth
                                label={e.value ? e.value : null}
                                placeholder={e.value}
                              />
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ) : null}
                <CardActions sx={{ justifyContent: "space-between", marginTop: "15px" }}>
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
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "#5A2469",
                      color: "#ffffff",
                    }}
                  >
                    Salvar
                  </Button>
                </CardActions>
              </Box>
            </TabPanel>
          </CardContent>
        </TabContext>
      </Card>
    </>
  );
};
