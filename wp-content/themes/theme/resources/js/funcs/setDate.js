const setDate = () => {
   let dateContainer = document.querySelector(".acutal-date");
   let acutalDate = new Date;

   dateContainer.innerHTML = acutalDate.getFullYear();
  };
  
  export default setDate;
  