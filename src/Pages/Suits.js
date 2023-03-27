import React from "react";
import { Suitlist} from "./Data";
import Layout from "./../components/Layout";
import Bground from '../Image/backgrd.jpg'
import "./Suits_Style.css"

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Suits= () => {
  return (
    <Layout>
          <div className="home" style={{ backgroundImage: `url(${Bground})` }}>
      
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Suitlist.map((suit) => (
          <Card sx={{ maxWidth: "490px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ maxHeight: "300px" }}
                component={"img"}
                src={suit.image}
                alt={suit.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {suit.name}
                </Typography>
                <Typography variant="body2">{suit.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      </div>
    </Layout>
  );
};
export default Suits