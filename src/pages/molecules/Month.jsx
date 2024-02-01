// import PropTypes from "prop-types";

// const Month = () => {
//   return (
//     <div>
//       <MonthDropdownItem month="Jan" />
//       <MonthDropdownItem month="Feb" />
//       <MonthDropdownItem month="Mar" />
//       <MonthDropdownItem month="Apr" />
//       <MonthDropdownItem month="May" />
//       <MonthDropdownItem month="Jun" />
//       <MonthDropdownItem month="Jul" />
//       <MonthDropdownItem month="Aug" />
//       <MonthDropdownItem month="Sep" />
//       <MonthDropdownItem month="Oct" />
//       <MonthDropdownItem month="Nov" />
//       <MonthDropdownItem month="Dec" />
//     </div>
//   );
// };

// Month.propTypes = {
//   month: PropTypes.any.isRequired,
// };

// export default Month;

// function MonthDropdownItem(props) {
//   return <li key={props.month}>{props.month}</li>;
// }



import React from "react";


const Month = ({ setSelectedMonth }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const handleMonthClick = (selectedMonth) => {
    setSelectedMonth(selectedMonth);
  };

  return (
    <div>
      {months.map((month) => (
        <MonthDropdownItem key={month} month={month} onClick={handleMonthClick} />
      ))}
    </div>
  );
};


export default Month;

function MonthDropdownItem({ month, onClick }) {
  const handleClick = () => {
    onClick(month);
  };

  return <li key={month} onClick={handleClick}>{month}</li>;
}

