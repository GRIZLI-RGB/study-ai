export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__left">
					<a className="footer__left-logo" href="/">
						<img src="/img/logo.png" alt="Лого" />
					</a>
					<p className="footer__left-description">
						Решайте задачи по учебе за 1 минуту с помощью нейросети
					</p>
					<div className="footer__left-social">
						<a className="footer__left-social-link" href="#">
							<img src="/img/icons/tg.svg" alt="Телеграмм" />
						</a>
						<a className="footer__left-social-link" href="#">
							<img src="/img/icons/vk.svg" alt="Вконтакте" />
						</a>
					</div>
				</div>
				<div className="footer__right">
					{[
						{
							title: "Study AI",
							items: [
								{
									name: "О сервисе",
									link: "#",
								},
								{
									name: "Возможности",
									link: "#",
								},
								{
									name: "Отзывы",
									link: "#",
								},
								{
									name: "Контакты",
									link: "#",
								},
							],
						},
						{
							title: "Юридическая информация",
							items: [
								{
									name: "Политика конфиденциальности",
									link: "#",
								},
								{
									name: "Политика файлов cookie",
									link: "#",
								},
								{
									name: "Положения и условия",
									link: "#",
								},
								{
									name: "Политика возврата",
									link: "#",
								},
							],
						},
						{
							title: "Контакты",
							items: [
								{
									name: "support@studyai.ru",
									link: "#",
								},
								{
									name: "t.me/supportstudyai_bot",
									link: "#",
								},
							],
						},
					].map(({ title, items }) => (
						<nav className="footer__right-navigation">
							<h6 className="footer__right-navigation-item footer__right-navigation-item--title">
								{title}
							</h6>
							{items.map(({ name, link }) => (
								<div className="footer__right-navigation-item">
									<a
										className="footer__right-navigation-item-link"
										href={link}>
										{name}
									</a>
								</div>
							))}
						</nav>
					))}
				</div>
			</div>
			<p className="footer__copyright">
				ООО “Грааль групп”, ИНН: 9706022757 КПП: 770601001, Москва,
				Пресненская наб., 8, стр. 1
			</p>
		</footer>
	);
}
