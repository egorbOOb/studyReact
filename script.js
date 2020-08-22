'use strict';

let employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'],
	nameCourse = 'Базовый React',
	command = employers.filter(item => item.length > 0 && item.trim() != '');

command.forEach((item, i, arr) => {
		const upperCase = item.trim()[0].toUpperCase();
		arr[i] = upperCase + item.toLowerCase().trim().slice(1);
	}
)

let data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (data, own = 0) => {
	const everyCash = data.map(item => item);
	let total = own;

	total = everyCash.reduce((count, item) => {
		return count + +item;
	}, total)
	
	return total;
}

let lesson = calcCash(data.cash);

function makeBusiness(director, allModule, gang, course, teacher = 'Максим') {
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`\tСтартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}.
	Всего уроков: ${allModule}. Команда Академии: ${gang.join(', ')}.
	Первое что изучим будет "${data.react[0]}". Он очень похож на HTML!
	Технологии которые мы изучим: ${sumTech.join(', ')}`
		);
}

makeBusiness('Артем', lesson, command, nameCourse);
