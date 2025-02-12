import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useState } from "react";
import Cover from "../Menu/Cover/Cover";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div>
            <Cover></Cover>

    
  <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Salads</Tab>
      <Tab>pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Desert</Tab>
      <Tab>Drinks</Tab>
    </TabList>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
  </Tabs>

        </div>
    );
};

export default Order;