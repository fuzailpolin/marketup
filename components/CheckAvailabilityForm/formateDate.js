import React from 'react'

const formateDate = (e) => {
    
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let formatted_date =
        e.getDate() + "-" + months[e.getMonth()] + ", " + e.getFullYear();

      return formatted_date;
    
}

export default formateDate
