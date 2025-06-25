import toast from 'react-hot-toast';
export const getAppointment = () => {
    const appointments = localStorage.getItem('appointment');
    if (appointments) return JSON.parse(appointments);
    return [];
};

export const addAppointment = data => {
    const appointments = getAppointment();
    const isAdded=appointments.find(a=>a.id===data.id)
    if(isAdded) return toast.error("You've already booked this appointment.")
    appointments.push(data);
    toast.success('🩺 Appointment booked successfully!')
    localStorage.setItem('appointment', JSON.stringify(appointments)); // Fixed this line
};
