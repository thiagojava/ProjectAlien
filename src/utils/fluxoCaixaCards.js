import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export const fluxoCaixaCard = [
  {
    name: "Lançamentos diversos",
    description: "Seu saldo disponível total é de:",
    img: "/assets/imagemBoy.png",
    value: 123456789,
    icon: <DocumentScannerIcon sx={{ color: "#969696" }} />,
    width: "25%"
  },
  {
    name: "Lançamentos recorrentes",
    description: "Melhor nunca usar, mas se precisar o valor disponível é:",
    img: "/assets/imagemGirl.png",
    value: -123456789,
    icon: <CurrencyExchangeIcon sx={{ color: "#969696" }} />,
    width: "25%"
  },
];

export const fluxoCaixaIcon = [
  {
    name: "Volume total inserido (R$):",
    value: 123456789,
    icon: <AttachMoneyIcon sx={{ color: "#969696" }} />,
  },
  {
    name: "Volume total saída (R$):",
    value: 123456789,
    icon: <RotateLeftIcon sx={{ color: "#969696" }} />,
  },
  {
    name: "Volume entrada (R$):",
    value: 123456789,
    icon: <RotateRightIcon sx={{ color: "#969696" }} />,
  },
  {
    name: "Volume Médio (R$):",
    value: 123456789,
    icon: <ConfirmationNumberIcon sx={{ color: "#969696" }} />,
  },
];

export const fluxoCaixaSelect = [
  {label: "Data?"},
  {label: "Transação?"},
  {label: "Qual conta?"},
  {label: "Origem"},
  {label: "Valide qual tag..."},
  {label: "Qual é a categoria?"},
  {label: "Qual é a referência?"},
  {label: "Valor (R$)?"},
]