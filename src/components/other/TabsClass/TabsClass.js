import './TabsClass.scss';

export default class TabsClass {
	constructor(tabs) {
		this.$tab = tabs;
		this.$tabName = this.$tab.querySelectorAll('.tabs__name');
		this.$tabItem = this.$tab.querySelectorAll('.tabs__item');

		this.init();
	}

	init() {
		this.$tabName.forEach((name, index) => {
			name.setAttribute('data-tab-index', `${index}`);
			name.addEventListener('click', this.changeTab.bind(this));
		});
	}

	changeTab(e) {
		const targetTab = e.target.closest('.tabs__name');
		const blockNumber = targetTab.getAttribute('data-tab-index');

		this.$tabName.forEach((name) => {
			name.classList.remove('active');
		});

		targetTab.classList.add('active');

		this.openTabItem(blockNumber);

		console.log(111, blockNumber);
	}

	openTabItem(blockNumber) {
		this.$tabItem.forEach((name) => {
			name.classList.remove('active');
		});
		this.$tabItem[blockNumber].classList.add('active');
	}
}
