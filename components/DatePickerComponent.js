// components/DatePickerComponent.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Mock availability data
    const availability = {
        '2025-01-04': 'available',
        '2025-01-12': 'limited',
        '2025-01-18': 'full',
        '2025-01-26': 'full',
    };

    const highlightDates = () => {
        const classes = {};
        for (let date in availability) {
            const formattedDate = new Date(date);
            classes[formattedDate] = availability[date];
        }
        return classes;
    };

    const getDayClass = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        if (availability[formattedDate]) {
            return `day-${availability[formattedDate]}`;
        }
        return '';
    };

    return (
        <div className="date-picker-container">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                calendarClassName="custom-calendar"
                dayClassName={(date) => getDayClass(date)}
            />
            <style jsx>{`
                .custom-calendar .day-available {
                    background-color: #c6e6c3; /* Green */
                    color: #000;
                }
                .custom-calendar .day-limited {
                    background-color: #fff3cd; /* Yellow */
                    color: #000;
                }
                .custom-calendar .day-full {
                    background-color: #f8d7da; /* Red */
                    color: #000;
                }
                .custom-calendar .react-datepicker__day--selected {
                    background-color: #007bff;
                    color: #fff;
                }
            `}</style>
        </div>
    );
};

export default DatePickerComponent;
