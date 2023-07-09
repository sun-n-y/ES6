//
const products = [
  {
    title: 'some title 1',
    company: 'company 1',
  },
  {
    title: 'some title 2',
    company: 'company 2',
  },
  {
    title: 'some title 3',
    company: 'company 3',
  },
  {
    title: 'some title 4',
    company: 'company 2',
  },
];

// const companies = products.map((item) => item.company);
// console.log(companies);

// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = [...uniqueCompanies];

// console.log(finalCompanies);

const result = ['all', ...new Set(products.map((item) => item.company))];
console.log(result);
