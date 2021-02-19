export const generateYears = () => {
  const currentYear = new Date().getFullYear();
  let options = [];

  for(let i = currentYear; i > (currentYear - 40); i--) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  return options;
}