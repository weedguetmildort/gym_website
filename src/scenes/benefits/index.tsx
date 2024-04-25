import { SlctdPage } from "@/shared/types";
import { motion } from "framer-motion";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";


type Props = {
    setSelectedPage: ( value: SlctdPage) => void;
}

const Benefits = ( { setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SlctdPage.Benefits)}
        >
            
        </motion.div>
    </section>
  )
}

export default Benefits