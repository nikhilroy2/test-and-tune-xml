'use strict';
const s = (s) => document.querySelector(s);
const ss = ss => document.querySelectorAll(ss);
// ......... Set your Parameters Control Below.................
/* ...... Control Rule: 
1. To set Each Row Style write the css with JS format.
2. Each parameter style will change the Each table row.
3. for style example 

  color: 'red' // any color. red, blue, black whatever
  background: 'blue' // same value like color;
  fontSize: '16px' // set font size here 
  display: 'none' // for hide the parameter set 'none' otherwihe empty;

4. Note, you can increase custom style css like border:'solid', fontFamilly: 'arial',
 fontWeight: 'bold'  etc and if you have more then 30 parameter you can increase the
 paramets number;
*/
function control() {
    let hideList = [''];
    let colorList = ['FIRSTNAME'];
    let backgroundList = [''];
    let fontSizeList = [''];
    let fontBold = ['']

    colorList.forEach((color) => {
        if (color) {
            s(`.${color.toUpperCase()}`).style.color = 'red'
        }
    });

    backgroundList.forEach(background => {
        if (background) {
            s(`.${background.toUpperCase()}`).style.background = 'black'
        }
    })

    fontSizeList.forEach(fontSize => {
        if (fontSize) {
            s(`.${fontSize.toUpperCase()}`).style.fontSize = '2rem'
        }


    })
    fontBold.forEach(fontWeight => {
        if (fontWeight) {
            s(`.${fontWeight.toUpperCase()}`).style.fontWeight = 'bold'
        }

    })

    hideList.forEach(hide => {
        if (hide) {
            s(`.${hide.toUpperCase()}`).style.display = 'none'
        }
    });
}






// ......... Below The Script........ Don't Edit it ............
// .............................................................//


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let data = JSON.parse(xhttp.response);
            // console.log(data)
            let {
                monthlyIncome,
                officeAddress,
                homeAddress,
                currentCityDuration,
                currentHomeAddressDuration,
                selfEmployedAdditionalDetails,
                currentWorkExperience,
                totalWorkExperience,
                documentsUploaded,
                error,
                loanTerms
            } = data;

            let entryName = Object.entries(data);
            entryName.forEach((v, i) => {
                        // console.log(typeof v[1] != "string" ? v[1] : '');

                        s('[data-tbody]').innerHTML +=
                            `
                   <tr class=${v[0].toUpperCase()}> 
                   <td class="nowrap" > 
                   ${v[0].toUpperCase()}:
                   
                   </td>
                   ${
               typeof v[1] == "string" 
               ? `<td> ${v[1] === '' ? '-' : v[1] } </td>` :
                 typeof  v[1] == "boolean" ? `<td> ${v[1] === false ? 'false': 'true'} </td>` : 
                 
                 `` 
               }
                   </tr>
                   `
           })

          
           // ..........  monthlyIncome 

           if (monthlyIncome) {
             s('.monthlyIncome'.toUpperCase()).innerHTML +=



               `
                <td>
                <ul class="d-flex flex-wrap monthlyIncome_list"> 
                <li class=" pr-4 pb-4 month">
                 Month </li> 
                 <li class=" pr-4 pb-4 year"> Year</li>
                  <li class=" pr-4 pb-4 amount"> Amount </li> </ul>
                </td>
                `
             monthlyIncome.forEach(v => {
               s('.monthlyIncome_list .month').innerHTML +=
                 `<div class=""> ${v.month} </div>`
               s('.monthlyIncome_list .year').innerHTML +=
                 `<div class=""> ${v.year} </div>`
               s('.monthlyIncome_list .amount').innerHTML +=
                 `<div class=""> ${v.amount} </div>`
             })

           }



           // ......  officeAddress
           if (officeAddress) {

             s('.officeAddress'.toUpperCase()).innerHTML +=
               `
                   <td>
                   <ul class="d-flex flex-wrap officeAddress_list"> 
                     </ul>
                   </td>
                   `
             let officeAddressObj = Object.entries(officeAddress);
             officeAddressObj.forEach(v => {
               s('.officeAddress_list').innerHTML +=
                 `<li class="pr-4 pb-4 "> ${v[0]} <br> ${v[1]} </li>`
             })
             // ......... homeAddress
           }
           if(homeAddress){
             s('.homeAddress'.toUpperCase()).innerHTML +=
             `
             <td>
             <ul class="d-flex flex-wrap homeAddress_list"> 
               </ul>
             </td>
             `
           let homeAddressObj = Object.entries(homeAddress);
           homeAddressObj.forEach(v => {
             s('.homeAddress_list').innerHTML +=
               `<li class="pr-4 pb-4 "> ${v[0]} <br> ${v[1]} </li>`
           })
           }

             // .......... currentCityDuration

            if(currentCityDuration){
             s('.currentCityDuration'.toUpperCase()).innerHTML +=
             `
           <td>
           <ul class="d-flex flex-wrap currentCityDuration_list"> 
             </ul>
           </td>
           `
           let currentCityDurationObj = Object.entries(currentCityDuration);
           currentCityDurationObj.forEach(v => {
             s('.currentCityDuration_list').innerHTML +=
               `<li class="pr-4 pb-4 "> ${v[0]} <br> ${v[1]} </li>`
           })
            }

             // ........... currentHomeAddressDuration

            if(currentHomeAddressDuration){
             s('.currentHomeAddressDuration'.toUpperCase()).innerHTML +=
             `
         <td>
         <ul class="d-flex flex-wrap currentHomeAddressDuration_list"> 
           </ul>
         </td>
         `
           let currentHomeAddressDurationObj = Object.entries(currentHomeAddressDuration);
           currentHomeAddressDurationObj.forEach(v => {
             s('.currentHomeAddressDuration_list').innerHTML +=
               `<li class="pr-4 pb-4 "> ${v[0]} <br> ${v[1]} </li>`
           })
            }

             // ............... selfEmployedAdditionalDetails
            if(selfEmployedAdditionalDetails){
             s('.selfEmployedAdditionalDetails'.toUpperCase()).innerHTML +=
             `
         <td>
         <ul class="d-flex flex-wrap selfEmployedAdditionalDetails_list"> 
           </ul>
         </td>
         `
           let selfEmployedAdditionalDetailsObj = Object.entries(selfEmployedAdditionalDetails);
           selfEmployedAdditionalDetailsObj.forEach(v => {
             s('.selfEmployedAdditionalDetails_list').innerHTML +=
               `<li class="pr-4 pb-4 "> ${v[0]} <br> ${v[1]} </li>`
           })
            }
             // ............ currentWorkExperience

           if(currentWorkExperience){
             s('.currentWorkExperience'.toUpperCase()).innerHTML +=
             `
         <td>
         <ul class="d-flex flex-wrap currentWorkExperience_list"> 
           </ul>
         </td>
         `
           let currentWorkExperienceObj = Object.entries(currentWorkExperience);
           currentWorkExperienceObj.forEach(v => {
             s('.currentWorkExperience_list').innerHTML +=
               `<li class="pr-4 pb-4 "> ${v[0]} <br> ${v[1]} </li>`
           })
           }
             /// ............. totalWorkExperience 

            if(totalWorkExperience){
             s('.totalWorkExperience'.toUpperCase()).innerHTML +=
             `
         <td>
         <ul class="d-flex flex-wrap totalWorkExperience_list"> 
           </ul>
         </td>
         `
           let totalWorkExperienceObj = Object.entries(totalWorkExperience);
           totalWorkExperienceObj.forEach(v => {
             s('.totalWorkExperience_list').innerHTML +=
               `<li class="pr-4 pb-4 "> ${v[0]} <br> ${v[1]} </li>`
           })
           }

           // ................ error............. 

           if(error){
             s('.error'.toUpperCase()).innerHTML +=
             `
         <td>
         <ul class="d-flex flex-wrap error_list"> 
           </ul>
         </td>
         `
           let errorbj = Object.entries(error);
           errorbj.forEach(v => {
             s('.error_list').innerHTML +=
               `<li class="pr-4 pb-4 "> ${v[0]} <br> ${v[1]} </li>`
           })
           }
           // ..........  documentsUploaded 

           if (documentsUploaded) {
             s('.documentsUploaded'.toUpperCase()).innerHTML +=

               `
           <td>
           <ul class="d-flex flex-wrap documentsUploaded_list"> 
           <li class=" pr-4 pb-4 fileName">
           fileName </li> 
            <li class=" pr-4 pb-4 documentType"> documentType</li>
             <li class=" pr-4 pb-4 purpose"> purpose </li> </ul>
           </td>
           `
             documentsUploaded.forEach(v => {
               s('.documentsUploaded_list .fileName').innerHTML +=
                 `<div class=""> ${v.fileName} </div>`
               s('.documentsUploaded_list .documentType').innerHTML +=
                 `<div class=""> ${v.documentType} </div>`
               s('.documentsUploaded_list .purpose').innerHTML +=
                 `<div class=""> ${v.purpose} </div>`
             })
           }

           if(loanTerms){
            s('.loanTerms'.toUpperCase()).innerHTML +=

            `
        <td>
        <ul class="d-flex flex-wrap loanTerms_list"> 
        <li class=" pr-4 pb-4 termName">
        termName </li> 
         <li class=" pr-4 pb-4 termValue"> termValue</li>
         </ul>
        </td>
        `
          loanTerms.forEach(v => {
            s('.loanTerms_list .termName').innerHTML +=
              `<div class=""> ${v.termName} </div>`
            s('.loanTerms_list .termValue').innerHTML +=
              `<div class=""> ${v.termValue} </div>`
          })
           }



           // //............ For Control The Parameters ...................
         /*   let trAll = document.querySelectorAll('.table_wrapper tr');
            trAll.forEach((val,id)=> {
                 const styleString = setControl[id] === undefined ? '' : 
                 Object.keys(setControl[id]).reduce((prev, curr) => {
                  return `${prev += curr.split(/(?=[A-Z])/).join('-').toLowerCase()}:${setControl[id][curr]};`
              }, '');

             // console.log(styleString)
              val.style.cssText += styleString;
            })
            */

            control();
    } 
    else if(xhttp.status === 404){
      s('[data-tbody]').innerHTML = `
      <tr> <td> <h2 class="text-center text-info"> Page Not Found XML File </h2> </td> </tr>
      `
    }
}


// this is xml path url;
xhttp.open("GET", './js/AUEPD3620Kstatus.json', true);
xhttp.send();