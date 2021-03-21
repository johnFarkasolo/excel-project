import { ExcelComponent } from "@core/ExcelComponent";

export class Header extends ExcelComponent {
	static className = 'excel_header'

	toHTML() {
		return `<h1>Header</h1>`
	}
}