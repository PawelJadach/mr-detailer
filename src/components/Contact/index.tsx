import Image from "next/image";
import React from "react";
import { EmailIcon, LocaliztaionIcon, PhoneIcon } from "../ui/Icons";

export const Contact = () => {
	return (
		<div
			className="flex flex-col md:flex-row md:items-center justify-center container gap-5 md:gap-16 sectionMargin"
			id="contact"
			data-aos="zoom-in"
			data-aos-once="true"
		>
			<a
				href="https://www.google.com/maps/dir/51.17799,17.000386/Dworska+9a,+51-361+Wilczyce/@51.1537135,16.9126543,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x470fe7cf0d8e5c63:0x4614777580afe869!2m2!1d17.1538533!2d51.1275004?entry=ttu"
				target="_blank"
				rel="noopener noreferrer"
				className="cursor-pointer"
			>
				<Image
					src="/map.png"
					width={533}
					height={376}
					alt="Mapa lokalizacji"
				/>
			</a>
			<div>
				<div className="space-y-6">
					<h2>Skontaktuj się z nami</h2>
					<div className="w-16 h-1 bg-primary" />
					<div className="mt-9 flex flex-col gap-14">
						<div className="flex gap-3">
							<LocaliztaionIcon />
							<div>
								<p>Dworska 9a</p>
								<p>27-612 Wilczyce</p>
							</div>
						</div>
					</div>
					<div className="mt-9 flex flex-col gap-14">
						<div className="flex gap-3">
							<PhoneIcon />
							<p>
								<a href="tel:+48680844541">680 844 541</a>
							</p>
						</div>
					</div>
					<div className="mt-9 flex flex-col gap-14">
						<div className="flex gap-3">
							<EmailIcon />
							<p>
								<a href="mailto:detailspolka@gmail.com">
									detailspolka@gmail.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
