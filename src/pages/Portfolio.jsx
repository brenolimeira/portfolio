import { Flex, Typography, Image, Card } from "antd";
import hotel from "../assets/login-hotel.PNG";
import open3 from "../assets/open3.PNG";

const { Title } = Typography;


export default function Portfolio() {
    return (
        <Flex justify="center" vertical style={{ width: "100%", gap: "40px" }}>
            <Title style={{ color: "#fff" }}>Portfolio Pessoal</Title>
            <Flex justify="center" gap="80px" wrap="wrap">
                <Flex justify="center">
                    <Card
                        className="project-card"
                        hoverable
                        onClick={() => window.open("https://gerenciar-hotel-production.up.railway.app/", "_blank")}
                        style={{ maxWidth:800, background: "#262626", borderRadius: "12px" }}
                        cover={
                            <img
                                draggable={false}
                                alt="hotel"
                                src={hotel}
                            />
                        }
                        title="Sistema de Gerenciamento de Hotel"
                    >
                        {/* <Meta title="Sistema de Gerenciamento de Hotel" description="Plataforma web para gestão de reservas e hóspedes, com 
                            autenticação de usuários e integração com API REST. Desenvolvida com React, Django e PostgreSQL."
                        /> */}
                        Plataforma web para gestão de reservas e hóspedes, com 
                        autenticação de usuários e integração com API REST. Desenvolvida com React, Django e PostgreSQL.
                    </Card>
                </Flex>
                <Flex justify="center">
                    <Card
                        className="project-card"
                        hoverable
                        onClick={() => window.open("https://brenolimeira.github.io/open3/", "_blank")}
                        style={{ maxWidth: 800, background: "#262626", borderRadius: "12px" }}
                        cover={
                            <img
                                draggable={false}
                                alt="open3"
                                src={open3}
                            />
                        }
                        title="Open3 – Plataforma Institucional"
                    >
                        {/* <Meta title="Open3 – Plataforma Institucional" description="Landing page para divulgação de serviços de suporte técnico, 
                            com design responsivo e navegação otimizada. Desenvolvida com HTML5, CSS3, JavaScript e React."
                        /> */}
                        Landing page para divulgação de serviços de suporte técnico, com design responsivo e navegação otimizada. 
                        Desenvolvida com HTML5, CSS3, JavaScript e React.
                    </Card>
                </Flex>
            </Flex>
            <Flex justify="center" gap="80px">

            </Flex>
        </Flex>
    )
}