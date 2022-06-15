import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import "./TabProduto.css";
import ListaProduto from "../listaProduto/ListaProduto";

function TabProduto() {
  const [value, setValue] = useState("1");

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      
      <Box marginTop={-15}>
     
      <TabContext  value={value}>
        <AppBar className="faixa" position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Destaques" value="1" />
          </Tabs>
        </AppBar>

        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProduto />
          </Box>
        </TabPanel>
      </TabContext>
      </Box>
    </>
  );
}

export default TabProduto;
