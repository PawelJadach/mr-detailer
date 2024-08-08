import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavLogo() {
	return (
		<Link href="/#hero">
			<Image
				src="/logo.png"
				alt="Mr detailer logo"
				width={50}
				height={50}
			/>
		</Link>
	);
}
