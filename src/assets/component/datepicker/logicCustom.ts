import { useState } from "react";

export const useCustomDatePicker = () =>{
    const [isVisiable, setIsVisiable] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const openDatePicker = () =>  setIsVisiable(true)
    const closeDatePicker = () => setIsVisiable(false)  
    const handleDateChange = (date:Date)=>{
        setSelectedDate(date)
    }
    
    return {
    isVisiable,
    selectedDate,
    openDatePicker,
    closeDatePicker,
    handleDateChange
    }
}

