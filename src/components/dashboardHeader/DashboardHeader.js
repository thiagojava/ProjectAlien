import { Box } from "@mui/material"
import { CardBox } from "../card/Index"

export const DashboardHeader = () => {
    return (
        <>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="33%">

                </CardBox>
                <CardBox  basis="63%">

                </CardBox>
            </Box>
        </>
    )
}