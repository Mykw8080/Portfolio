"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="styles.sectionSubText text-center" id="skills">
					The tools, technologies, and languages I work with
				</p>
				<h2 className="sectionHeadText text-center">Tech Stack & Skills</h2>
			</motion.div>
			<div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						{/* <BallCanvas icon={technology.icon} /> */}
						<Image
							src={technology.icon}
							width={500}
							height={500}
							alt="Desktop PC"
							className="rounded-full object-cover"
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "tech");
