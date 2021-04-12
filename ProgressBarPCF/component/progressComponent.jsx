import * as React from 'react';
import ReactMinimalProgressSteps from '../src/ReactMinimalProgressSteps'


const ProgressBarWithStages = (props) => {



const [selectedItemId, setSelectedItemId] = React.useState( props.params.selectedKey)
  console.log(props);

 

  return (
    // <div style={{ width: 400, height: 400, margin: 40 }}>
    <div style={{ marginTop: 4,  marginLeft: 68, marginRight: 68 }}>
      <ReactMinimalProgressSteps
        data={ props.params.options   }   //  {props.options.map((option: ComponentFramework.PropertyHelper.OptionMetadata) => ({ Value: option.Value, Lable: option.Label, Color: { color: option.Color } }))} 
        selectedItemId= {props.params.selectedKey}//{selectedItemId} // // send an item id as props
        setSelectedItemId= { (element) => {
          props.params.onChange(element) ; 
          setSelectedItemId(element)      
        }} //{ setSelectedItemId} //  returns selected item's id
        nextButtonText="Next"
        prevButtonText="Prev"
      />
    </div>
  )
}

export default ProgressBarWithStages