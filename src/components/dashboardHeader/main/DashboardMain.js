import { Box } from "@mui/material"
import { CardBox } from "../../../components/card/Index"

export const DashboardMain = () => {
    return (
        <>
            <Box display="flex" width="90%" marginTop="10px" justifyContent="space-between">
                <CardBox basis="40%">

                </CardBox>
                <CardBox  basis="25%">

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