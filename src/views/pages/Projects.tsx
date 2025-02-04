import { IMAGES } from "@assets"
import { Project, Reveal } from "@components"

const Projects = () => {
    return (
        <div className="prose mx-auto my-8 w-full text-center md:prose-lg lg:prose-xl lg:min-w-[75%]">
            <h1>Featured Projects</h1>
            <section className="flex flex-col items-center gap-20 overflow-x-hidden px-4 lg:px-28">
                <Reveal axis="x" delay={0.5}>
                    <Project
                        img={IMAGES.CleanLines}
                        links={[
                            {
                                url: "https://cleanlinescarpentry.com",
                                name: "Website",
                            },
                        ]}
                        tools={["HTML", "CSS", "JavaScript", "JQuery"]}
                        title="Clean Lines Carpentry"
                    >
                        <p>
                            Step into Clean Lines Carpentry's online exhibit,
                            personally crafted by me. Explore their exceptional
                            craftsmanship and services, spotlighting their
                            unique position in the world of carpentry.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5} changeDirection>
                    <Project
                        img={IMAGES.TSNS}
                        links={[
                            {
                                url: "https://www.tsns.ca",
                                name: "Website",
                            },
                        ]}
                        tools={["Google Admin Console", "Custom HTML Snippets"]}
                        title="Turkish Society of Nova Scotia"
                        opposite
                    >
                        <p>
                            An interactive platform I've crafted for the Turkish
                            Society of Nova Scotia using Google Workspace Admin
                            Tools. This website provides a collaborative space
                            where members can seamlessly handle and edit the
                            content of the website.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5}>
                    <Project
                        img={IMAGES.AtaPainting}
                        links={[
                            {
                                url: "https://bacecarpentry.ca",
                                name: "Website",
                            },
                            {
                                url: "https://github.com/kuru-emre/atapainting",
                                name: "Github",
                            },
                        ]}
                        tools={[
                            "HTML/PHP",
                            "CSS/Bootstrap",
                            "JavaScript",
                            "JQuery",
                        ]}
                        title="Ata Painting"
                    >
                        <p>
                            Welcome to ATA Painting's showcase—where art meets
                            expertise. Explore their portfolio and services,
                            curated within the website I crafted, revealing the
                            mastery that defines their distinct place in the
                            world of painting.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5} changeDirection>
                    <Project
                        img={IMAGES.Bace}
                        links={[
                            {
                                url: "https://bacecarpentry.ca",
                                name: "Website",
                            },
                        ]}
                        tools={["HTML", "CSS", "JavaScript", "JQuery"]}
                        title="Bace Carpentry"
                        opposite
                    >
                        <p>
                            Introducing the website developed for Bace Design
                            and Carpentry Services Limited - a showcase of their
                            exquisite craftsmanship and design expertise.
                            Explore their portfolio, discover their services,
                            and experience the artistry that sets them apart in
                            the carpentry industry.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5}>
                    <Project
                        img={IMAGES.ClusterJS}
                        links={[
                            {
                                url: "https://kuru-emre.github.io/Cluster_JS",
                                name: "Website",
                            },
                            {
                                url: "https://github.com/kuru-emre/Cluster_JS",
                                name: "Github",
                            },
                        ]}
                        tools={["Typescript", "React", "Material UI", "Redux"]}
                        title="Cluster_JS"
                    >
                        <p>
                            This project is created for visualizing clusters
                            within data. It is versatile, capable of visualizing
                            clusters with color-coding in datasets and
                            extracting common palettes from images.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5} changeDirection>
                    <Project
                        img={IMAGES.NSCA}
                        links={[
                            {
                                url: "https://test.cricketnovascotia.ca",
                                name: "Website",
                            },
                            {
                                url: "https://github.com/kuru-emre/NSCA",
                                name: "Github",
                            },
                        ]}
                        tools={["PHP", "CodeIgniter 4", "Bootstrap", "MySQL"]}
                        title="Nova Scotia Cricket Association"
                        opposite
                    >
                        <p>
                            This project has been meticulously reimagined and
                            migrated from vanilla PHP to MVC based architecture
                            using CodeIgniter 4. It boasts a comprehensive admin
                            panel with all the features necessary to manage and
                            edit application data and user profiles.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5}>
                    <Project
                        img={IMAGES.CourseHive}
                        links={[
                            {
                                url: "https://coursehive.vercel.app/",
                                name: "Website",
                            },
                            {
                                url: "https://github.com/kuru-emre/CourseHive",
                                name: "Github",
                            },
                        ]}
                        tools={[
                            "Node",
                            "React",
                            "TypeScript",
                            "Express",
                            "MongoDB",
                        ]}
                        title="CourseHive"
                    >
                        <p>
                            A full-stack Node.js application for management and
                            creation of online classes, with authentication for
                            teachers and students.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5} changeDirection>
                    <Project
                        img={IMAGES.EMR}
                        links={[
                            {
                                url: "https://emrlogistic.com/",
                                name: "Website",
                            },
                            {
                                url: "https://github.com/kuru-emre/EMR_Logistics",
                                name: "Github",
                            },
                        ]}
                        tools={["PHP", "Laravel", "Bootstrap"]}
                        title="EMR Logistic"
                        opposite
                    >
                        <p>
                            A website designed and implemented for EMR Logistic
                            company. Its simple yet elegant design easily guides
                            users to major points and features a full gallery
                            with the ability to send direct messages to the
                            company.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5}>
                    <Project
                        img={IMAGES.Efes}
                        links={[
                            {
                                url: "https://efesturkish.com/",
                                name: "Website",
                            },
                            {
                                url: "https://github.com/kuru-emre/Efes_Turkish",
                                name: "Github",
                            },
                        ]}
                        tools={["PHP", "Wordpress"]}
                        title="Efes Turkish Cuisine"
                    >
                        <p>
                            A WordPress website implemented to showcase all
                            available menu items, as well as to provide the
                            capability for customers to book and order food
                            online.
                        </p>
                    </Project>
                </Reveal>
                <Reveal axis="x" delay={0.5} changeDirection>
                    <Project
                        img={IMAGES.Dashboard}
                        links={[
                            {
                                url: "https://react-a0b29.web.app/",
                                name: "Website",
                            },
                            {
                                url: "https://github.com/kuru-emre/Student_Dashboard",
                                name: "Github",
                            },
                        ]}
                        tools={[
                            "JavaScript",
                            "React",
                            "Firebase",
                            "Material UI",
                        ]}
                        title="Student Dashboard"
                        opposite
                    >
                        <p>
                            This project was crafted with students in mind,
                            offering a dynamic platform for them to track
                            assignments and control their class enrollments.
                            Firebase, and its secure authentication
                            capabilities, were harnessed to enchantingly usher
                            students into this portal.
                        </p>
                    </Project>
                </Reveal>
            </section>
            <hr />
        </div>
    )
}

export default Projects
