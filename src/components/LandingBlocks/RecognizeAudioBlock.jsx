import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function RecognizeAudioBlock() {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<>
			<section className="recognizeAudio">
				<div className="container">
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
					<div className="recognizeText__info">
						<h2 className="recognizeAudio__info-title recognizeText__info-title">
							Распознаём аудиофайлы, просто включите запись
						</h2>
						<p className="recognizeText__info-opinion">
							Study AI может быстро распознавать аудио, ведь
							печатать или делать фотографию не всегда возможно
							или удобно.
						</p>
						<ul className="recognizeText__info-list">
							{[
								"Запишите аудиозапись",
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
