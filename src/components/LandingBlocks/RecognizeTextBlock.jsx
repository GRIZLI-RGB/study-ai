import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function RecognizeTextBlock() {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<>
			<section className="recognizeText">
				<div className="container">
					<div className="recognizeText__info">
						<h2 className="recognizeText__info-title">
							Распознаём текст на фотографиях и скриншотах
						</h2>
						<p className="recognizeText__info-opinion">
							Study AI может быстро распознавать текст на
							изображениях, ведь печатать не всегда возможно или
							долго.
						</p>
						<ul className="recognizeText__info-list">
							{[
								"Загрузите изображение",
								"Дождитесь обработки",
								window.innerWidth >= 420 ? "Получите готовое решение для своей задачи" : "Получите готовое решение",
							].map((text, index) => (
								<li className="recognizeText__info-list-item">
									<span className="recognizeText__info-list-item-number">
										{index + 1}
									</span>
									<span className="recognizeText__info-list-item-text">
										{text}
									</span>
								</li>
							))}
						</ul>
					</div>
					<div
						className="recognizeText__video"
						onClick={() => setShowVideo(true)}>
						<span className="recognizeText__video-time">2:00</span>
						<div className="recognizeText__video-play">
							<img
								className="recognizeText__video-play-button"
								src="/img/icons/big-play.svg"
								alt="Начать воспроизведение видео"
							/>
							<span className="recognizeText__video-play-text">
								Видеоинструкция
							</span>
						</div>
						<img
							className="recognizeText__video-preview"
							src="/img/preview.png"
							alt="Превью видео"
						/>
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
