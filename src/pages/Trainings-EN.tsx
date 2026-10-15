import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { TrainingsEN as TrainingsSection } from "@/components/Trainings-EN";
import { Footer } from "@/components/Footer";

const Trainings = () => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>LLMs & RAG Training | Cyril LAY – GenAI Expert</title>
                <meta name="description" content="Professional LLMs, RAG and AI agents training by Cyril LAY. 3 to 6 days, 50% hands-on. Master LLM usage and deployment in production." />
                <link rel="canonical" href="https://www.lays.pro/en/trainings" />
            </Helmet>
            <Navbar />
            <main>
                <TrainingsSection />
            </main>
            <Footer />
        </>
    );
};

export default Trainings;