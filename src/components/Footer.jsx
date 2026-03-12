import { Layout } from 'antd';
const { Footer } = Layout;

export default function SideFooter() {
    return (
        <Footer style={{ textAlign: 'center', background: "transparent", color: "#fff" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    )
}