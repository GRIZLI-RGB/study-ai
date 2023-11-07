import { useState } from "react";
import ModalVideo from "react-modal-video";

import Button from "../Button";

export default function WelcomeBlock() {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<>
			<section className="welcome">
				<div className="container">
					<div className="welcome__preview">
						<div className="welcome__preview-info">
							<h1 className="welcome__preview-info-title">
								Решайте задачи <br /> по учебе{" "}
								<span>за 1 минуту</span> с помощью ChatGPT
							</h1>
							<p className="welcome__preview-info-opinion">
								Поможем справиться с любой задачей - от
								выполнения домашних заданий до успешной защиты
								диплома.
							</p>
						</div>
						<div className="welcome__preview-video">
							<div
								className="welcome__preview-video-player"
								onClick={() => setShowVideo(true)}>
								<img
									className="welcome__preview-video-player-preview"
									src="/img/video-preview.png"
									alt="Превью видео"
								/>
								<img
									className="welcome__preview-video-player-play"
									src="/img/icons/play.svg"
									alt="Включить видео"
								/>
							</div>
							<p className="welcome__preview-video-opinion">
								Узнайте, как это работает за 2 минуты
							</p>
						</div>
					</div>
					<div className="welcome__advantages">
						{[
							{
								title: "Расшифровываем фото и аудио",
								opinion: "Не придется печатать.",
								icon: "selfie",
							},
							{
								title: "5 секунд",
								opinion: "Среднее время ответа. ",
								icon: "handshake",
							},
							{
								title: "99%",
								opinion: "Процент решенных задач.",
								icon: "smilingFaceWithHearts",
							},
						].map(({ title, opinion, icon }) => (
							<div className="welcome__advantages-advantage">
								<div className="welcome__advantages-advantage-icon">
									<img
										src={`/img/icons/${icon}.png`}
										alt=""
									/>
								</div>
								<div className="welcome__advantages-advantage-box">
									<h6 className="welcome__advantages-advantage-box-title">
										{title}
									</h6>
									<p className="welcome__advantages-advantage-box-opinion">
										{opinion}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className="welcome__callToAction">
						<div className="welcome__callToAction-buttons">
							<Button
								text="Создать аккаунт"
								fill="pink"
								size="big"
							/>
							<Button text="Войти" fill="white" size="big" />
						</div>
						<div className="welcome__callToAction-users">
							<div className="welcome__callToAction-users-photos">
								{["1", "2", "3"].map(user => (
									<img
										className="welcome__callToAction-users-photos-photo"
										src={`/img/users/${user}.png`}
										alt={`Пользователь ${user}`}
									/>
								))}
							</div>
							<div className="welcome__callToAction-users-extra">
								<div className="welcome__callToAction-users-extra-review">
									<div className="welcome__callToAction-users-extra-review-stars">
										{[...new Array(5)].map(_ => (
											<img
												className="welcome__callToAction-users-extra-review-stars-star"
												src="/img/icons/star.svg"
												alt="Звезда"
											/>
										))}
									</div>
									<span className="welcome__callToAction-users-extra-review-score">
										5.0
									</span>
								</div>
								<p className="welcome__callToAction-users-extra-text">
									👋🏼 Присоединяйтесь к 33 490 пользователям
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo
				channel="youtube"
				isOpen={showVideo}
				videoId="bATYpED7PtY"
				onClose={() => setShowVideo(false)}
			/>
		</>
	);
}
