import { add_single_line_type, add_checkbox, add_dropdown, add_number, add_paragraph, add_multiple_coice } from "../actions/action-types";

const ButtonList = { 
  [add_single_line_type]: 'Single Line of Text',
  [add_checkbox]: 'Checkboxes',
  [add_paragraph]: 'Paragraph Text',
  [add_dropdown]: 'Dropdown',
  [add_multiple_coice]: 'Multiple Choice',
  [add_number]: 'Number'
}

export default ButtonList;
