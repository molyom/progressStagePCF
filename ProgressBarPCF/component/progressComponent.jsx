import * as React from 'react';
import ReactMinimalProgressSteps from '../src/ReactMinimalProgressSteps'


const ProgressBarWithStages = (props) => {

const [selectedItemId, setSelectedItemId] = React.useState( props.params.selectedKey)
  // console.log(props);


  return (
    <div style={{ marginTop: 4,  marginLeft: 68, marginRight: 68, marginBottom: 43 }}>
      <ReactMinimalProgressSteps
        data={ 
          props.params.options
          }   
        selectedItemId= {
          props.params.selectedKey
        }
        setSelectedItemId= { 
          (element) => {
          props.params.onChange(element) ; 
          setSelectedItemId(element)      
        }}
        nextButtonText="Next"
        prevButtonText="Prev"
      />
    </div>
  )
}

export default ProgressBarWithStages