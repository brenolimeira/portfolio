import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default function SideHeader() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent'
            }}
        >
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['0']}
                items={[
                    {
                        key: "sobre",
                        label: "Sobre",
                        onClick: () => scrollToSection("sobre")
                    },
                    {
                        key: "portfolio",
                        label: "Portfolio",
                        onClick: () => scrollToSection("portfolio")
                    },
                    // {
                    //     key: "social",
                    //     label: "Redes Sociais",
                    //     onClick: () => scrollToSection("social")
                    // }
                ]}
                style={{ flex: 1, minWidth: 0, alignItems: 'center', justifyContent: 'center', background: 'transparent' }}
            />
        </Header>
    )
}