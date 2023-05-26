import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export const fluxoCaixaCard2 = [
  {
    name: "Olá Fulano de tal!",
    description: "Seu saldo disponível total é de (R$):",
    img: "/assets/imagemBoy.png",
    value: 123456789,
    icon: <SavingsOutlinedIcon sx={{ color: "#969696" }} />,
    width: "25%"
  },
  {
    name: "Seu cheque especial",
    description: "Melhor nunca usar, mas se precisar o valor disponível é:",
    img: "/assets/imagemGirl.png",
    value: -123456789,
    icon: <PaidIcon sx={{ color: "#969696" }} />,
    width: "25%"
  },
];

export const fluxoCaixaIcon2 = [
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

export const fluxoCaixa2Data = [
  {
    name: "Fluxo da semana",
    description: "Seu saldo final será de (R$): 123.456.789",
    labels: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
    data: [75698, 60000, 95698, 159630, 64998, 31237, 77188],
    borderColor: '#14248a',
    backgroundColor: '#5365D8'
  },
  {
    name: "Cartão mais utilizado",
    description: "Nubank (52%) | R$: 123.456.789",
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
    data: [1477, 15459, 14778, 16226, 11768, 11385, 2192, 14030, 29068, 40498, 15567, 18735],
    borderColor: '#FFE500',
    backgroundColor: '#EEE879'
  },
  {
    name: "Conta mais utilizada",
    description: "Bradesco (52%) | R$: 123.456.788",
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
    data: [1477, 15459, 14778, 16226, 11768, 11385, 2192, 14030, 29068, 40498, 15567, 18735],
    borderColor: '#DC1A00',
    backgroundColor: '#ed6a5a'
  },
];

export const fluxoCaixa2Data2 = [
  {
    name: "Cartão de crédito",
    description: "Seu total acumulado nos cartões é de (R$): 123.456.789",
    icon: <AttachMoneyIcon sx={{ color: "#5A2469" }}/>,
    value:123456789,
    tags:["Total de entradas","Maior transação","Total de saídas","Menor transação"],
    labels: ['79%','39%'],
    data: [79, 39],
    borderColor: '#14248a',
    backgroundColor: '#5365D8'
  },
  {
    name: "Contas bancárias",
    description: "Sua média de movimentação diária foi de (R$): 123.456.789",
    icon: <CreditCardIcon sx={{ color: "#969696" }}/>,
    value:123456789,
    tags:["Total de entradas","Maior transação","Total de saídas","Menor transação"],
    labels: ['79%','39%'],
    data: [79, 39],
    borderColor: '#FFE500',
    backgroundColor: '#EEE879'
  }
];

export const fluxoCaixaCard3 = [
  {
    name: "Historico de custos",
    description: "Período: de 01 Mai 2020 a 10 Mai 2023",
    value: 123456789,
    icon: <SavingsOutlinedIcon sx={{ color: "#5A2469" }} />,
    width: "22%"
  },
  {
    name: "Historico de entradas",
    description: "Período: de 01 Mai 2020 a 10 Mai 2023",
    value: 123456789,
    icon: <PaidIcon sx={{ color: "#27C434" }} />,
    width: "22%"
  },
  {
    name: "Historico de saídas",
    description: "Período: de 01 Mai 2020 a 10 Mai 2023",
    value: 123456789,
    icon: <SavingsOutlinedIcon sx={{ color: "#DC1A00" }} />,
    width: "22%"
  },
  {
    name: "Historico médio transação",
    description: "Período: de 01 Mai 2020 a 10 Mai 2023",
    value: 123456789,
    icon: <PaidIcon sx={{ color: "#EE9D24" }} />,
    width: "22%"
  },
];