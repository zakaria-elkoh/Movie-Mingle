const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );
for (let i = 0; i < accordionItemHeaders.length; i++) {
  const accordionItemHeader = accordionItemHeaders[i]; {
     accordionItemHeader.addEventListener("click", (event) => {
     const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );
      if(
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ){
        // currentlyActiveAccordionItemHeader.classList.remove("active");
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  }};