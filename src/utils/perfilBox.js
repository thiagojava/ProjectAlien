import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

export const perfilBox = [
  {
    name: "Acesso n:",
    value: "123.456.789",
    icon: <ConfirmationNumberIcon fontSize="large" sx={{ color: "#696969" }} />,
  },
  {
    name: "Tempo total (dias):",
    value: "123.456.789",
    icon: <HourglassBottomIcon fontSize="large" sx={{ color: "#696969" }} />,
  },
  {
    name: "Média diária (min):",
    value: "123.456.789",
    icon: <AvTimerIcon fontSize="large" sx={{ color: "#696969" }} />,
  },
  {
    name: "Cadastro n:",
    value: "123.456.789",
    icon: <AppRegistrationIcon fontSize="large" sx={{ color: "#696969" }} />,
  },
];

export const perfilTabs = [
  { value: "Renda", label: "Renda" },
  { value: "Investimentos", label: "Investimentos" },
  { value: "Despesas", label: "Despesas" },
  { value: "Metas", label: "Metas" },
];

export const perfilInputs = [
    {name: 'Rentabilidade (%)'},
    {name: 'Qual rendimento espera de seus investimentos?'},
    {name: 'Quanto gostaria  de gastar todo com você?'},
    {name: 'Qual o patrimônio de seus sonhos?'},
    {name: 'Quanto gostaria de receber mensalmente de renda?'},
]