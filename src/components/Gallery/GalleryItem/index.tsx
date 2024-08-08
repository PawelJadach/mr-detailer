import Image from "next/image";
import React from "react";

export type GalleryItemProps = {
	src: string;
	alt: string;
	title: string;
	description: string;
	index?: number;
};

export const GalleryItem = ({
	src,
	alt,
	description,
	title,
	index = 1,
}: GalleryItemProps) => {
	return (
		<div
			className="group relative"
			data-aos="zoom-in"
			data-aos-delay={index * 100}
			data-aos-once="true"
		>
			<Image
				src={src}
				width={374}
				height={325}
				alt={alt}
				className="group-hover:brightness-[0.3] transition-all"
			/>
			<div className="hidden group-hover:block absolute bottom-4 left-4 transition-all">
				<div className="w-16 h-1 bg-primary mb-2" />
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};
