import { Head } from "vite-react-ssg";
import { Navbar } from "@/components/Navbar";
import { Trainings as TrainingsSection } from "@/components/Trainings";
import { Footer } from "@/components/Footer";

const Trainings = () => {
    return (
        <>
            <Head>
                <html lang="fr" />
                <title>Formation LLMs & RAG | Cyril LAY – Expert GenAI</title>
                <meta name="description" content="Formation professionnelle LLMs, RAG et agents IA par Cyril LAY. 3 à 6 jours, 50% de pratique. Maîtrisez l'utilisation et le déploiement de LLMs." />
                <link rel="canonical" href="https://www.lays.pro/trainings" />
                <meta property="og:title" content="Formation LLMs & RAG | Cyril LAY – Expert GenAI" />
                <meta property="og:description" content="Formation professionnelle LLMs, RAG et agents IA par Cyril LAY. 3 à 6 jours, 50% de pratique. Maîtrisez l'utilisation et le déploiement de LLMs." />
                <meta property="og:url" content="https://www.lays.pro/trainings" />
                <meta property="og:locale" content="fr_FR" />
              </Head>
            <Navbar />
            <main>
                <TrainingsSection />
            </main>
            <Footer />
        </>
    );
};

export default Trainings;