import { useState } from "react";

import { motion } from "framer-motion";

import Button from "./Button";

export default function Header() {
	const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

	return (
		<header className="header">
			<div className="container">
				<a href="/" className="header__logo">
					<img src="/img/logo.png" alt="Лого" />
				</a>
				<nav className="header__navigation">
					{[
						{
							title: "О сервисе",
							link: "#about-service",
						},
						{
							title: "Возможности",
							link: "#possibilities",
						},
						{
							title: "Отзывы",
							link: "#feedbacks",
						},
						{
							title: "Контакты",
							link: "#contacts",
						},
					].map(({ title, link }) => (
						<a className="header__navigation-link" href={link}>
							{title}
						</a>
					))}
				</nav>
				<div className="header__buttons">
					<Button text="Создать аккаунт" fill="pink" size="small" />
					<Button text="Войти" fill="white" size="small" />
				</div>
				<div
					className="burger"
					onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}>
					{!isShowMobileMenu ? (
						<>
							<div className="burger__line" />
							<div className="burger__line" />
							<div className="burger__line" />
						</>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none">
							<path
								d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z"
								fill="white"
							/>
						</svg>
					)}
				</div>
			</div>
			<motion.div
				initial={false}
				variants={{
					open: { scale: 0, opacity: 0.5 },
					close: { scale: 1, opacity: 1 },
				}}
				animate={!isShowMobileMenu ? "open" : "close"}
				className="mobileMenu">
				<nav className="mobileMenu__navigation">
					{[
						{
							icon: "globus",
							title: "О сервисе",
							link: "#",
						},
						{
							icon: "emotion",
							title: "Возможности",
							link: "#",
						},
						{
							icon: "people",
							title: "Отзывы",
							link: "#",
						},
						{
							icon: "mail",
							title: "Контакты",
							link: "#",
						},
					].map(({ icon, title, link }) => (
						<a href={link} className="mobileMenu__navigation-link">
							<img src={`/img/icons/${icon}.svg`} alt="" />
							<span>{title}</span>
						</a>
					))}
				</nav>
				<div className="mobileMenu__buttons">
					<Button
						text="Создать аккаунт"
						fill="pink"
						size="big"
						isFullWidth
					/>
					<Button text="Войти" size="big" fill="dark" isFullWidth />
				</div>
				<div className="mobileMenu__social">
					<div className="mobileMenu__social-links">
						<a className="mobileMenu__social-links-link" href="#">
							<img src="/img/icons/tg.svg" alt="Телеграмм" />
						</a>
						<a className="mobileMenu__social-links-link" href="#">
							<img src="/img/icons/vk.svg" alt="Вконтакте" />
						</a>
					</div>
					<p className="mobileMenu__social-text">Следите за нами</p>
				</div>
			</motion.div>
		</header>
	);
}
