import { Navbar } from "@/components/Navbar";
import { Trainings as TrainingsSection } from "@/components/Trainings";
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