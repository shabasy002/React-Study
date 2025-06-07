

import InputChanger from '/src/component/input-change'
import FormValidator from '/src/component/form-validation'
import Counter from '/src/component/counter'
import Calculator from '/src/component/calculator'
import DatePicker from '/src/component/date'
import SelectBox from '/src/component/SelectBox'
import Subscribe from '/src/component/Subscribe'
import Stock from '/src/component/Stock'
import Greetings from '/src/component/Greeting'
import  RoleBased from '/src/component/Role-based'
import ToggleCard from '/src/component/toggle-card'


function UsestatePage(){
    return(
    <div>
       <Stock />
       <Subscribe />
      <RoleBased />
      <Greetings />
      <ToggleCard />
      <InputChanger />
      <FormValidator/>
      <Counter/>
   
      <Calculator/>
      <DatePicker/>
       <SelectBox/>
    </div>
       
    )
}

export default UsestatePage;