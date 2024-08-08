import React from "react";
import { PricingItem, PricingItemProps } from "./PricingItem";

const pricingItems: PricingItemProps[] = [
	{
		description:
			"Polerowanie lamp w aucie obejmuje szlifowanie na mokro roznymi gradacjami papieru. Polerowanie lamp maszynowo, Aplikacje powłoki ceramicznej. Cena za jedną lampę",
		price: "od 350,-",
		title: "Przyciemnianie szyb",
	},
	{
		description:
			"Polerowanie lamp w aucie obejmuje szlifowanie na mokro roznymi gradacjami papieru. Polerowanie lamp maszynowo, Aplikacje powłoki ceramicznej. Cena za jedną lampę",
		price: "od 350,-",
		title: "Przyciemnianie szyb",
	},
	{
		description:
			"Polerowanie lamp w aucie obejmuje szlifowanie na mokro roznymi gradacjami papieru. Polerowanie lamp maszynowo, Aplikacje powłoki ceramicznej. Cena za jedną lampę",
		price: "od 350,-",
		title: "Przyciemnianie szyb",
	},
	{
		description:
			"Polerowanie lamp w aucie obejmuje szlifowanie na mokro roznymi gradacjami papieru. Polerowanie lamp maszynowo, Aplikacje powłoki ceramicznej. Cena za jedną lampę",
		price: "od 350,-",
		title: "Przyciemnianie szyb",
	},
];

export const Pricing = () => {
	return (
		<div
			className="items-center justify-center container gap-5 md:gap-16 sectionMargin"
			id="price"
		>
			<div
				className="flex flex-col items-start text-left"
				data-aos="fade-left"
				data-aos-once="true"
			>
				<h2>Cennik</h2>
				<div className="w-16 h-1 bg-primary mt-4" />
			</div>
			<div className="flex justify-between flex-col md:flex-row gap-[50px] mt-16 flex-wrap">
				{pricingItems.map((item, index) => (
					<PricingItem key={index} {...item} index={index} />
				))}
			</div>
		</div>
	);
};
