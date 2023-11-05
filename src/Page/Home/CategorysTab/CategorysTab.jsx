import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebCard from './webCard/WebCard';

const CategorysTab = () => {
    return (
        <Tabs>
        <TabList>
          <Tab>WEB DEVELOPMENT</Tab>
          <Tab>DIGITAL MARKETING</Tab>
          <Tab>GRAPHICS DESIGN</Tab>
        </TabList>
    
        <TabPanel>
         <WebCard></WebCard>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    )
};

export default CategorysTab;