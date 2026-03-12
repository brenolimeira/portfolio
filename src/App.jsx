import { useState } from 'react';

import { Layout } from 'antd';
import SideHeader from './components/SideHeader';
import SideFooter from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const { Content } = Layout;

function App() {

  return (
    <>
      <Layout style={{
        background: "transparent",
      }}>
        <Layout style={{ background: "transparent" }}>
          <SideHeader />

          <Content style={{ background: "transparent" }}>
            <div id="sobre" className="section">
              <About />
            </div>
            <div id="portfolio" className="section">
              <Portfolio />
            </div>
          </Content>
        </Layout>
          <SideFooter />
      </Layout>
    </>
  )
}

export default App
