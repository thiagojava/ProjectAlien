import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PaymentsIcon from "@mui/icons-material/Payments";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import PixIcon from "@mui/icons-material/Pix";
import PieChartIcon from "@mui/icons-material/PieChart";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export const dashboardMiniCard = [
  {
    icon: <CreditCardIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Cartão de crédito",
  },
  {
    icon: <CalendarViewWeekIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Boleto | DDA",
  },
  {
    icon: <RequestQuoteIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Cheque",
  },
  {
    icon: <LocalAtmIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Débito",
  },
  {
    icon: <PaymentsIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Dinheiro",
  },
  {
    icon: <PixIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Pix",
  },
  {
    icon: <CurrencyExchangeIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Transferência",
  },
];

export const dashboardMiniCardMain = [
  {
    icon: <PieChartIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Valor em (R$)",
  },
  {
    icon: <RedoIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Entradas (R$)",
  },
  {
    icon: <UndoIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Saídas (R$)",
  },
];

export const dashboardMiniCardBarLabel = [
  {
    labels: [
      "Jan - 2023",
      "Fev - 2023",
      "Mar - 2023",
      "Abr - 2023",
      "Mai - 2023",
      "Jun - 2023",
      "Jul - 2023",
      "Ago - 2023",
      "Set - 2023",
      "Out - 2023",
      "Nov - 2023",
      "Dez - 2023",
    ],
  },
  { values: [95, 23, 2876, 55, 1504, -25, 37, -81, -7, -28, -126] },
  { color: "#7DDC52" },
];

export const dashboardMiniData = [
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#eb2e2e" }} />,
    title: "RF | Nac. & int.",
  },
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#EB922E" }} />,
    title: "CDB`s & Títulos públicos",
  },
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#EBEB2E" }} />,
    title: "Fundos (FIC, FIM, FIDC, FI)",
  },
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#4EC119" }} />,
    title: "Ouro",
  },
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#DB2FEB" }} />,
    title: "Jóias & relógios",
  },
];

export const dashboardMiniData2 = [
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#eb2e2e" }} />,
    title: "Societário", secundaryText: "Total liquidado (R$)"
  },
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#EB922E" }} />,
    title: "Bancos & fintechs",secundaryText: "Total acumulado (R$)"
  },
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#EBEB2E" }} />,
    title: "Factory & friends",secundaryText: "Total acumulado (R$)"
  },
  {
    icon: <DataSaverOffIcon fontSize="large" sx={{ color: "#4EC119" }} />,
    title: "Outras dívidas",secundaryText: "Total acumulado (R$)"
  }
];

export const dashboardMiniIcon = [
  {
    icon: <SsidChartIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Total de juros & multas", color: "#eb2e2e"
  },
  {
    icon: <SettingsIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Alavancagem de capital", color: "#EB922E"
  },
  {
    icon: <AssignmentIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Despesas com investimentos", color: "#EBEB2E"
  },
  {
    icon: <SignalCellularAltIcon fontSize="large" sx={{ color: "#969696" }} />,
    title: "Outras dívidas", color: "#4EC119"
  }
];