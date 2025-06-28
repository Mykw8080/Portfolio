"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import MainEarth from "./canvas/MainEarth";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF] " />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div className="relative z-50">
					<h1 className="heroHeadText text-white">
						Hi, I&apos;m <span className="text-[#915EFF] ">Mohid Warsi</span>
					</h1>
					<p className="heroSubText">
						A Dedicated Full-Stack Software Engineer
					</p>
				</div>
			</div>
			{/* <ComputersCanvas /> */}
			{/* Centered Image */}
			{/* <div className="w-full flex justify-center items-center pt-[40vh] md:pt-52 ">
				<Image
					src="/desktop_pc/desktop.png"
					width={1500}
					height={1500}
					alt="Desktop PC"
					className="rounded-full object-cover"
				/>
			</div> */}
			{/* Replace Image with Spline 3D */}
			< MainEarth />

			<div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
