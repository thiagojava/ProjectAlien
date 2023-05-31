import { Box } from "@mui/material"
import { CardBox } from "../../../components/card/Index"

export const DashboardFooter = () => {
    return (
        <>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="25%"title='Fluxo de caixa' subtitle='Sua receita média nos últimos 12 períodos é de:123.456.789'>

                </CardBox>
                <CardBox basis="25%"title='Patrimônio' subtitle='Volume total:3.397.994 | Perfomance 38%'>

                </CardBox>
                <CardBox  basis="40%"title='Endividamento' subtitle='O valor total acumulado é de 123.456.789'>

                </CardBox>
            </Box>
        </>
    )
}