import { Box, Card, Typography } from "@mui/material"
import Image from "next/image"

export const ImageCard = (props) => {
    const {index, name, description, icon, value, img, width} = props
    return (
        <Card
        key={index}
        sx={{ width: {width}, height: "200px" }}
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.8911939775910365) 0%, rgba(20,20,20,1) 50%)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <Box marginBottom="10px" padding="10px">
          <Typography color="#ffffff" style={{ fontSize: "20px" }}>
            {name}
          </Typography>
          <Typography style={{ fontSize: "14px", color: "#969696" }}>
            {description}
          </Typography>
          <Box display="flex" flexDirection="row" marginTop="15px" alignItems="center">
            {icon}
            <Typography style={{ fontSize: "18px", color: (Number(value) >= 0 ? "#4BB543" : "#FF0000"), marginLeft: "10px" }}>
              {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Typography>
          </Box>
        </Box>
        {img?<Image src={img} alt="text" width={100} height={200} style={{padding:"10px"}}/>:null}
      </Card>
    )
}