"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { useEffect, useState } from "react";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	images: string[]; // 👈 change here
	source_code_link?: string;
	video?: string;
	deploy_link: string;
	platform: ("Angular" | "Blender" | "Next" | "Tailwind" | "Web" | "Python")[];
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	images,
	source_code_link,
	deploy_link,
	video,
	platform,
}: ProjectCardProps) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsMobile(window.innerWidth < 768);
		}
	}, []);

	useEffect(() => {
		if (!video && images.length > 1) {
			const interval = setInterval(() => {
				setDirection(1);
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
			}, 4000);
			return () => clearInterval(interval);
		}
	}, [images, video]);

	const content = (
		<Tilt
			options={{ max: 45, scale: 1, speed: 450 }}
			className="bg-tertiary p-5 rounded-2xl sm:w-[550px] w-full"
		>
			<a href={deploy_link} target="_blank" rel="noopener noreferrer">
				<div className="relative w-full h-[180px] xs:h-[275px] overflow-hidden rounded-2xl">
					{video ? (
						<video
							src={video}
							autoPlay
							muted
							loop
							playsInline
							className="w-full h-full sm:object-cover object-fill rounded-2xl"
						/>
					) : (
						<AnimatePresence initial={false} custom={direction} mode="wait">
							<motion.div
								key={images[currentImageIndex]}
								custom={direction}
								initial={{ x: 300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -300, opacity: 0 }}
								transition={{
									x: { type: "spring", stiffness: 400, damping: 30 },
									opacity: { duration: 0.15 },
								}}
								className="absolute inset-0 w-full h-full"
							>
								<Image
									src={images[currentImageIndex]}
									alt={`project_image_${currentImageIndex}`}
									fill
									className="sm:object-cover object-fill rounded-2xl"
								/>
							</motion.div>
						</AnimatePresence>
					)}

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover z-10 gap-2">
						{platform.map((tech, i) => (
							<div
								key={i}
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
							>
								<Image
									src={
										tech === "Angular"
											? "/tech/angular.svg"
											: tech === "Blender"
												? "/tech/blender.svg"
												: tech === "Next"
													? "/tech/nextjs.svg"
													: tech === "Python"
														? "/tech/python.svg"
														: tech === "Tailwind"
															? "/tech/tailwind.webp"
															: "/web.webp"
									}
									width={24}
									height={24}
									alt={tech}
									className="object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</a>

			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
						• {tag.name}
					</p>
				))}
			</div>
		</Tilt>
	);

	return isMobile ? (
		<div className="w-full sm:w-[550px] min-h-[400px]">{content}</div>
	) : (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 0.75)}
			className="w-full sm:w-[550px] min-h-[400px]"
		>
			{content}
		</motion.div>
	);
};

const Works = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsMobile(window.innerWidth < 768);
		}
	}, []);

	const headerContent = (
		<>
			<p className="sectionSubText">My work</p>
			<h2 className="sectionHeadText">Projects.</h2>
		</>
	);

	const descriptionContent = (
		<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
			Following projects showcases my skills and experience through real-world
			examples of my work. Each project is briefly described with links to code
			repositories and live demos in it. It reflects my ability to solve complex
			problems, work with different technologies, and manage projects
			effectively.
		</p>
	);

	return (
		<>
			{isMobile ? (
				<div>{headerContent}</div>
			) : (
				<motion.div variants={textVariant()}>{headerContent}</motion.div>
			)}

			<div className="w-full flex" id="projects">
				{isMobile ? (
					descriptionContent
				) : (
					<motion.p
						variants={fadeIn("", "", 0.1, 1)}
						className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
					>
						{descriptionContent.props.children}
					</motion.p>
				)}
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};


export default SectionWrapper(Works, "");
