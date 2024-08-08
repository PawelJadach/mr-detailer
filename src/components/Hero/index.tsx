import React from "react";

export const Hero = () => {
	return (
		<div
			className="min-h-screen flex items-center justify-center bg-[url('/hero.png')] bg-no-repeat bg-cover"
			data-aos="fade-in"
			data-aos-once="true"
		>
			<div className="flex items-center flex-col justify-center gap-6 max-w-[800px] text-center container">
				<h1 data-aos="fade-in" data-aos-delay={300}>
					Zabezpiecz z nami swój samochód
				</h1>
				<p data-aos="fade-in" data-aos-delay={500}>
					Potrzebujesz, aby twój samochód wyglądał jak nowy? Nie
					szukaj dalej! Zabezpieczymy Twoje auto folia ochronną PPF
					lub powłoką ceramiczną, graphenową.
				</p>
				<button data-aos="fade-in" data-aos-delay={700}>
					skontaktuj się
				</button>
			</div>
		</div>
	);
};
