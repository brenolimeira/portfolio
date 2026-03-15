import { useState } from 'react';

import { Layout } from 'antd';
import SideHeader from './components/SideHeader';
import SideFooter from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Social from './pages/Social';

const { Content } = Layout;

function App() {

  return (
    <Layout style={{
      background: "transparent",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <SideHeader />

      <Content style={{ background: "transparent", flex: 1 }}>
        <div id="sobre" className="section">
          <About />
        </div>
        <div id="portfolio" className="section">
          <Portfolio />
        </div>
        {/* <div id="social" className="section">
              <Social />
            </div> */}
      </Content>
      <SideFooter />
    </Layout>
  )
}

export default App
