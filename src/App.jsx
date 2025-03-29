import { useState } from 'react';
import { MapPin, Car, ChevronDown, ChevronUp, Plus } from 'lucide-react';

const appointments = [
  {
    id: 1,
    client: 'Vanessa Ortega',
    service: 'Peinado de boda',
    start: '11:00',
    end: '14:00',
    leaveAt: '10:15',
    notes: ['Quiere un look elegante.', 'Volver en 4 semanas.'],
    images: ['/images/example1.jpg', '/images/example2.jpg'],
    travelByCar: true
  },
  {
    id: 2,
    client: 'Luisa Medina',
    service: 'Corte',
    start: '09:00',
    end: '10:00',
    leaveAt: '08:30',
    notes: [],
    images: [],
    travelByCar: true
  },
  {
    id: 3,
    client: 'Carlos Alvarez',
    service: 'Tinte',
    start: '13:00',
    end: '14:00',
    leaveAt: null,
    notes: [],
    images: [],
    travelByCar: false
  }
];

export default function App() {
  const [openCard, setOpenCard] = useState(appointments[0].id);
  const [groupBy, setGroupBy] = useState('day');

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <button className="bg-black text-white rounded px-3 py-1 text-sm flex items-center gap-1">
          <Plus size={16} /> New Appointment
        </button>
      </header>

      <div className="flex gap-2 mb-4">
        <button className={`px-3 py-1 rounded ${groupBy === 'day' ? 'bg-black text-white' : 'bg-gray-200'}`} onClick={() => setGroupBy('day')}>Day</button>
        <button className={`px-3 py-1 rounded ${groupBy === 'month' ? 'bg-black text-white' : 'bg-gray-200'}`} onClick={() => setGroupBy('month')}>Month</button>
        <button className={`px-3 py-1 rounded ${groupBy === 'year' ? 'bg-black text-white' : 'bg-gray-200'}`} onClick={() => setGroupBy('year')}>Year</button>
      </div>

      {appointments.map((appt) => (
        <div key={appt.id} className="card">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenCard(openCard === appt.id ? null : appt.id)}>
            <div>
              <p className="font-medium">{appt.start} – {appt.end}</p>
              {appt.leaveAt && <p className="text-sm text-gray-600">Leave by {appt.leaveAt}</p>}
              {appt.travelByCar && (
                <p className="flex items-center gap-1 text-sm text-gray-600"><Car size={16} /> {appt.client}</p>
              )}
              <p className="text-sm text-gray-800">{appt.service}</p>
            </div>
            <div>
              <a href="https://www.google.com/maps/dir/Mallorca/Soller" target="_blank" className="text-blue-600 text-sm">Directions</a>
              <div className="text-gray-500 mt-1">
                {openCard === appt.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </div>
          </div>

          {openCard === appt.id && (
            <div className="mt-2">
              {appt.notes.length > 0 && (
                <div className="mb-2">
                  <p className="font-semibold text-sm">Notes:</p>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {appt.notes.map((n, i) => <li key={i}>{n}</li>)}
                  </ul>
                </div>
              )}

              {appt.images.length > 0 && (
                <div className="flex gap-2">
                  {appt.images.map((img, i) => (
                    <img key={i} src={img} alt="visual" className="w-16 h-16 object-cover rounded" />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
