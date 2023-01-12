import GaCalendar from "@/packages/GaCalendar/GaCalendar";
import GaCheckbox from "@/packages/GaCheckbox/GaCheckbox";
import GaDatePicker from "@/packages/GaDatePicker/GaDatePicker";
import GaInput from "@/packages/GaInput/GaInput";
import GaPagination from "@/packages/GaPagination/GaPagination";
import GaRadio from "@/packages/GaRadio/GaRadio";
import GaSwitch from "@/packages/GaSwitch/GaSwitch";
import GaTabs from "@/packages/GaTabs/GaTabs";
import GaTreeView from "@/packages/GaTreeView/GaTreeView";

const ga_ui = [GaCalendar, GaCheckbox, GaDatePicker, GaInput, GaPagination, GaRadio, GaSwitch, GaTabs, GaTreeView]
const install = (app) => {
  ga_ui.forEach(component => {
    app.component(component.name, component);
  })
}

export default {
  install,
  GaCalendar, GaCheckbox, GaDatePicker, GaInput, GaPagination, GaRadio, GaSwitch, GaTabs, GaTreeView
}