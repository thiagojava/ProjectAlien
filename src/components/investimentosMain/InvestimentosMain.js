import { Box } from "@mui/material"
import { CardBox } from "../card/Index"

export const InvestimentMain = () => {
    return (
        <>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="48%" title='Investida' subtitle='O valor é de 123% em relação ao período anterior'>

                </CardBox>
                <CardBox  basis="48%" title='Start-up' subtitle='O valor é de 123% em relação ao período anterior'>

                </CardBox>
            </Box>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="48%" title='Custos investida' subtitle='O valor 123% em relação ao período anterior'>

                </CardBox>
                <CardBox  basis="48%" title='Custos start-up' subtitle='O valor é de 123% em relação ao período anterior'>

                </CardBox>
            </Box>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="48%" title='Performance carteira' subtitle='Último fechamento:12/05/23 | Cotação total (R$):123.456.789 | Variação:+123.456,78%'>

                </CardBox>
                <Box display="flex" width="100%" flexWrap="wrap" flexBasis="48%" justifyContent="space-between">
                    <CardBox  basis="48%">

                    </CardBox>
                    <CardBox  basis="48%">

                    </CardBox>
                    <CardBox  basis="48%">

                    </CardBox>
                    <CardBox  basis="48%" title='' subtitle=''>

                    </CardBox>
                </Box>
                
            </Box>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="32%" title='Renda variável' subtitle='Último fechamento>12/05/23 | Cotação atual (R$):123.456.789,00 | +123.456,78%'>

                </CardBox>
                <CardBox basis="32%" title='Renda variável' subtitle='Último fechamento>12/05/23 | Cotação atual (R$):123.456.789,00 | +123.456,78%'>

                </CardBox>
                <CardBox basis="32%" title='Renda variável' subtitle='Último fechamento>12/05/23 | Cotação atual (R$):123.456.789,00 | +123.456,78%'>

                </CardBox>
            </Box>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="23%" title='Day trading' subtitle='Nubank (52%) | R$:123.456.789'>

                </CardBox>
                <CardBox basis="23%" title='Swing trading' subtitle='Nubank (52%) | R$:123.456.789'>

                </CardBox>
                <CardBox basis="23%" title='Estruturadas' subtitle='Nubank (52%) | R$:123.456.789'>

                </CardBox>
                <CardBox basis="23%" title='Exchange' subtitle='Nubank (52%) | R$:123.456.789'>

                </CardBox>
            </Box>
        </>
    )
}