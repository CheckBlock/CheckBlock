import React, { useEffect, useState} from 'react';

const FilterTypes = ({ selectedComplaints, get_API_Data, selectedZips }) => {
  const sanitation = [
    'Missed Collection',
    'UNSANITARY CONDITION',
    'Dirty Condition',
    'Rodent',
    'Sewer',
    'Air Quality',
    'Drug Activity',
    'Residential Disposal Complaint',
    'Indoor Air Quality',
    'Dumpster Complaint',
    'Encampment',
    'Illegal Dumping'
  ];

  const plumbing = [
    'HEAT/HOT WATER',
    'Water System',
    'PLUMBING',
    'WATER LEAK',
    'Boilers',
    'Non-Residential Heat',
    'Plumbing',
    'Water Conservation',
    'Water Quality',
    'Indoor Sewage',
    'Drinking Water',
    'General Construction/Plumbing'
  ];

  const traffic = [
    'Illegal Parking',
    'Blocked Driveway',
    'Street Condition',
    'Abandoned Vehicle',
    'Street Light Condition',
    'Traffic Signal Condition',
    'Traffic',
    'Root/Sewer/Sidewalk Condition',
    'Street Sign - Damaged',
    'Obstruction',
    'Street Sweeping Complaint',
    'Derelict Vehicles'
  ];

  const noise = [
    'Noise - Residential',
    'Noise - Helicopter',
    'Noise - Street/Sidewalk',
    'Noise - Commercial',
    'Noise - Vehicle',
    'Noise',
    'Noise - Park',
    'Noise - House of Worship'
  ];

  const [checkedBoxes, setChecked] = useState({});
  const handleChange = (event) => {
    setChecked({...checkedBoxes, [event.target.name]: event.target.checked});
  };
  
  useEffect(() => {
    let complaints = [];
    if(checkedBoxes['noise']) complaints = complaints.concat(noise);
    if(checkedBoxes['traffic']) complaints = complaints.concat(traffic);
    if(checkedBoxes['plumbing']) complaints = complaints.concat(plumbing);
    if(checkedBoxes['sanitation']) complaints = complaints.concat(sanitation);
    selectedComplaints(complaints);
    get_API_Data(selectedZips, complaints);
  }, [checkedBoxes]);

  return (
    <>
      <h2>Narrow by Complaint Types:</h2>
      <form> 
        <div key={'noise'}>
          <input type="checkbox" id='noise' checked={checkedBoxes['noise']} name='noise' onChange={handleChange} />
          <label htmlFor='noise'>Noise Complaints</label>
        </div>
        <div key={'traffic'}>
          <input type="checkbox" id='traffic' checked={checkedBoxes['traffic']} name='traffic' onChange={handleChange} />
          <label htmlFor='traffic'>Traffic/Road Issues</label>
        </div>
        <div key={'plumbing'}>
          <input type="checkbox" id='plumbing' checked={checkedBoxes['plumbing']} name='plumbing' onChange={handleChange} />
          <label htmlFor='plumbing'>Plumbing</label>
        </div>
        <div key={'sanitation'}>
          <input type="checkbox" id='sanitation' checked={checkedBoxes['sanitation']} name='sanitation' onChange={handleChange} />
          <label htmlFor='sanitation'>Sanitation</label>
        </div>

      </form>
    </>
  );
};

export default FilterTypes;