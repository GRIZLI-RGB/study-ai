export default function ForStudentsBlock() {
	return (
		<section className="forStudents">
			<div className="container">
				<h2 className="forStudents__title">Для тех, кто учится</h2>
				<p className="forStudents__opinion">
					<span>Study AI</span> - сервис на основе искусственного
					интеллекта, который помогает школьникам и студентам учиться
					более эффективно.
				</p>
				<div className="forStudents__items">
					{[
						{
							title: "Домашние задания",
							opinion:
								"Напишем уникальное сочинение и эссе на заданную тему",
							arrowBackgroundColor: "#AE47FF",
						},
						{
							title: "Тесты",
							opinion:
								"Напишем уникальное сочинение и эссе на заданную тему",
							arrowBackgroundColor: "#61D46C",
						},
						{
							title: "Контрольные работы",
							opinion:
								"Напишем уникальное сочинение и эссе на заданную тему",
							arrowBackgroundColor: "#66B8EF",
						},
						{
							title: "Сочинения и эссе",
							opinion:
								"Напишем уникальное сочинение и эссе на заданную тему",
							arrowBackgroundColor: "#6248FF",
						},
						{
							title: "Экзамены",
							opinion:
								"Поможем вам справляться с домашними заданиями проще и быстрее.",
							arrowBackgroundColor: "#FF7448",
						},
						{
							title: "Дипломные работы",
							opinion:
								"Поможем вам справляться с домашними заданиями проще и быстрее.",
							arrowBackgroundColor: "#FFA800",
						},
					].map(({ title, opinion, arrowBackgroundColor }) => (
						<div className="forStudents__items-item">
							<h6 className="forStudents__items-item-title">
								{title}
							</h6>
							<p className="forStudents__items-item-opinion">
								{opinion}
							</p>
							<div
								className="forStudents__items-item-blockWithArrow"
								style={{
									backgroundColor: arrowBackgroundColor,
								}}>
								<img
									src="/img/icons/arrowRight.svg"
									alt="Стрелка вправо"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
