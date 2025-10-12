import { Navbar } from "@/components/Navbar";
import { TrainingsEN as TrainingsSection } from "@/components/Trainings-EN";
import { Footer } from "@/components/Footer";

const Trainings = () => {
    return (
        <>
            <Navbar />
            <main>
                <TrainingsSection />
            </main>
            <Footer />
        </>
    );
};

export default Trainings;