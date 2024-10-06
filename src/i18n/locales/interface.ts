export interface languageJson {
  home: Home;
  dashboard: Dashboard;
  common: Common;
  BudgetWise: BudgetWise;
  FocusFlow: FocusFlow;
  CleanCrew: CleanCrew;
  VibeLink: VibeLink;
  Eventure: Eventure;
  RecipeRiot: RecipeRiot;
  DesignNest: DesignNest;
  errors: Errors;
  archive: Archive;
}

export interface Common {
  actions: string;
  address: string;
  asc: string;
  cancel: string;
  city: string;
  clear: string;
  columns: string;
  country: string;
  currencies: string;
  currency: string;
  delete: string;
  desc: string;
  edit: string;
  email: string;
  exporting: string;
  fileInput: string;
  goToFirstPage: string;
  goToLastPage: string;
  goToNextPage: string;
  goToPreviousPage: string;
  import: string;
  loading: string;
  hide: string;
  invalidDate: string;
  month: string;
  more: string;
  name: string;
  no: string;
  noRecordsFound: string;
  noResults: string;
  of: string;
  page: string;
  phone: string;
  pickDate: string;
  postalCode: string;
  reset: string;
  rowsPerPage: string;
  saveChanges: string;
  Saving: string;
  search: string;
  SelectAll: string;
  settings: string;
  since: string;
  start: string;
  startDate: string;
  starting: string;
  tryAgain: string;
  update: string;
  uploading: string;
  upload: string;
  uploadFile: string;
  yes: string;
  deleteConfirmation: string;
  deleteSuccess: string;
  deleteError: string;
  deleteFailed: string;
  areYouSureYouWantToDelete: string;
}

export interface Home {
  AvailableApps: string;
  open: string;
  welcome: string;
}

export interface Dashboard {
  dashboard: string;
}

export interface BudgetWise {
  BudgetWise: string;
}

export interface FocusFlow {
  FocusFlow: string;
}

export interface CleanCrew {
  CleanCrew: string;
}

export interface VibeLink {
  VibeLink: string;
}

export interface Eventure {
  Eventure: string;
}

export interface RecipeRiot {
  RecipeRiot: string;
}

export interface DesignNest {
  DesignNest: string;
}

export interface Archive {
  archive: string;
}

export interface Errors {
  error: string;
  notFound: string;
}