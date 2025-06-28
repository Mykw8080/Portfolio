"use client";
import { slideIn } from "@/app/utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h3 className="heroHeadText">Contact.</h3>

				<div className="mt-12 flex flex-col gap-6 text-white text-[1.5vh] sm:text-xl">
					<div className="flex items-center gap-4">
						<FaEnvelope className="text-pink-500 text-2xl" />
						<a
							href="mailto:mohammedmohid8080@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline hover:text-pink-400 transition-all"
						>
							mohammedmohid8080@gmail.com
						</a>
					</div>

					<div className="flex items-center gap-4">
						<FaPhone className="text-green-500 text-2xl" />
						<p
							className="hover:text-green-400 transition-all"
						>
							+92 313 2309063
						</p>
					</div>

					<div className="flex items-center gap-4">
						<FaLinkedin className="text-blue-500 text-2xl" />
						<a
							href="https://www.linkedin.com/in/mohammed-mohid/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline hover:text-blue-400 transition-all"
						>
							LinkedIn Profile
						</a>
					</div>

					<div className="flex items-center gap-4">
						<FaGithub className="text-gray-300 text-2xl" />
						<a
							href="https://github.com/Mykw8080"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline hover:text-gray-400 transition-all"
						>
							GitHub Profile
						</a>
					</div>
				</div>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
