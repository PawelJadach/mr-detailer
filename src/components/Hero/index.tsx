import React from "react";

export const Hero = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-[url('/hero.png')] bg-no-repeat bg-cover">
			<div className="flex items-center flex-col justify-center gap-6 max-w-[800px] text-center container">
				<h1 data-aos="fade-in">Zabezpiecz z nami swój samochód</h1>
				<p data-aos="fade-in">
					Potrzebujesz, aby twój samochód wyglądał jak nowy? Nie
					szukaj dalej! Zabezpieczymy Twoje auto folia ochronną PPF
					lub powłoką ceramiczną, graphenową.
				</p>
				<button data-aos="fade-in">skontaktuj się</button>
			</div>
		</div>
	);
};
