import Button from "../Button";

export default function ContactsBlock() {
	return (
		<section className="contacts">
			<div className="container">
				<h2 className="contacts__title">Контакты</h2>
				<p className="contacts__opinion">
					Подписывайтесь на нас или пишите нам.
				</p>
				<div className="contacts__items">
					{[
						{
							title: "Telegram канал",
							subtitle: "t.me/studyairu",
							link: "#",
							icon: "tg-2",
						},
						{
							title: "Вконтакте",
							subtitle: "vk.com/studyairu",
							link: "#",
							icon: "vk",
						},
						{
							title: "Онлайн чат",
							subtitle: "Написать",
							link: "#",
							icon: "chat",
						},
						{
							title: "Email",
							subtitle: "support@studyai.ru",
							link: "#",
							icon: "email",
						},
					].map(({ title, subtitle, link, icon }) => (
						<div className="contacts__items-item">
							<div className="contacts__items-item-icon">
								<img src={`/img/icons/${icon}.svg`} />
							</div>
							<div className="contacts__items-item-info">
								<h6 className="contacts__items-item-info-title">
									{title}
								</h6>
								<a
									className="contacts__items-item-info-link"
									href={link}>
									{subtitle}
								</a>
							</div>
						</div>
					))}
				</div>
				<div className="contacts__extra">
					<div className="contacts__extra-info">
						<div className="contacts__extra-info-icon">
							<img src="/img/icons/callMeHand.png" alt="Эмодзи" />
						</div>
						<p className="contacts__extra-info-text">Попробуйте все возможности Study AI</p>
					</div>
					<Button text="Создать аккаунт" fill="white" size="big" />
				</div>
			</div>
		</section>
	);
}