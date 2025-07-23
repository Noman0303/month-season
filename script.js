function checkMonth() {
  const month = parseInt(document.getElementById("monthInput").value);

  // If-Else Logic
  let result1 = "";
  if (month === 1) result1 = "If-Else: This is January.";
  else if (month === 2) result1 = "If-Else: This is February.";
  else if (month === 3) result1 = "If-Else: This is March.";
  else if (month === 4) result1 = "If-Else: This is April.";
  else if (month === 5) result1 = "If-Else: This is May.";
  else if (month === 6) result1 = "If-Else: This is June.";
  else if (month === 7) result1 = "If-Else: This is July.";
  else if (month === 8) result1 = "If-Else: This is August.";
  else if (month === 9) result1 = "If-Else: This is September.";
  else if (month === 10) result1 = "If-Else: This is October.";
  else if (month === 11) result1 = "If-Else: This is November.";
  else if (month === 12) result1 = "If-Else: This is December.";
  else result1 = "Invalid input! Enter a number between 1–12.";

  // Switch Case for Month Name
  let result2 = "";
  switch (month) {
    case 1: result2 = "Switch: This is January."; break;
    case 2: result2 = "Switch: This is February."; break;
    case 3: result2 = "Switch: This is March."; break;
    case 4: result2 = "Switch: This is April."; break;
    case 5: result2 = "Switch: This is May."; break;
    case 6: result2 = "Switch: This is June."; break;
    case 7: result2 = "Switch: This is July."; break;
    case 8: result2 = "Switch: This is August."; break;
    case 9: result2 = "Switch: This is September."; break;
    case 10: result2 = "Switch: This is October."; break;
    case 11: result2 = "Switch: This is November."; break;
    case 12: result2 = "Switch: This is December."; break;
    default: result2 = "Invalid input! Enter a number between 1–12.";
  }

  // Switch with grouped cases for Season
  let result3 = "";
  switch (month) {
    case 12: case 1: case 2:
      result3 = "Season (Switch): It's Winter."; break;
    case 3: case 4: case 5:
      result3 = "Season (Switch): It's Spring."; break;
    case 6: case 7: case 8:
      result3 = "Season (Switch): It's Summer."; break;
    case 9: case 10: case 11:
      result3 = "Season (Switch): It's Autumn."; break;
    default:
      result3 = "Season (Switch): Invalid input!";
  }

  // Switch with conditions using 'true'
  let result4 = "";
  switch (true) {
    case (month >= 3 && month <= 5):
      result4 = "Season (Condition): It's Spring."; break;
    case (month >= 6 && month <= 8):
      result4 = "Season (Condition): It's Summer."; break;
    case (month === 12 || month === 1 || month === 2):
      result4 = "Season (Condition): It's Winter."; break;
    case (month >= 9 && month <= 11):
      result4 = "Season (Condition): It's Autumn."; break;
    default:
      result4 = "Season (Condition): Invalid input!";
  }

  // Display results
  document.getElementById("resultIfElse").innerText = result1;
  document.getElementById("resultSwitch").innerText = result2;
  document.getElementById("resultSeasonSwitch").innerText = result3;
  document.getElementById("resultSeasonCondition").innerText = result4;
}
