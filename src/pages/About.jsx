import { Flex, Typography, Image, Row, Col } from "antd";
import image from "../assets/perfil.jpeg";

const { Paragraph, Title } = Typography;

export default function About() {
    return (
        <Flex justify="center" vertical style={{ width: "100%" }}>
            <Title style={{ color: "#fff", marginBottom: "24px" }}>Sobre mim</Title>
            <Flex justify="center" style={{ width: "100%" }}>
                <Flex
                    wrap="wrap"
                    align="center"
                    justify="center"
                    style={{
                        maxWidth: "1200px",
                        width: "100%",
                        gap: "40px"  
                    }}
                >
                    <Image
                        src={image}
                        width={200}
                        alt="perfil"
                        style={{ borderRadius: "50%" }}
                    />

                    <Flex vertical style={{ maxWidth: "700px" }}>
                        <Paragraph style={{ color: "#fff" }}>
                            Sou Breno Silvério, desenvolvedor fullstack com experiência no
                            desenvolvimento de aplicações web utilizando React, JavaScript,
                            Python e Django. Tenho interesse em criar soluções eficientes,
                            escaláveis e bem estruturadas.
                        </Paragraph>

                        <Paragraph style={{ color: "#fff" }}>
                            Ao longo da minha trajetória, desenvolvi projetos utilizando
                            arquitetura baseada em API REST, autenticação de usuários e banco
                            de dados como PostgreSQL.
                        </Paragraph>

                        <Paragraph style={{ color: "#fff" }}>
                            Atualmente, busco oportunidades para continuar evoluindo como
                            desenvolvedor e contribuir na criação de aplicações modernas,
                            performáticas e que gerem valor para usuários e empresas.
                        </Paragraph>
                    </Flex>

                </Flex>

            </Flex>
        </Flex>
    );
}