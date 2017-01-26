import angular = require("angular");

declare module 'angular' {
	export namespace ui {
		interface IState {
			modalComponent: string;
			modal?: boolean | string[];
		}
	}
}
