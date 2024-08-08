import Image from "next/image";
import React from "react";

export const About = () => {
	return (
		<div
			className="flex flex-col md:flex-row items-center justify-center container gap-5 md:gap-16 sectionMargin"
			id="about"
		>
			<Image
				src="/about.png"
				width={472}
				height={542}
				alt="Samochód volvo"
				data-aos="fade-right"
				data-aos-delay="800"
				data-aos-once="true"
			/>
			<div>
				<h4
					data-aos="fade-left"
					data-aos-once="true"
					className="uppercase text-primary font-medium text-base"
				>
					Zrelaksuj się i odśwież swój pojazd
				</h4>
				<div className="space-y-6">
					<h2
						data-aos="fade-left"
						data-aos-once="true"
						data-aos-delay="100"
					>
						Nowe doświadczenie myjni samochodowej
					</h2>
					<div
						data-aos="fade-left"
						data-aos-once="true"
						className="w-16 h-1 bg-primary"
					/>
					<p
						data-aos="fade-left"
						data-aos-once="true"
						data-aos-delay="300"
					>
						Na naszej stacji myjni samochodowej oferujemy luksusowe
						doświadczenie mycia dla wszystkich rodzajów pojazdów.
						Nasz specjalnie zaprojektowany sprzęt gwarantuje
						dogłębne czyszczenie, które sprawi, że Twój pojazd
						będzie lśniący i wyglądający jak nowy.
					</p>
					<p
						data-aos="fade-left"
						data-aos-once="true"
						data-aos-delay="500"
					>
						Dzięki wymarzonym strumieniom wody w połączeniu z
						organicznymi środkami czyszczącymi, proces jest
						bezpieczny zarówno dla środowiska, jak i dla Ciebie -
						nie ma nieprzyjemnych zapachów ani pozostałości
						chemicznych! Twoja satysfakcja jest gwarantowana;
						przyjdź, zrelaksuj się i odśwież swój pojazd już dziś!
					</p>
					<button
						data-aos="fade-left"
						data-aos-once="true"
						data-aos-delay="700"
					>
						nasze usługi
					</button>
				</div>
			</div>
		</div>
	);
};
