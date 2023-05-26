import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Container,
  Box,
} from "@material-ui/core";
import AdbIcon from "@mui/icons-material/Adb";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";
import { makeStyles } from "@material-ui/core/styles";
import { linksNavigate } from "../../utils/linksNavigate";
import { useRouter } from "next/router";
import ApexRadialBarChart from "../Charts/Apex";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Navbar = () => {
  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <AppBar position="static">
      <Container maxWidth="100%" style={{ backgroundColor: "#141414" }}>
        <Toolbar
          style={{
            backgroundColor: "#141414",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <AdbIcon />
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <ApexRadialBarChart />
          </Box>
          <Box>
            <CloudUploadIcon sx={{ color: "#969696", marginRight: "10px" }} />
            <WbSunnyIcon sx={{ color: "#969696", marginRight: "10px" }} />
            <NotificationsIcon sx={{ color: "#969696", marginRight: "10px" }} />
            <InfoIcon sx={{ color: "#969696", marginRight: "10px" }} />
          </Box>
        </Toolbar>
      </Container>
      <Container maxWidth="100%" style={{ backgroundColor: "#141414" }}>
        <Toolbar
          style={{ backgroundColor: "#141414", borderTop: "1px solid #969696", display: 'flex', justifyContent:"space-between" }}
        >
          <Box
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "noWrap",
              justifyContent: "space-evenly",
            }}
          >
            {linksNavigate.map((e, index) => (
              <Button
                key={index}
                onClick={() => router.push(e.param)}
                variant="outlined"
                startIcon={e.icon}
                style={{
                  background:
                    asPath === e.param
                      ? "linear-gradient(129deg, rgba(2,0,36,1) 0%, rgba(90,36,105,1) 41%)"
                      : "transparent",
                  color: "#ffffff",
                  border: "0px",
                  borderRadius: "30px"
                }}
              >
                {e.label}
              </Button>
            ))}
          </Box>
          <Avatar>H</Avatar>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
