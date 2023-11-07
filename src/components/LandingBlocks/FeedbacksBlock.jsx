import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function FeedbacksBlock() {

	return (
		<section className="feedbacks">
			<div className="container">
				<div className="feedbacks__head">
					<div>
						<h2 className="feedbacks__title">
							Что говорят о Study AI
						</h2>
						<p className="feedbacks__opinion">
							Популярные отзывы из Telegram.
						</p>
					</div>
					<div className="feedbacks__pagination">
						<div className="feedbacks__pagination-arrow feedbacks__pagination-arrow-prev">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="18"
								viewBox="0 0 10 18"
								fill="none">
								<path
									d="M10 1.62L8.82 0.439997L0.373335 8.88666L8.82 17.3333L10 16.1533L2.73 8.88666L10 1.62Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="feedbacks__pagination-arrow feedbacks__pagination-arrow-next">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="18"
								viewBox="0 0 10 18"
								fill="none">
								<path
									d="M-1.34623e-06 1.62L1.18 0.439997L9.62667 8.88666L1.18 17.3333L-1.01096e-07 16.1533L7.27 8.88666L-1.34623e-06 1.62Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
				</div>
				<Swiper
					modules={[Navigation]}
					navigation={{
						enabled: true,
						prevEl: ".feedbacks__pagination-arrow-prev",
						nextEl: ".feedbacks__pagination-arrow-next",
					}}
					spaceBetween={55}
					slidesPerView={'auto'}
					className="feedbacks__items">
					{[
						{
							title: "«Сверхбыстрые ответы»",
							text: "Помогает мне решать домашние работы по всем предметам. Это сильно помогает мне не терять интерес к обучению, делая раньше глупые задачи самостоятельно.",
							name: "Наталья Рубтсова",
							avatar: "natalya_rubtsova",
							telegramLink: "#",
						},
						{
							title: "«ДЗ делаю за 5 минут»",
							text: "Очень круто и удобно реализовано. Загружаю фотки домашних задании и получаю ответы. Сэкономила уже себе кучу времени и нервов. Спасибо большое команде!",
							avatar: "liza_lebedeva",
							name: "Лиза Лебедева",
							telegramLink: "#",
						},
						{
							title: "«Будущее уже здесь»",
							text: "Наконец-то я могу пользоваться современными технологиями в своей повседневной жизни. Очень сильно помогает в учебе, а родители и не против.",
							name: "Михаил Губин",
							avatar: "mikhail_gubin",
							telegramLink: "#",
						},
						{
							title: "«Сверхбыстрые ответы»",
							text: "Помогает мне решать домашние работы по всем предметам. Это сильно помогает мне не терять интерес к обучению, делая раньше глупые задачи самостоятельно.",
							name: "Наталья Рубтсова",
							avatar: "natalya_rubtsova",
							telegramLink: "#",
						},
						{
							title: "«ДЗ делаю за 5 минут»",
							text: "Очень круто и удобно реализовано. Загружаю фотки домашних задании и получаю ответы. Сэкономила уже себе кучу времени и нервов. Спасибо большое команде!",
							avatar: "liza_lebedeva",
							name: "Лиза Лебедева",
							telegramLink: "#",
						},
						{
							title: "«Будущее уже здесь»",
							text: "Наконец-то я могу пользоваться современными технологиями в своей повседневной жизни. Очень сильно помогает в учебе, а родители и не против.",
							name: "Михаил Губин",
							avatar: "mikhail_gubin",
							telegramLink: "#",
						},
						{
							title: "«Сверхбыстрые ответы»",
							text: "Помогает мне решать домашние работы по всем предметам. Это сильно помогает мне не терять интерес к обучению, делая раньше глупые задачи самостоятельно.",
							name: "Наталья Рубтсова",
							avatar: "natalya_rubtsova",
							telegramLink: "#",
						},
						{
							title: "«ДЗ делаю за 5 минут»",
							text: "Очень круто и удобно реализовано. Загружаю фотки домашних задании и получаю ответы. Сэкономила уже себе кучу времени и нервов. Спасибо большое команде!",
							avatar: "liza_lebedeva",
							name: "Лиза Лебедева",
							telegramLink: "#",
						},
						{
							title: "«Будущее уже здесь»",
							text: "Наконец-то я могу пользоваться современными технологиями в своей повседневной жизни. Очень сильно помогает в учебе, а родители и не против.",
							name: "Михаил Губин",
							avatar: "mikhail_gubin",
							telegramLink: "#",
						},
					].map(({ title, text, avatar, telegramLink, name }) => (
						<SwiperSlide className="feedbacks__items-item">
							<h6 className="feedbacks__items-item-title">
								{title}
							</h6>
							<p className="feedbacks__items-item-text">{text}</p>
							<div className="feedbacks__items-item-line" />
							<div className="feedbacks__items-item-user">
								<div className="feedbacks__items-item-user-avatar">
									<img
										src={`/img/users/${avatar}.png`}
										alt="Аватарка пользователя"
									/>
								</div>
								<div className="feedbacks__items-item-user-info">
									<span className="feedbacks__items-item-user-info-name">
										{name}
									</span>
									<a
										className="feedbacks__items-item-user-info-telegram"
										href={telegramLink}>
										<img
											src="/img/icons/tg.svg"
											alt="Телеграмм"
										/>
									</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}