import { getPickersLocalization } from './utils/getPickersLocalization';
var ptBRPickers = {
  // Calendar navigation
  previousMonth: 'Mês anterior',
  nextMonth: 'Próximo mês',
  // View navigation
  openPreviousView: 'Abrir próxima seleção',
  openNextView: 'Abrir seleção anterior',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? 'Seleção de ano está aberta, alternando para seleção de calendário' : 'Seleção de calendários está aberta, alternando para seleção de ano';
  },
  // inputModeToggleButtonAriaLabel: (isKeyboardInputOpen: boolean, viewType: 'calendar' | 'clock') => isKeyboardInputOpen ? `text input view is open, go to ${viewType} view` : `${viewType} view is open, go to text input view`,
  // DateRange placeholders
  start: 'Início',
  end: 'Fim',
  // Action bar
  cancelButtonLabel: 'Cancelar',
  clearButtonLabel: 'Limpar',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Hoje',
  // Toolbar titles
  // datePickerDefaultToolbarTitle: 'Select date',
  // dateTimePickerDefaultToolbarTitle: 'Select date & time',
  // timePickerDefaultToolbarTitle: 'Select time',
  // dateRangePickerDefaultToolbarTitle: 'Select date range',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    return "Selecione ".concat(view, ". ").concat(time === null ? 'Hora não selecionada' : "Selecionado a hora ".concat(adapter.format(time, 'fullTime')));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, " horas");
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, " minutos");
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, " segundos");
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(rawValue, utils) {
    return rawValue && utils.isValid(utils.date(rawValue)) ? "Escolha uma data, data selecionada ".concat(utils.format(utils.date(rawValue), 'fullDate')) : 'Escolha uma data';
  },
  openTimePickerDialogue: function openTimePickerDialogue(rawValue, utils) {
    return rawValue && utils.isValid(utils.date(rawValue)) ? "Escolha uma hora, hora selecionada ".concat(utils.format(utils.date(rawValue), 'fullTime')) : 'Escolha uma hora';
  },
  // Table labels
  timeTableLabel: 'escolha uma hora',
  dateTableLabel: 'escolha uma data'
};
export var ptBR = getPickersLocalization(ptBRPickers);