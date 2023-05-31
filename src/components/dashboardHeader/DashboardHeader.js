import { Box } from "@mui/material"
import { CardBox } from "../card/Index"

export const DashboardHeader = () => {
    return (
        <>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="33%" title='Bom dia Fulano de tal!' subtitle='O seu saldo total atualizado é:'>

                </CardBox>
                <CardBox  basis="63%" title='Transações' subtitle='Volume total:3.397.994 | Volume entre contas:321.397.994'>

                </CardBox>
            </Box>
        </>
    )
}