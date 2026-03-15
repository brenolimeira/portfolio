import { Card, Flex, Typography, Row, Col } from "antd";
import perfilLinkedin from "../assets/perfil-linkedin.PNG"
import perfilGithub from "../assets/perfil-github.PNG"

import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function Social() {
    return (
        <Flex justify="center" vertical style={{ width: "100%", gap: "40px" }}>
            <Title style={{ color: "#fff" }}>Redes Sociais</Title>
            <Flex justify="center" gap="80px" wrap="wrap">
                <Flex justify="center">
                    <Card
                        className="project-card"
                        hoverable
                        onClick={() => window.open("https://www.linkedin.com/in/breno-silverio07/", "_blank")}
                        style={{ maxWidth: 800, background: "#262626", borderRadius: "12px", overflow: "hidden" }}
                        cover={
                            <img
                                draggable={false}
                                alt="linkedin"
                                src={perfilLinkedin}
                                style={{
                                    width: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        }
                        title="LinkedIn"
                    />
                </Flex>
                <Flex justify="center">
                    <Card
                        className="project-card"
                        hoverable
                        onClick={() => window.open("https://github.com/brenolimeira", "_blank")}
                        style={{ maxWidth: 800, background: "#262626", borderRadius: "12px", overflow: "hidden" }}
                        cover={
                            <img
                                draggable={false}
                                alt="github"
                                src={perfilGithub}
                                style={{ 
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        }
                        title="Github"
                    />
                </Flex>

                {/* <div className="social-icons">
                    <a href="https://www.linkedin.com/in/breno-silverio07/" target="_blank">
                        <LinkedinOutlined />
                    </a>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/brenolimeira" target="_blank">
                        <GithubOutlined />
                    </a>
                </div> */}
            </Flex>
        </Flex>
    )
}