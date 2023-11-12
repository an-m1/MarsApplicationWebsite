// Function to switch to the next stage in a multi-stage form
function nextStage(next) {
  // Hide all stages
  var stages = document.querySelectorAll('.form-stage');
  for (var i = 0; i < stages.length; i++) {
    stages[i].classList.remove('active');
  }

  // Show the next stage
  var nextStage = document.getElementById('stage' + next);
  nextStage.classList.add('active');
}

/* Navbar JS */

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

// If the user has scrolled down 80px from the top, resize the navbar and logo
// Else reset navbar and logo to original size when not scrolled down
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

// Function to handle tab switching in a tabbed interface
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove 'active' class from all tabs
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
// Show the current tab and add 'active' class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  if (evt && evt.currentTarget) {
    evt.currentTarget.className += " active";
  }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Function to handle form submission for personal information
function submitPersonalInformation() {

  // Now switch to the Travel Preferences tab
  openTab(null, 'TravelPreferences'); // Replace 'TravelPreferences' with the actual ID of your Travel Preferences tab

  // Prevent the form from actually submitting and reloading the page
  return false;
}

// Function to toggle fields based on country selection
function toggleFields() {
  var countrySelect = document.getElementById('countrySelect').value;
  var otherCountryField = document.getElementById('otherCountryField');
  var stateField = document.getElementById('stateField');
  var stateSelect = document.getElementById('stateSelect');
  var otherState = document.getElementById('otherState');

  // Toggle other country field
  if (countrySelect === 'Other') {
      otherCountryField.style.display = 'block';
  } else {
      otherCountryField.style.display = 'none';
  }

  // Populate and toggle state field
  stateField.style.display = 'block';

if (countrySelect === 'Canada') {
      populateStates(['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories', 'Nunavut', 'Yukon']);
      stateSelect.style.display = 'block';
      otherState.style.display = 'none';
    } else if (countrySelect === 'Australia') {
      populateStates(['New South Wales', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia', 'Australian Capital Territory', 'Northern Territory']);
      stateSelect.style.display = 'block';
      otherState.style.display = 'none';
  } else if (countrySelect === 'India') {
      populateStates(['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry']);
      stateSelect.style.display = 'block';
      otherState.style.display = 'none';
  } else if (countrySelect === 'United States') {
      populateStates(['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia', 'American Samoa', 'Guam', 'Northern Mariana Islands', 'Puerto Rico', 'U.S. Virgin Islands']);
      stateSelect.style.display = 'block';
      otherState.style.display = 'none';
  }else if (countrySelect === 'Brazil') {
        populateStates(['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']);
        stateSelect.style.display = 'block';
        otherState.style.display = 'none';
    } else if (countrySelect === 'China') {
        populateStates(['Anhui', 'Beijing', 'Chongqing', 'Fujian', 'Gansu', 'Guangdong', 'Guangxi', 'Guizhou', 'Hainan', 'Hebei', 'Heilongjiang', 'Henan', 'Hong Kong', 'Hubei', 'Hunan', 'Inner Mongolia', 'Jiangsu', 'Jiangxi', 'Jilin', 'Liaoning', 'Macau', 'Ningxia', 'Qinghai', 'Shaanxi', 'Shandong', 'Shanghai', 'Shanxi', 'Sichuan', 'Taiwan', 'Tianjin', 'Tibet', 'Xinjiang', 'Yunnan', 'Zhejiang']);
        stateSelect.style.display = 'block';
        otherState.style.display = 'none';
    } else if (countrySelect === 'France') {
        populateStates(['Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Brittany', 'Centre-Val de Loire', 'Corsica', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandy', 'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', 'Provence-Alpes-Côte d\'Azur']);
        stateSelect.style.display = 'block';
        otherState.style.display = 'none';
    } else if (countrySelect === 'Germany') {
        populateStates(['Baden-Württemberg', 'Bavaria', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hesse', 'Lower Saxony', 'Mecklenburg-Vorpommern', 'North Rhine-Westphalia', 'Rhineland-Palatinate', 'Saarland', 'Saxony', 'Saxony-Anhalt', 'Schleswig-Holstein', 'Thuringia']);
        stateSelect.style.display = 'block';
        otherState.style.display = 'none';
    } else if (countrySelect === 'Japan') {
        populateStates(['Hokkaido', 'Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima', 'Ibaraki', 'Tochigi', 'Gunma', 'Saitama', 'Chiba', 'Tokyo', 'Kanagawa', 'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Yamanashi', 'Nagano', 'Gifu', 'Shizuoka', 'Aichi', 'Mie', 'Shiga', 'Kyoto', 'Osaka', 'Hyogo', 'Nara', 'Wakayama', 'Tottori', 'Shimane', 'Okayama', 'Hiroshima', 'Yamaguchi', 'Tokushima', 'Kagawa', 'Ehime', 'Kochi', 'Fukuoka', 'Saga', 'Nagasaki', 'Kumamoto', 'Oita', 'Miyazaki', 'Kagoshima', 'Okinawa']);
        stateSelect.style.display = 'block';
        otherState.style.display = 'none';
    
  } else if (countrySelect === 'Other') {
      stateSelect.style.display = 'none';
      otherState.style.display = 'block';
  } else {
      // For other countries, you can add similar conditions and populate accordingly
      stateSelect.style.display = 'none';
      otherState.style.display = 'block';
  }
}

// Function to populate the state dropdown based on the given array of states
function populateStates(statesArray) {
  var stateSelect = document.getElementById('stateSelect');
  stateSelect.innerHTML = ''; // Clear existing options
  statesArray.forEach(function (state) {
      var option = document.createElement('option');
      option.value = state;
      option.text = state;
      stateSelect.appendChild(option);
  });
}


// Function to validate the personal information form
function validateFormPersonal() {
  // The following validations check for full name, date of birth, nationality, email, and phone number
  // Each field is validated according to specific criteria
  // Returns true if all validations pass, otherwise false
  
  // Validate Full Name
  var fullName = document.getElementById('fullname').value;
  if (!fullName.match(/^[a-zA-Z\s]*$/)) {
      alert('Please enter a valid full name.');
      return false;
  }

  // Validate Date of Birth
  var dob = new Date(document.getElementById('dob').value);
  var today = new Date();
  if (!(dob instanceof Date) || isNaN(dob) || dob >= today) {
      alert('Please enter a valid date of birth in the past.');
      return false;
  }

  // Validate Nationality
  var nationality = document.getElementById('nationalitySelect').value;
  if (nationality === '') {
      alert('Please select your nationality.');
      return false;
  }

  // Validate Other Nationality
  if (nationality === 'Other') {
      var otherNationality = document.getElementById('otherNationality').value;
      if (!otherNationality) {
          alert('Please specify your nationality.');
          return false;
      }
  }

  // Validate Email
  var email = document.getElementById('email').value;
  if (!isEmailValid(email)) {
      alert('Please enter a valid email address in the format "username@domain.com".');
      return false;
  }

  // Validate Phone Number
  var phone = document.getElementById('phone').value;
  if (!isPhoneValid(phone)) {
    alert('Please enter a valid 10-digit phone number without any characters or spaces.\nArea Code is not needed.');
      return false;
  }

  return true;
}

// Function to validate the travel information form
function validateFormTravel() {
 // Validates departure date, return date, and accommodation preference
  // Returns true if all validations pass, otherwise false
  
  // Validate Departure Date (must be in the future)
  var departureDate = new Date(document.getElementById('departureDate').value);
  var today = new Date();
  if (!(departureDate instanceof Date) || isNaN(departureDate) || departureDate <= today) {
      alert('Please enter a valid departure date in the future.');
      return false;
  }

  // Validate Return Date (must be after Departure Date)
  var returnDate = new Date(document.getElementById('returnDate').value);
  if (!(returnDate instanceof Date) || isNaN(returnDate) || returnDate <= departureDate) {
      alert('Please enter a valid return date that is after the departure date.');
      return false;
  }

  // Validate Accommodation Preference
  var accommodationPreference = document.getElementById('accommodationPreference').value;
  if (accommodationPreference === '') {
      alert('Please select your accommodation preference.');
      return false;
  }

  return true;
}

// Function to validate the health information form
function validateFormHealth() {
  // Validates health declaration and emergency contact information
  // Returns true if all validations pass, otherwise false
  
  // Validate Health Declaration
  var healthYes = document.getElementById('healthYes').checked;
  var healthNo = document.getElementById('healthNo').checked;
  if (!healthYes && !healthNo) {
      alert('Please select a health declaration option.');
      return false;
  }

  // Validate Emergency Contact Information
  var contacts = document.querySelectorAll('.emergencyContact');
  for (var i = 0; i < contacts.length; i++) {
      var firstName = contacts[i].querySelector('[name="contact1FirstName"]').value;
      var lastName = contacts[i].querySelector('[name="contact1LastName"]').value;
      var phone = contacts[i].querySelector('[name="contact1Phone"]').value;
      var street = contacts[i].querySelector('[name="contact1Street"]').value;
      var city = contacts[i].querySelector('[name="contact1City"]').value;
      var country = contacts[i].querySelector('[name="country"]').value;

      if (!firstName) {
          alert('Please enter the first name for Emergency Contact ' + (i + 1) + '.');
          return false;
      }
      if (!lastName) {
          alert('Please enter the last name for Emergency Contact ' + (i + 1) + '.');
          return false;
      }
      if (!isPhoneValid(phone)) {
          alert('Please enter a valid 10-digit phone number for Emergency Contact ' + (i + 1) + '.');
          return false;
      }
      if (!street) {
          alert('Please enter the street address for Emergency Contact ' + (i + 1) + '.');
          return false;
      }
      if (!city) {
          alert('Please enter the city for Emergency Contact ' + (i + 1) + '.');
          return false;
      }
      if (country === '') {
          alert('Please select the country for Emergency Contact ' + (i + 1) + '.');
          return false;
      }
  }

  return true;
}

// Utility function to validate email format
function isEmailValid(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Utility function to validate phone number format
function isPhoneValid(phone) {
  var regex = /^\d{10}$/;
  return regex.test(phone);
}

// Utility function to check if a date is in the past
function isDateInPast(date) {
  var today = new Date();
  var inputDate = new Date(date);
  return inputDate < today;
}

// Function to handle the final submission of the form
function finalSubmit() {
  // Validates all sections of the form
  // Displays a success message if all validations pass, otherwise an error message
  // Returns true if all validations pass, otherwise false
  
  // Perform final validation check for all forms
  if (validateFormPersonal() && validateFormTravel() && validateFormHealth()) {
      alert("Application Submitted Successfully!");
      return true;
  } else {
      alert("Please fill all the required fields correctly.");
      return false;
  }
}
