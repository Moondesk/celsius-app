const GENDER = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const PERSON_TITLE = [
  { label: "Mr.", value: "mr" },
  { label: "Ms.", value: "ms" },
  { label: "Mrs.", value: "mrs" },
];

const DAYS = [
  { label: "01", value: "01" },
  { label: "02", value: "02" },
  { label: "03", value: "03" },
  { label: "04", value: "04" },
  { label: "05", value: "05" },
  { label: "06", value: "06" },
  { label: "07", value: "07" },
  { label: "08", value: "08" },
  { label: "09", value: "09" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
  { label: "19", value: "19" },
  { label: "20", value: "20" },
  { label: "21", value: "21" },
  { label: "22", value: "22" },
  { label: "23", value: "23" },
  { label: "24", value: "24" },
  { label: "25", value: "25" },
  { label: "26", value: "26" },
  { label: "27", value: "27" },
  { label: "28", value: "28" },
  { label: "29", value: "29" },
  { label: "30", value: "30" },
  { label: "31", value: "31" },
];

const MONTHS = [
  { label: "Jan", value: "01" },
  { label: "Feb", value: "02" },
  { label: "Mar", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "Aug", value: "08" },
  { label: "Sept", value: "09" },
  { label: "Oct", value: "10" },
  { label: "Nov", value: "11" },
  { label: "Dec", value: "12" },
];

const years = [];
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 120; i--) {
  years.push({ label: i.toString(), value: i.toString() });
}
const YEARS = years;

const STATE = [
  { label: "Alabama", value: "Alabama" },
  { label: "Alaska", value: "Alaska" },
  { label: "American Samoa", value: "American Samoa" },
  { label: "Arizona", value: "Arizona" },
  { label: "Arkansas", value: "Arkansas" },
  { label: "California", value: "California" },
  { label: "Colorado", value: "Colorado" },
  { label: "Connecticut", value: "Connecticut" },
  { label: "Delaware", value: "Delaware" },
  { label: "District Of Columbia", value: "District Of Columbia" },
  {
    label: "Federated States Of Micronesia",
    value: "Federated States Of Micronesia",
  },
  { label: "Florida", value: "Florida" },
  { label: "Georgia", value: "Georgia" },
  { label: "Guam", value: "Guam" },
  { label: "Hawaii", value: "Hawaii" },
  { label: "Idaho", value: "Idaho" },
  { label: "Illinois", value: "Illinois" },
  { label: "Indiana", value: "Indiana" },
  { label: "Iowa", value: "Iowa" },
  { label: "Kansas", value: "Kansas" },
  { label: "Kentucky", value: "Kentucky" },
  { label: "Louisiana", value: "Louisiana" },
  { label: "Maine", value: "Maine" },
  { label: "Marshall Islands", value: "Marshall Islands" },
  { label: "Maryland", value: "Maryland" },
  { label: "Massachusetts", value: "Massachusetts" },
  { label: "Michigan", value: "Michigan" },
  { label: "Minnesota", value: "Minnesota" },
  { label: "Mississippi", value: "Mississippi" },
  { label: "Missouri", value: "Missouri" },
  { label: "Montana", value: "Montana" },
  { label: "Nebraska", value: "Nebraska" },
  { label: "Nevada", value: "Nevada" },
  { label: "New Hampshire", value: "New Hampshire" },
  { label: "New Jersey", value: "New Jersey" },
  { label: "New Mexico", value: "New Mexico" },
  { label: "New York", value: "New York" },
  { label: "North Carolina", value: "North Carolina" },
  { label: "North Dakota", value: "North Dakota" },
  { label: "Northern Mariana Islands", value: "Northern Mariana Islands" },
  { label: "Ohio", value: "Ohio" },
  { label: "Oklahoma", value: "Oklahoma" },
  { label: "Oregon", value: "Oregon" },
  { label: "Palau", value: "Palau" },
  { label: "Pennsylvania", value: "Pennsylvania" },
  { label: "Puerto Rico", value: "Puerto Rico" },
  { label: "Rhode Island", value: "Rhode Island" },
  { label: "South Carolina", value: "South Carolina" },
  { label: "South Dakota", value: "South Dakota" },
  { label: "Tennessee", value: "Tennessee" },
  { label: "Texas", value: "Texas" },
  { label: "Utah", value: "Utah" },
  { label: "Vermont", value: "Vermont" },
  { label: "Virgin Islands", value: "Virgin Islands" },
  { label: "Virginia", value: "Virginia" },
  { label: "Washington", value: "Washington" },
  { label: "West Virginia", value: "West Virginia" },
  { label: "Wisconsin", value: "Wisconsin" },
  { label: "Wyoming", value: "Wyoming" },
];

const TRANSACTIONS = [
  { label: "CelPay", value: "celpay" },
  { label: "Withdraw", value: "withdraw" },
  { label: "Buy Coins", value: "buy" },
  { label: "Swap Coins", value: "swap" },
];

const CELPAY = [
  { label: "contacts", value: "contacts" },
  { label: "direct link", value: "directLink" },
];

const BUYCOINS = [
  { label: "Credit Card", value: "creditCard" },
  { label: "Bank Transfer", value: "bankTransfer" },
];

const WITHDRAW = [
  { label: "new address", value: "newAddress" },
  { label: "my current address", value: "currentAddress" },
];

const SWAPCOINS = [
  { label: "Buy Coins", value: "buyCoin" },
  { label: "Swap Coins", value: "swapCoin" },
];

export default {
  GENDER,
  PERSON_TITLE,
  DAYS,
  MONTHS,
  YEARS,
  STATE,
  TRANSACTIONS,
  CELPAY,
  SWAPCOINS,
  WITHDRAW,
  BUYCOINS,
};
