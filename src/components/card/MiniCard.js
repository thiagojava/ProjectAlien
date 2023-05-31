import { Box, Typography } from "@mui/material"

export const MiniCard = (props) => {
    const {icon, title, basis} = props
    return (
        <Box height="100%" display="flex" alignItems="center" flexBasis={basis?basis:null}>
            {icon}
            <Box>
                <Typography style={{ fontSize: "14px", color: "#969696" }}>
                  {title}
                </Typography>
                <Typography color="#ffffff" style={{ fontSize: "20px" }}>
                  123.456.789,00
                </Typography>
            </Box>
        </Box>
    )
}