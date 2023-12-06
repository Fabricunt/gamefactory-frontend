const formatDate = (date) => {
   const newDate = new Date(date)
   const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
   }

   return Intl.DateTimeFormat('en-EN', options).format(newDate)
}

export default formatDate
