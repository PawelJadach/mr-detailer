import React from "react";

export type PricingItemProps = {
	title: string;
	price: string;
	description: string;
	index?: number;
};

export const PricingItem = ({
	title,
	price,
	description,
	index = 1,
}: PricingItemProps) => {
	return (
		<div
			className="w-full md:w-[45%]"
			data-aos="zoom-in"
			data-aos-delay={index * 100}
			data-aos-once="true"
		>
			<div className="flex justify-between border-b border-primary pb-2">
				<h4>{title}</h4> <h4>{price}</h4>
			</div>
			<p className="max-w-sm mt-4">{description}</p>
		</div>
	);
};
