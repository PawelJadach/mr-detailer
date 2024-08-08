import React from "react";
import { GalleryItem, GalleryItemProps } from "./GalleryItem";

const galleryItems: GalleryItemProps[] = [
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-1.png",
		title: "Audi RS7",
	},
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-2.png",
		title: "Audi RS7",
	},
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-3.png",
		title: "Audi RS7",
	},
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-4.png",
		title: "Audi RS7",
	},
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-5.png",
		title: "Audi RS7",
	},
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-6.png",
		title: "Audi RS7",
	},
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-7.png",
		title: "Audi RS7",
	},
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-8.png",
		title: "Audi RS7",
	},
	{
		alt: "Samochód volvo",
		description: "aplikacja folii na cały lakier",
		src: "/gallery-9.png",
		title: "Audi RS7",
	},
];

export const Gallery = () => {
	return (
		<div
			className="items-center justify-center container gap-5 md:gap-16 sectionMargin"
			id="gallery"
		>
			<div
				className="flex flex-col items-center text-center"
				data-aos="fade-left"
				data-aos-once="true"
			>
				<h4 className="uppercase text-primary font-medium text-base">
					zobacz ostatnie realizacje
				</h4>
				<h2>Galeria</h2>
				<div className="w-16 h-1 bg-primary mt-4" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
				{galleryItems.map((item, index) => (
					<GalleryItem key={index} {...item} index={index} />
				))}
			</div>
		</div>
	);
};
