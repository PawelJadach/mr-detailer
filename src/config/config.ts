import { Metadata } from "next";

type Config = {
	metadata: {
		[key: string]: Metadata;
	};
	locale: string;
};

export const config: Config = {
	metadata: {
		root: {
			title: "MrDetailer - zabezpiecz swój samochód",
			description:
				"Potrzebujesz, aby twój samochód wyglądał jak nowy? Nie szukaj dalej! Zabezpieczymy Twoje auto folia ochronną PPF lub powłoką ceramiczną, graphenową.",
			metadataBase: new URL("https://mrdetailer.com.pl/"),
			openGraph: {
				images: "/opengraph-image.png",
			},
		},
	},
	locale: "pl",
};
