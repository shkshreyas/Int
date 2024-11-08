import { useState } from 'react';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const medicalHistory = [
  {
    date: '2023-12-01',
    type: 'General Checkup',
    doctor: 'Dr. Smith',
    diagnosis: 'Routine examination',
    prescription: 'Vitamins D3',
    cost: '$150'
  },
  {
    date: '2023-11-15',
    type: 'Blood Test',
    doctor: 'Dr. Johnson',
    diagnosis: 'Normal results',
    prescription: 'None',
    cost: '$200'
  },
  // Add more history items
];

const upcomingAppointments = [
  {
    date: '2023-12-20',
    time: '10:00 AM',
    doctor: 'Dr. Williams',
    type: 'Dental Checkup',
    cost: '$180'
  },
  // Add more appointments
];

export default function HealthHistory() {
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="tabs tabs-boxed mb-6">
            <a 
              className={`tab ${activeTab === 'history' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              Medical History
            </a>
            <a 
              className={`tab ${activeTab === 'appointments' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('appointments')}
            >
              Upcoming Appointments
            </a>
          </div>

          {activeTab === 'history' ? (
            <div className="space-y-4">
              {medicalHistory.map((record, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="card-title">{record.type}</h3>
                        <p className="text-sm text-gray-500">
                          <CalendarIcon className="inline h-4 w-4 mr-1" />
                          {record.date}
                        </p>
                        <p className="text-sm text-gray-500">
                          <UserIcon className="inline h-4 w-4 mr-1" />
                          {record.doctor}
                        </p>
                      </div>
                      <div className="badge badge-primary">{record.cost}</div>
                    </div>
                    <div className="mt-4">
                      <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
                      <p><strong>Prescription:</strong> {record.prescription}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="card-title">{appointment.type}</h3>
                        <p className="text-sm text-gray-500">
                          <CalendarIcon className="inline h-4 w-4 mr-1" />
                          {appointment.date}
                        </p>
                        <p className="text-sm text-gray-500">
                          <ClockIcon className="inline h-4 w-4 mr-1" />
                          {appointment.time}
                        </p>
                        <p className="text-sm text-gray-500">
                          <UserIcon className="inline h-4 w-4 mr-1" />
                          {appointment.doctor}
                        </p>
                      </div>
                      <div className="badge badge-primary">{appointment.cost}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:w-1/4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Schedule</h3>
              <Calendar
                onChange={setDate}
                value={date}
                className="rounded-lg border-none"
              />
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Reminders</h4>
                <ul className="space-y-2">
                  <li className="text-sm">
                    💊 Take medication at 9:00 AM
                  </li>
                  <li className="text-sm">
                    🏃‍♂️ Exercise routine at 5:00 PM
                  </li>
                  <li className="text-sm">
                    🩺 Doctor appointment next week
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}