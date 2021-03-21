import { ExcelComponent } from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent {
	static className = 'excel_toolbar'

	toHTML() {
		return '<h1>Toolbar</h1>'
	}
}