import { useState } from 'react';
import './prediction.css';
import axios from 'axios';

function App() {
  var diseases = [
    "Chickenpox",
    "Common cold",
    "Diphtheria",
    "E. coli",
    "Giardiasis",
    "HIV/AIDS",
    "Infectious mononucleosis",
    "Influenza (flu)",
    "Lyme disease",
    "Malaria",
    "Measles",
    "Meningitis",
    "Mumps",
    "Poliomyelitis (polio)",
    "Pneumonia",
    "Rocky mountain spotted fever",
    "Rubella (German measles)",
    "Salmonella infections",
    "Severe acute respiratory syndrome (SARS)",
    "Sexually transmitted diseases",
    "Shingles (herpes zoster)",
    "Tetanus",
    "Toxic shock syndrome",
    "Tuberculosis",
    "Viral hepatitis",
    "West Nile virus",
    "Whooping cough (pertussis)"
  ];

  const A = {
    select1: "",
    select2: "",
    select3: "",
    select4: "",
    select5: "",
    select6: ""
  };

  const [use, function_operation] = useState(A);
  const [dataRecieved, setDataRecieved] = useState(false);
  const [disease, setDisease] = useState();

  function function_change(event) {
    function_operation((item) => {
      return {
        ...item,
        [event.target.name]: event.target.value
      }
    });
  }



  async function funsubmit(event) {
    event.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/predict",
        data: { A },
      });
      if (response.status === 200) {
        setDataRecieved(true);
        setDisease(response.data);
      }
    } catch (error) {
      alert(error?.message);
      console.log(error);
    }
  }


  return (
    <div className="predicition_div">
<p>Select your symptoms</p>
<form onSubmit={funsubmit}>
     <label htmlFor="select1">symptoms1:-</label>

<select
name="select1"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="noting">noting</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>

</select>

<label htmlFor="select2">symptoms2:-</label>
<select
className='select_class'
name="select2"
id="cars"
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="noting">noting</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>
<option value="weakness_in_limbs">weakness_in_limbs</option>
<option value="fast_heart_rate">fast_heart_rate</option>
<option value="pain_during_bowel_movements">pain_during_bowel_movements</option>
<option value="pain_in_anal_region">pain_in_anal_region</option>
<option value="bloody_stool">bloody_stool</option>
<option value="irritation_in_anus">irritation_in_anus</option>
<option value="neck_pain">neck_pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen_legs">swollen_legs</option>
<option value="swollen_blood_vessels">swollen_blood_vessels</option>
<option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
<option value="enlarged_thyroid">enlarged_thyroid</option>
<option value="brittle_nails">brittle_nails</option>
<option value="swollen_extremeties">swollen_extremeties</option>
<option value="excessive_hunger">excessive_hunger</option>
<option value="extra_marital_contacts">extra_marital_contacts</option>
<option value="drying_and_tingling_lips">drying_and_tingling_lips</option>
<option value="slurred_speech">slurred_speech</option>
<option value="knee_pain">knee_pain</option>
<option value="hip_joint_pain">hip_joint_pain</option>
<option value="muscle_weakness">muscle_weakness</option>
<option value="stiff_neck">stiff_neck</option>
<option value="swelling_joints">swelling_joints</option>
<option value="movement_stiffness">movement_stiffness</option>
<option value="spinning_movements">spinning_movements</option>
<option value="loss_of_balance">loss_of_balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness_of_one_body_side">weakness_of_one_body_side</option>
<option value="loss_of_smell">loss_of_smell</option>
<option value="bladder_discomfort">bladder_discomfort</option>
<option value="foul_smell_of_urine">foul_smell_of_urine</option>
<option value="continuous_feel_of_urine">continuous_feel_of_urine</option>
<option value="passage_of_gases">passage_of_gases</option>
<option value="internal_itching">internal_itching</option>
<option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle_pain">muscle_pain</option>
<option value="altered_sensorium">altered_sensorium</option>
<option value="red_spots_over_body">red_spots_over_body</option>
<option value="belly_pain">belly_pain</option>
<option value="abnormal_menstruation">abnormal_menstruation</option>
<option value="dischromic_patches">dischromic_patches</option>
<option value="watering_from_eyes">watering_from_eyes</option>
<option value="increased_appetite">increased_appetite</option>
<option value="polyuria">polyuria</option>
<option value="family_history">family_history</option>
<option value="mucoid_sputum">mucoid_sputum</option>
<option value="rusty_sputum">rusty_sputum</option>
<option value="lack_of_concentration">lack_of_concentration</option>
<option value="visual_disturbances">visual_disturbances</option>
<option value="receiving_blood_transfusion">receiving_blood_transfusion</option>
<option value="receiving_unsterile_injections">receiving_unsterile_injections</option>
<option value="coma">coma</option>
<option value="stomach_bleeding">stomach_bleeding</option>
<option value="distention_of_abdomen">distention_of_abdomen</option>
<option value="history_of_alcohol_consumption">history_of_alcohol_consumption</option>
<option value="fluid_overload">fluid_overload</option>
<option value="blood_in_sputum">blood_in_sputum</option>
<option value="prominent_veins_on_calf">prominent_veins_on_calf</option>
<option value="palpitations">palpitations</option>
<option value="painful_walking">painful_walking</option>
<option value="pus_filled_pimples">pus_filled_pimples</option>
<option value="blackheads">blackheads</option>
<option value="scurring">scurring</option>
<option value="skin_peeling">skin_peeling</option>
<option value="silver_like_dusting">silver_like_dusting</option>
<option value="small_dents_in_nails">small_dents_in_nails</option>
<option value="inflammatory_nails">inflammatory_nails</option>
<option value="blister">blister</option>
<option value="red_sore_around_nose">red_sore_around_nose</option>
<option value="yellow_crust_ooze">yellow_crust_ooze</option>
</select>

<label htmlFor="select3">symptoms3:-</label>
<select
name="select3"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="noting">noting</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>
<option value="weakness_in_limbs">weakness_in_limbs</option>
<option value="fast_heart_rate">fast_heart_rate</option>
<option value="pain_during_bowel_movements">pain_during_bowel_movements</option>
<option value="pain_in_anal_region">pain_in_anal_region</option>
<option value="bloody_stool">bloody_stool</option>
<option value="irritation_in_anus">irritation_in_anus</option>
<option value="neck_pain">neck_pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen_legs">swollen_legs</option>
<option value="swollen_blood_vessels">swollen_blood_vessels</option>
<option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
<option value="enlarged_thyroid">enlarged_thyroid</option>
<option value="brittle_nails">brittle_nails</option>
<option value="swollen_extremeties">swollen_extremeties</option>
<option value="excessive_hunger">excessive_hunger</option>
<option value="extra_marital_contacts">extra_marital_contacts</option>
<option value="drying_and_tingling_lips">drying_and_tingling_lips</option>
<option value="slurred_speech">slurred_speech</option>
<option value="knee_pain">knee_pain</option>
<option value="hip_joint_pain">hip_joint_pain</option>
<option value="muscle_weakness">muscle_weakness</option>
<option value="stiff_neck">stiff_neck</option>
<option value="swelling_joints">swelling_joints</option>
<option value="movement_stiffness">movement_stiffness</option>
<option value="spinning_movements">spinning_movements</option>
<option value="loss_of_balance">loss_of_balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness_of_one_body_side">weakness_of_one_body_side</option>
<option value="loss_of_smell">loss_of_smell</option>
<option value="bladder_discomfort">bladder_discomfort</option>
<option value="foul_smell_of_urine">foul_smell_of_urine</option>
<option value="continuous_feel_of_urine">continuous_feel_of_urine</option>
<option value="passage_of_gases">passage_of_gases</option>
<option value="internal_itching">internal_itching</option>
<option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle_pain">muscle_pain</option>
<option value="altered_sensorium">altered_sensorium</option>
<option value="red_spots_over_body">red_spots_over_body</option>
<option value="belly_pain">belly_pain</option>
<option value="abnormal_menstruation">abnormal_menstruation</option>
<option value="dischromic_patches">dischromic_patches</option>
<option value="watering_from_eyes">watering_from_eyes</option>
<option value="increased_appetite">increased_appetite</option>
<option value="polyuria">polyuria</option>
<option value="family_history">family_history</option>
<option value="mucoid_sputum">mucoid_sputum</option>
<option value="rusty_sputum">rusty_sputum</option>
<option value="lack_of_concentration">lack_of_concentration</option>
<option value="visual_disturbances">visual_disturbances</option>
<option value="receiving_blood_transfusion">receiving_blood_transfusion</option>
<option value="receiving_unsterile_injections">receiving_unsterile_injections</option>
<option value="coma">coma</option>
<option value="stomach_bleeding">stomach_bleeding</option>
<option value="distention_of_abdomen">distention_of_abdomen</option>
<option value="history_of_alcohol_consumption">history_of_alcohol_consumption</option>
<option value="fluid_overload">fluid_overload</option>
<option value="blood_in_sputum">blood_in_sputum</option>
<option value="prominent_veins_on_calf">prominent_veins_on_calf</option>
<option value="palpitations">palpitations</option>
<option value="painful_walking">painful_walking</option>
<option value="pus_filled_pimples">pus_filled_pimples</option>
<option value="blackheads">blackheads</option>
<option value="scurring">scurring</option>
<option value="skin_peeling">skin_peeling</option>
<option value="silver_like_dusting">silver_like_dusting</option>
<option value="small_dents_in_nails">small_dents_in_nails</option>
<option value="inflammatory_nails">inflammatory_nails</option>
<option value="blister">blister</option>
<option value="red_sore_around_nose">red_sore_around_nose</option>
<option value="yellow_crust_ooze">yellow_crust_ooze</option>
</select>


<label htmlFor="select4">symptoms4:-</label>
<select
name="select4"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="noting">noting</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>
<option value="weakness_in_limbs">weakness_in_limbs</option>
<option value="fast_heart_rate">fast_heart_rate</option>
<option value="pain_during_bowel_movements">pain_during_bowel_movements</option>
<option value="pain_in_anal_region">pain_in_anal_region</option>
<option value="bloody_stool">bloody_stool</option>
<option value="irritation_in_anus">irritation_in_anus</option>
<option value="neck_pain">neck_pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen_legs">swollen_legs</option>
<option value="swollen_blood_vessels">swollen_blood_vessels</option>
<option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
<option value="enlarged_thyroid">enlarged_thyroid</option>
<option value="brittle_nails">brittle_nails</option>
<option value="swollen_extremeties">swollen_extremeties</option>
<option value="excessive_hunger">excessive_hunger</option>
<option value="extra_marital_contacts">extra_marital_contacts</option>
<option value="drying_and_tingling_lips">drying_and_tingling_lips</option>
<option value="slurred_speech">slurred_speech</option>
<option value="knee_pain">knee_pain</option>
<option value="hip_joint_pain">hip_joint_pain</option>
<option value="muscle_weakness">muscle_weakness</option>
<option value="stiff_neck">stiff_neck</option>
<option value="swelling_joints">swelling_joints</option>
<option value="movement_stiffness">movement_stiffness</option>
<option value="spinning_movements">spinning_movements</option>
<option value="loss_of_balance">loss_of_balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness_of_one_body_side">weakness_of_one_body_side</option>
<option value="loss_of_smell">loss_of_smell</option>
<option value="bladder_discomfort">bladder_discomfort</option>
<option value="foul_smell_of_urine">foul_smell_of_urine</option>
<option value="continuous_feel_of_urine">continuous_feel_of_urine</option>
<option value="passage_of_gases">passage_of_gases</option>
<option value="internal_itching">internal_itching</option>
<option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle_pain">muscle_pain</option>
<option value="altered_sensorium">altered_sensorium</option>
<option value="red_spots_over_body">red_spots_over_body</option>
<option value="belly_pain">belly_pain</option>
<option value="abnormal_menstruation">abnormal_menstruation</option>
<option value="dischromic_patches">dischromic_patches</option>
<option value="watering_from_eyes">watering_from_eyes</option>
<option value="increased_appetite">increased_appetite</option>
<option value="polyuria">polyuria</option>
<option value="family_history">family_history</option>
<option value="mucoid_sputum">mucoid_sputum</option>
<option value="rusty_sputum">rusty_sputum</option>
<option value="lack_of_concentration">lack_of_concentration</option>
<option value="visual_disturbances">visual_disturbances</option>
<option value="receiving_blood_transfusion">receiving_blood_transfusion</option>
<option value="receiving_unsterile_injections">receiving_unsterile_injections</option>
<option value="coma">coma</option>
<option value="stomach_bleeding">stomach_bleeding</option>
<option value="distention_of_abdomen">distention_of_abdomen</option>
<option value="history_of_alcohol_consumption">history_of_alcohol_consumption</option>
<option value="fluid_overload">fluid_overload</option>
<option value="blood_in_sputum">blood_in_sputum</option>
<option value="prominent_veins_on_calf">prominent_veins_on_calf</option>
<option value="palpitations">palpitations</option>
<option value="painful_walking">painful_walking</option>
<option value="pus_filled_pimples">pus_filled_pimples</option>
<option value="blackheads">blackheads</option>
<option value="scurring">scurring</option>
<option value="skin_peeling">skin_peeling</option>
<option value="silver_like_dusting">silver_like_dusting</option>
<option value="small_dents_in_nails">small_dents_in_nails</option>
<option value="inflammatory_nails">inflammatory_nails</option>
<option value="blister">blister</option>
<option value="red_sore_around_nose">red_sore_around_nose</option>
<option value="yellow_crust_ooze">yellow_crust_ooze</option>
</select>

<label htmlFor="select5">symptoms5:-</label>
<select
name="select5"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="noting">noting</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>
<option value="weakness_in_limbs">weakness_in_limbs</option>
<option value="fast_heart_rate">fast_heart_rate</option>
<option value="pain_during_bowel_movements">pain_during_bowel_movements</option>
<option value="pain_in_anal_region">pain_in_anal_region</option>
<option value="bloody_stool">bloody_stool</option>
<option value="irritation_in_anus">irritation_in_anus</option>
<option value="neck_pain">neck_pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen_legs">swollen_legs</option>
<option value="swollen_blood_vessels">swollen_blood_vessels</option>
<option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
<option value="enlarged_thyroid">enlarged_thyroid</option>
<option value="brittle_nails">brittle_nails</option>
<option value="swollen_extremeties">swollen_extremeties</option>
<option value="excessive_hunger">excessive_hunger</option>
<option value="extra_marital_contacts">extra_marital_contacts</option>
<option value="drying_and_tingling_lips">drying_and_tingling_lips</option>
<option value="slurred_speech">slurred_speech</option>
<option value="knee_pain">knee_pain</option>
<option value="hip_joint_pain">hip_joint_pain</option>
<option value="muscle_weakness">muscle_weakness</option>
<option value="stiff_neck">stiff_neck</option>
<option value="swelling_joints">swelling_joints</option>
<option value="movement_stiffness">movement_stiffness</option>
<option value="spinning_movements">spinning_movements</option>
<option value="loss_of_balance">loss_of_balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness_of_one_body_side">weakness_of_one_body_side</option>
<option value="loss_of_smell">loss_of_smell</option>
<option value="bladder_discomfort">bladder_discomfort</option>
<option value="foul_smell_of_urine">foul_smell_of_urine</option>
<option value="continuous_feel_of_urine">continuous_feel_of_urine</option>
<option value="passage_of_gases">passage_of_gases</option>
<option value="internal_itching">internal_itching</option>
<option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle_pain">muscle_pain</option>
<option value="altered_sensorium">altered_sensorium</option>
<option value="red_spots_over_body">red_spots_over_body</option>
<option value="belly_pain">belly_pain</option>
<option value="abnormal_menstruation">abnormal_menstruation</option>
<option value="dischromic_patches">dischromic_patches</option>
<option value="watering_from_eyes">watering_from_eyes</option>
<option value="increased_appetite">increased_appetite</option>
<option value="polyuria">polyuria</option>
<option value="family_history">family_history</option>
<option value="mucoid_sputum">mucoid_sputum</option>
<option value="rusty_sputum">rusty_sputum</option>
<option value="lack_of_concentration">lack_of_concentration</option>
<option value="visual_disturbances">visual_disturbances</option>
<option value="receiving_blood_transfusion">receiving_blood_transfusion</option>
<option value="receiving_unsterile_injections">receiving_unsterile_injections</option>
<option value="coma">coma</option>
<option value="stomach_bleeding">stomach_bleeding</option>
<option value="distention_of_abdomen">distention_of_abdomen</option>
<option value="history_of_alcohol_consumption">history_of_alcohol_consumption</option>
<option value="fluid_overload">fluid_overload</option>
<option value="blood_in_sputum">blood_in_sputum</option>
<option value="prominent_veins_on_calf">prominent_veins_on_calf</option>
<option value="palpitations">palpitations</option>
<option value="painful_walking">painful_walking</option>
<option value="pus_filled_pimples">pus_filled_pimples</option>
<option value="blackheads">blackheads</option>
<option value="scurring">scurring</option>
<option value="skin_peeling">skin_peeling</option>
<option value="silver_like_dusting">silver_like_dusting</option>
<option value="small_dents_in_nails">small_dents_in_nails</option>
<option value="inflammatory_nails">inflammatory_nails</option>
<option value="blister">blister</option>
<option value="red_sore_around_nose">red_sore_around_nose</option>
<option value="yellow_crust_ooze">yellow_crust_ooze</option>
</select>


<label htmlFor="select6">symptoms6:-</label>
<select
name="select6"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="noting">noting</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>
<option value="weakness_in_limbs">weakness_in_limbs</option>
<option value="fast_heart_rate">fast_heart_rate</option>
<option value="pain_during_bowel_movements">pain_during_bowel_movements</option>
<option value="pain_in_anal_region">pain_in_anal_region</option>
<option value="bloody_stool">bloody_stool</option>
<option value="irritation_in_anus">irritation_in_anus</option>
<option value="neck_pain">neck_pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen_legs">swollen_legs</option>
<option value="swollen_blood_vessels">swollen_blood_vessels</option>
<option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
<option value="enlarged_thyroid">enlarged_thyroid</option>
<option value="brittle_nails">brittle_nails</option>
<option value="swollen_extremeties">swollen_extremeties</option>
<option value="excessive_hunger">excessive_hunger</option>
<option value="extra_marital_contacts">extra_marital_contacts</option>
<option value="drying_and_tingling_lips">drying_and_tingling_lips</option>
<option value="slurred_speech">slurred_speech</option>
<option value="knee_pain">knee_pain</option>
<option value="hip_joint_pain">hip_joint_pain</option>
<option value="muscle_weakness">muscle_weakness</option>
<option value="stiff_neck">stiff_neck</option>
<option value="swelling_joints">swelling_joints</option>
<option value="movement_stiffness">movement_stiffness</option>
<option value="spinning_movements">spinning_movements</option>
<option value="loss_of_balance">loss_of_balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness_of_one_body_side">weakness_of_one_body_side</option>
<option value="loss_of_smell">loss_of_smell</option>
<option value="bladder_discomfort">bladder_discomfort</option>
<option value="foul_smell_of_urine">foul_smell_of_urine</option>
<option value="continuous_feel_of_urine">continuous_feel_of_urine</option>
<option value="passage_of_gases">passage_of_gases</option>
<option value="internal_itching">internal_itching</option>
<option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle_pain">muscle_pain</option>
<option value="altered_sensorium">altered_sensorium</option>
<option value="red_spots_over_body">red_spots_over_body</option>
<option value="belly_pain">belly_pain</option>
<option value="abnormal_menstruation">abnormal_menstruation</option>
<option value="dischromic_patches">dischromic_patches</option>
<option value="watering_from_eyes">watering_from_eyes</option>
<option value="increased_appetite">increased_appetite</option>
<option value="polyuria">polyuria</option>
<option value="family_history">family_history</option>
<option value="mucoid_sputum">mucoid_sputum</option>
<option value="rusty_sputum">rusty_sputum</option>
<option value="lack_of_concentration">lack_of_concentration</option>
<option value="visual_disturbances">visual_disturbances</option>
<option value="receiving_blood_transfusion">receiving_blood_transfusion</option>
<option value="receiving_unsterile_injections">receiving_unsterile_injections</option>
<option value="coma">coma</option>
<option value="stomach_bleeding">stomach_bleeding</option>
<option value="distention_of_abdomen">distention_of_abdomen</option>
<option value="history_of_alcohol_consumption">history_of_alcohol_consumption</option>
<option value="fluid_overload">fluid_overload</option>
<option value="blood_in_sputum">blood_in_sputum</option>
<option value="prominent_veins_on_calf">prominent_veins_on_calf</option>
<option value="palpitations">palpitations</option>
<option value="painful_walking">painful_walking</option>
<option value="pus_filled_pimples">pus_filled_pimples</option>
<option value="blackheads">blackheads</option>
<option value="scurring">scurring</option>
<option value="skin_peeling">skin_peeling</option>
<option value="silver_like_dusting">silver_like_dusting</option>
<option value="small_dents_in_nails">small_dents_in_nails</option>
<option value="inflammatory_nails">inflammatory_nails</option>
<option value="blister">blister</option>
<option value="red_sore_around_nose">red_sore_around_nose</option>
<option value="yellow_crust_ooze">yellow_crust_ooze</option>
</select>


<button >Submit</button>
</form>
{dataRecieved && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "#fff" }}>Disease: {disease?.name}</p>
        </div>
      )}

 <div className="gmap_canvas">
        <iframe
          title="Google Maps"
          width="770"
          height="510"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=hosptals&t=&z=14&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        <a href="https://2yu.co">2yu</a>
      </div>
      <br />
      <style>{`
        .mapouter {
          position: relative;
          text-align: right;
          height: 510px;
          width: 770px;

        }

        .gmap_canvas {
          overflow: hidden;
          background: none!important;
          height: 510px;
          width: 770px;
          padding: 20px 20px 20px 20px;
          margin:-100px;
          margin-top:150px;
          margin-bottom: 100px;

        }
      `}</style>
      <a href="https://embedgooglemap.2yu.co"></a>
      <style>{`
        .gmap_canvas {
          overflow: hidden;
          background: none!important;
          height: 510px;
          width: 770px;
        }
      `}</style>
    </div>

  );
}

export default App;
