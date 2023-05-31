import { Box } from "@mui/material"
import { CardBox } from "../../../components/card/Index"

export const DashboardMain = () => {
    return (
        <>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="40%" title='Últimos 7 dias' subtitle='Seu ticket médio foi de R$123.456.789'>

                </CardBox>
                <CardBox  basis="25%" title='Próximas transações' subtitle='Seu saldo final será de:123.456.789'>

                </CardBox>
                <Box display="flex" flexWrap="wrap" basis="25%">
                    <CardBox  basis="50%">

                    </CardBox>
                    <CardBox  basis="50%">

                    </CardBox>
                    <CardBox  basis="50%">

                    </CardBox>
                    <CardBox  basis="50%">

                    </CardBox>
                </Box>
            </Box>
        </>
    )
}