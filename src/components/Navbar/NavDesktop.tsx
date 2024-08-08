"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { navLinks } from "@/config/navbar";
import { FacebookIcon, InstagramIcon } from "../ui/Icons";
import { cn } from "@/utils/cn";

export default function NavDesktop() {
	const [bg, setBg] = useState(false);

	const changeColor = () => {
		if (window.scrollY >= 100) {
			setBg(true);
		} else if (bg) {
			setBg(false);
		}
	};

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", changeColor);
	}

	return (
		<div
			className={cn(
				"lg:block fixed top-0 left-0 right-0 hidden z-10 bg-transparent transition-all duration-500",
				bg && "bg-dark",
			)}
		>
			<div className="container flex justify-between items-center py-6">
				<NavLogo />
				<div className="flex gap-8 items-center">
					{navLinks.map((link, idx) => (
						<NavLink key={link.label + idx} {...link} />
					))}
				</div>
				<div className="flex items-center gap-6">
					<a
						href="https://www.instagram.com/mrdetailer.com.pl"
						target="_blank"
						rel="noopener noreferrer"
					>
						<InstagramIcon />
					</a>
					<a
						href="https://www.facebook.com/mrdetailerwroclaw"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FacebookIcon />
					</a>
				</div>
			</div>
		</div>
	);
}
