import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
const { Footer } = Layout;

export default function SideFooter() {
    return (
        <Footer style={{ textAlign: 'center', background: "transparent", color: "#fff" }}>
            © {new Date().getFullYear()} Breno Silvério. Todos os direitos reservados.
            <div className="social-icons">
                    <a href="https://www.linkedin.com/in/breno-silverio07/" target="_blank">
                        <LinkedinOutlined />
                    </a>
                    <a href="https://github.com/brenolimeira" target="_blank" style={{ marginLeft: "12px" }}>
                        <GithubOutlined />
                    </a>
                </div>
        </Footer>
    )
}