import ShowChartIcon from "@mui/icons-material/ShowChart";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PersonIcon from "@mui/icons-material/Person";

export const linksNavigate = [
  {
    param: "/dashboard",
    label: "Dashboards",
    icon: <ShowChartIcon sx={{ color: "#969696" }} />,
  },
  {
    param: "/cadastro",
    label: "Cadastro",
    icon: <TrackChangesIcon sx={{ color: "#969696" }} />,
  },
  {
    param: "/estrutura",
    label: "Estrutura",
    icon: <AutoAwesomeMosaicIcon sx={{ color: "#969696" }} />,
  },
  {
    param: "/fluxocaixa",
    label: "Fluxo de caixa",
    icon: <QueryStatsIcon sx={{ color: "#969696" }} />,
  },
  {
    param: "/perfil",
    label: "Perfil",
    icon: <PersonIcon sx={{ color: "#969696" }} />,
  },
];
