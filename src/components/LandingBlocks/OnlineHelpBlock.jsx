export default function OnlineHelpBlock() {
	return (
		<section className="onlineHelp">
			<div className="container">
				<h2 className="onlineHelp__title">
					Онлайн-помощь на экзаменах и контрольных работах
				</h2>
				<div className="onlineHelp__items">
					<div className="onlineHelp__items-item">
						<h6 className="onlineHelp__items-item-title">
							Используйте микрофон прямо на экзамене
						</h6>
						<p className="onlineHelp__items-item-opinion">
							Записывайте преподавателей и получайте мгновенные
							ответы.
						</p>
						<img
							className="onlineHelp__items-item-photo"
							src="/img/phone.png"
							alt="Телефон"
						/>
					</div>
					<div className="onlineHelp__items-item">
						<img
							className="onlineHelp__items-item-photo"
							src="/img/attachment.png"
							alt="Прикрепление файлов"
						/>
						<h6 className="onlineHelp__items-item-title">
							Загружайте фото или документы с задачами
						</h6>
						<p className="onlineHelp__items-item-opinion">
							Подойдет любой формат, в том числе Word и PDF. Вес
							файла до 32 мб.
						</p>
					</div>
					<div className="onlineHelp__items-item">
						<h6 className="onlineHelp__items-item-title">
							Сдавайте экзамены и получайте зачеты
						</h6>
						<p className="onlineHelp__items-item-opinion">
							С помощью современных технологии.
						</p>
						<img
							className="onlineHelp__items-item-photo"
							src="/img/girl.png"
							alt="Девочка-студент"
						/>
						<div className="onlineHelp__items-item-extra">
							<span className="onlineHelp__items-item-extra-subtitle">
								Результат
							</span>
							<div className="onlineHelp__items-item-extra-tag">
								100 баллов
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}