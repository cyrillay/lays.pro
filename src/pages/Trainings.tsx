import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Trainings as TrainingsSection } from "@/components/Trainings";
import { Footer } from "@/components/Footer";

const Trainings = () => {
    return (
        <>
            <Helmet>
                <html lang="fr" />
                <title>Formation LLMs & RAG | Cyril LAY – Expert GenAI</title>
                <meta name="description" content="Formation professionnelle LLMs, RAG et agents IA par Cyril LAY. 3 à 6 jours, 50% de pratique. Maîtrisez l'utilisation et le déploiement de LLMs." />
                <link rel="canonical" href="https://www.lays.pro/trainings" />
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