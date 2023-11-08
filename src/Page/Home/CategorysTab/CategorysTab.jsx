import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebCard from './webCard/WebCard';

const CategorysTab = () => {
  const [selectedCategory, setSelectedCategory] = useState('web development');

  return (
    <Tabs>
      <div className='py-12 text-center text-3xl font-bold text-[#005543]'>
        CHOICE YOUR CATEGORY
      </div>
      <TabList>
        <Tab onClick={() => setSelectedCategory('web development')}>WEB DEVELOPMENT</Tab>
        <Tab onClick={() => setSelectedCategory('digital marketing')}>DIGITAL MARKETING</Tab>
        <Tab onClick={() => setSelectedCategory('graphics design')}>GRAPHICS DESIGN</Tab>
      </TabList>

      <TabPanel>
        <WebCard category={selectedCategory} />
      </TabPanel>
      <TabPanel>
        <WebCard category={selectedCategory} />
      </TabPanel>
      <TabPanel>
        <WebCard category={selectedCategory} />
      </TabPanel>
    </Tabs>
  );
};

export default CategorysTab;
